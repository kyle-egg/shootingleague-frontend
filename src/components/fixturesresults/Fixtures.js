import React from 'react'
import { getAllFixtures, getAllSeasons, getAllTeams } from '../../lib/api'
import { dynamicSeasonValue } from './Tables'

function Fixtures() {
  const [fixtures, setFixtures] = React.useState(null)
  const [teams, setTeams] = React.useState(null)
  const [leagues, setLeagues] = React.useState(null)
  const [leagueValue, setLeagueValue] = React.useState('')
  const [teamValue, setTeamValue] = React.useState('')

  React.useEffect(() => {
    const getData = async () => {
      const res = await getAllFixtures()
      setFixtures(res.data)
    }
    getData()
    
  }, [ ])

  React.useEffect(() => {
    const getData = async () => {
      const res = await getAllTeams()
      setTeams(res.data)
    }
    getData()
    
  }, [ ])

  React.useEffect(() => {
    const getData = async () => {
      const res = await getAllSeasons()
      setLeagues(res.data)
    }
    getData()
    
  }, [ ])

  const handleTeam = (e) => {
    setTeamValue(e.target.value)
  }

  const handleLeague = (e) => {
    setLeagueValue(e.target.value)
  }

  var today = new Date()
  var date = String(today.getDate()).padStart(2, '0')
  var month = String(today.getMonth() + 1).padStart(2, '0') //January is 0!
  var year = String(today.getFullYear())
  var hh = String(today.getHours()) - 1
  var mm = String(today.getMinutes())
  var ss = String(today.getSeconds())

  today = year + month + date + hh + mm + ss
  
  if (fixtures) {
    fixtures.sort(function(b,a){
      return new Date(b.date) - new Date(a.date)
    })

  }
  
  const filterFixtures = () => {
    if (teamValue && leagueValue) {
      return fixtures.filter(fixture => {
        return fixture.league.some(l => leagueValue.includes(l.name)) && 
        fixture.homeTeam.every(hT => teamValue.includes(hT.name)) &&
        fixture.date.split('-').join('') + fixture.time.split(':').join('') > today ||
        fixture.league.some(l => leagueValue.includes(l.name)) && 
        fixture.awayTeam.every(aT => teamValue.includes(aT.name)) &&
        fixture.date.split('-').join('') + fixture.time.split(':').join('') > today
      })
    } else if (teamValue) {
      return fixtures.filter(fixture => {
        return fixture.homeTeam.every(hT => teamValue.includes(hT.name)) &&
        fixture.date.split('-').join('') + fixture.time.split(':').join('') > today ||
        fixture.awayTeam.every(aT => teamValue.includes(aT.name)) &&
        fixture.date.split('-').join('') + fixture.time.split(':').join('') > today
      }) 
    } else if (leagueValue) {
      return fixtures.filter(fixture => {
        return fixture.league.some(l => leagueValue.includes(l.name)) &&
        fixture.date.split('-').join('') + fixture.time.split(':').join('') > today
      })
    } else {
      return fixtures.filter(fixture => {
        return fixture.date.split('-').join('') + fixture.time.split(':').join('') > today
      })
    }
  }

  const filterLeagues = () => {
    if (leagues) {
      return leagues.filter(league => {
        return JSON.stringify(league.name).includes(dynamicSeasonValue())
      })
    }
  }
  
  const currentLeagues = filterLeagues()

  return (
    <section>
      <div id="fixtureshero" className="uk-background-cover uk-height-large uk-panel uk-flex uk-flex-center uk-flex-middle">      
      </div>
      <div id="homeabout" className="uk-child-width-1-1@s" uk-grid>
        <div className="fixturescontainer">
          <div id="elevate" className="uk-background-cover uk-panel uk-flex uk-flex-column uk-flex-center uk-flex-middle uk-text-center">
            <h3 id="fixturetitle"className="uk-text-lead">FIXTURES</h3>
            <br></br>
            {/* <div>
              <ul className="uk-subnav uk-subnav-pill" uk-margin>
                <li className="uk-active"><a href="#">All</a></li>
                <li><a href="#">Division 1</a></li>
                <li><a href="#">Division 2</a></li>
              </ul>
            </div> */}
            <div>
              <div>
                {/* <iframe
                className="fixturesgrid" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTxlCLGun8UdSIxgeGvBmJWpJyDpSVj4U5CLMfKpbat9_dFmNqzfYTVyeTjt-IEbvkw-Ay5jerNYUW4/pubhtml?gid=1279606674&amp;single=true&amp;widget=false&amp;headers=false&amp;scrolling=no&amp;chrome=false"></iframe> */}
                <div className='fixtureFilters uk-flex-inline'>
                  <div>   
                    <select 
                      className='uk-select seasonSelector'
                      onChange={handleLeague}>
                      <option value=''>LEAGUES</option>
                      {currentLeagues && currentLeagues[0].leagues.map(league => {
                        return <option key={league.id} value={league.name}>{league.name}</option>
                      })}
                    </select>
                  </div>
                  <div>
                    <select 
                      className='uk-select teamSelector'
                      onChange={handleTeam}>
                      <option value=''>TEAMS</option>
                      {teams && teams.map(team => {
                        return <option key={team.id} value={team.name}>{team.name}</option>
                      })}
                    </select>
                  </div>
                </div>
              </div>
              {fixtures && filterFixtures().map(fixture => {
                return <div className="column"key={fixture.id} id="column">
                  <div className="uk-column-1-7">
                    <p>{fixture.date.split('-').reverse().join('/')} - {fixture.time.slice(0,5)}</p>
                    <p>{fixture.league[0].name}</p>
                    <img className='smallFixtureLogo' src={fixture.homeTeam[0].logo}></img>
                    <p><a href={`/teams/${fixture.homeTeam[0].id}`}>{fixture.homeTeam[0].name}</a></p>
                    <p>V</p>
                    <p><a href={`/teams/${fixture.awayTeam[0].id}`}>{fixture.awayTeam[0].name}</a></p>
                    <img className='smallFixtureLogo' src={fixture.awayTeam[0].logo}></img>
                  </div>
                </div>
              })}
            </div>
            
          </div>
        </div>
      </div> 
    </section>
  )
}
export default Fixtures