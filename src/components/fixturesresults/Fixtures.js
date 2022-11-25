import React from 'react'
import axios from 'axios'


function Fixtures() {
  const [fixtures, setFixtures] = React.useState(null)
  const [teams, setTeams] = React.useState(null)
  const [seasons, setSeasons] = React.useState(null)
  const [leagues, setLeagues] = React.useState(null)
  const [leagueValue, setLeagueValue] = React.useState(null)
  const [seasonValue, setSeasonValue] = React.useState('')
  const [teamValue, setTeamValue] = React.useState('')

  React.useEffect(() => {
    const getData = async () => {
      const res = await axios.get('/api/fixtures')
      setFixtures(res.data)
    }
    getData()
    
  }, [ ])

  React.useEffect(() => {
    const getData = async () => {
      const res = await axios.get('/api/clubs/teams')
      setTeams(res.data)
    }
    getData()
    
  }, [ ])

  React.useEffect(() => {
    const getData = async () => {
      const res = await axios.get('/api/seasons')
      setSeasons(res.data)
    }
    getData()
    
  }, [ ])

  React.useEffect(() => {
    const getData = async () => {
      const res = await axios.get('/api/seasons/2/leagues')
      setLeagues(res.data)
    }
    getData()
    
  }, [ ])

  const handleSeason = (e) => {
    setSeasonValue(e.target.value)
  }

  const handleTeam = (e) => {
    setTeamValue(e.target.value)
  }

  const handleLeague = (e) => {
    setLeagueValue(e.target.value)
  }

  var today = new Date()
  var dd = String(today.getDate()).padStart(2, '0')
  var mm = String(today.getMonth() + 1).padStart(2, '0') //January is 0!
  var yyyy = today.getFullYear()
  
  today = dd + '/' + mm + '/' + yyyy
  
  var sdate = '2016/10/15'
  sdate = sdate.split('/').reverse().join('/')
  // console.log(sdate)
  console.log(new Date())
  // console.log(today)
  
  

  if (fixtures) {
  const sorted = fixtures.sort(function(b,a){
    return new Date(b.date) - new Date(a.date)
  })
  console.log(sorted)
  }
  
  
  const filterFixtures = () => {
    if (teamValue || seasonValue || leagueValue) {
      return fixtures.filter(fixture => {
        return fixture.homeTeam.every(hT => teamValue.includes(hT.name)) ||
        fixture.awayTeam.every(aT => teamValue.includes(aT.name)) &&
        fixture.season.every(s => seasonValue.includes(s.name)) &&
        fixture.league.every(l => leagueValue.includes(l.name)) &&
        fixture.date > new Date()        
      })
    } else {
      return fixtures 
    }
  }

  return (
    <section>
      <div id="fixtureshero" className="uk-background-cover uk-height-large uk-panel uk-flex uk-flex-center uk-flex-middle">      
      </div>
      <div id="homeabout" className="uk-child-width-1-1@s" uk-grid>
        <div className="fixturescontainer">
          <div id="elevate" className="uk-background-cover uk-height-medium uk-panel uk-flex uk-flex-column uk-flex-center uk-flex-middle uk-text-center">
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
                      className='seasonSelector'
                      onChange={handleSeason}>
                      {seasons && seasons.map(season => {
                        return <option key={season.id} value={season.name}>{season.name}</option>
                      })}
                    </select>
                  </div>  
                  <div>   
                    <select 
                      className='seasonSelector'
                      onChange={handleLeague}>
                      <option value=''>LEAGUES</option>
                      {leagues && leagues.map(league => {
                        return <option key={league.id} value={league.name}>{league.name}</option>
                      })}
                    </select>
                  </div>
                  <div>
                    <select 
                      className='teamSelector'
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
                  <div className="uk-column-1-6">
                    <p>{fixture.date} - {fixture.time}</p>
                    <p>{fixture.league[0].name}</p>
                    <img className='smallFixtureLogo' src={fixture.homeTeam[0].logo}></img>
                    <p>{fixture.homeTeam[0].name}</p>
                    <p>{fixture.awayTeam[0].name}</p>
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