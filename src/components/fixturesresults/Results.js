import React from 'react'
import { getAllFixtures, getAllTeams, getAllSeasons } from '../../lib/api'
import { dynamicSeasonValue } from './Tables'


function Results() {
  var today = new Date()
  var date = String(today.getDate()).padStart(2, '0')
  var month = String(today.getMonth() + 1).padStart(2, '0') //January is 0!
  var year = String(today.getFullYear())
  var hh = String(today.getHours()) - 1
  var mm = String(today.getMinutes())
  var ss = String(today.getSeconds())
  const [fixtures, setFixtures] = React.useState(null)
  const [teams, setTeams] = React.useState(null)
  const [seasons, setSeasons] = React.useState(null)
  const [leagueValue, setLeagueValue] = React.useState('')
  const [seasonValue, setSeasonValue] = React.useState(dynamicSeasonValue())
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
      setSeasons(res.data)
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

  today = year + month + date + hh + mm + ss

  if (fixtures) {
    fixtures.sort(function(b,a){
      return new Date(a.date) - new Date(b.date)
    })

  }

  if (seasons) {
    seasons.sort((b, a) => a.name - b.name)
  }
  
  const filterResults = () => {
    if (teamValue && leagueValue) {
      return fixtures.filter(fixture => {
        return fixture.league.some(l => leagueValue.includes(l.name)) && 
        fixture.homeTeam.every(hT => teamValue.includes(hT.name)) &&
        fixture.season.every(s => seasonValue.includes(s.name)) &&
        fixture.date.split('-').join('') + fixture.time.split(':').join('') < today ||
        fixture.league.some(l => leagueValue.includes(l.name)) && 
        fixture.awayTeam.every(aT => teamValue.includes(aT.name)) &&
        fixture.season.every(s => seasonValue.includes(s.name)) &&
        fixture.date.split('-').join('') + fixture.time.split(':').join('') < today
      })
    } else if (teamValue) {
      return fixtures.filter(fixture => {
        return fixture.homeTeam.every(hT => teamValue.includes(hT.name)) &&
        fixture.season.every(s => seasonValue.includes(s.name)) &&
        fixture.date.split('-').join('') + fixture.time.split(':').join('') < today ||
        fixture.awayTeam.every(aT => teamValue.includes(aT.name)) &&
        fixture.season.every(s => seasonValue.includes(s.name)) &&
        fixture.date.split('-').join('') + fixture.time.split(':').join('') < today
      }) 
    } else if (leagueValue) {
      return fixtures.filter(fixture => {
        return fixture.league.some(l => leagueValue.includes(l.name)) &&
        fixture.season.every(s => seasonValue.includes(s.name)) &&
        fixture.date.split('-').join('') + fixture.time.split(':').join('') < today
      })
    } else {
      return fixtures.filter(fixture => {
        return fixture.date.split('-').join('') + fixture.time.split(':').join('') < today &&
        fixture.season.every(s => seasonValue.includes(s.name))
      })
    }
  }

  const filterCurrentLeagues = () => {
    if (seasons && seasonValue) {
      return seasons.filter(league => {
        return JSON.stringify(league.name).includes(seasonValue)
      })
    }
  }
  
  const currentLeagues = filterCurrentLeagues()

  // function Results() {
  //   const [showDetailed, setShowDetailed] = React.useState(false)

  //   const seeDetailed = () => {
  //     if (!showDetailed) {
  //       setShowDetailed(true)
  //     } else {
  //       setShowDetailed(false)
  //     }
  //   }

  //   const closeDetailed = () => { 
  //     setShowDetailed(false)
  //   }

  return (
    <section>
      <div id="resultsshero" className="uk-background-cover uk-panel uk-flex uk-flex-center uk-flex-middle">      
      </div>
      <div id="homeabout" className="uk-child-width-1-1@s" uk-grid>
        <div className="fixturescontainer">
          <div id="elevate" className="uk-background-cover uk-panel uk-flex uk-flex-column uk-flex-center uk-flex-middle uk-text-center">
            <h3 id="fixturetitle"className="uk-text-lead">RESULTS</h3>
            <br></br>
            {/* <div>
              <ul className="uk-subnav uk-subnav-pill" uk-margin>
                <li onClick={closeDetailed}><a>All</a></li>
                <li><a onClick={seeDetailed}>Latest Results</a></li>
              </ul>
            </div>
            <div>
              {showDetailed && (
                <iframe
                  className="resultsgrid" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTxlCLGun8UdSIxgeGvBmJWpJyDpSVj4U5CLMfKpbat9_dFmNqzfYTVyeTjt-IEbvkw-Ay5jerNYUW4/pubhtml?gid=697951496&amp;single=true&amp;widget=false&amp;headers=false&amp;scrolling=no&amp;chrome=false"></iframe>
              )}
              <iframe
                className="resultsgrid" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTxlCLGun8UdSIxgeGvBmJWpJyDpSVj4U5CLMfKpbat9_dFmNqzfYTVyeTjt-IEbvkw-Ay5jerNYUW4/pubhtml?gid=1187899803&amp;single=true&amp;widget=false&amp;headers=false&amp;scrolling=no&amp;chrome=false"></iframe>
            </div> */}
            <div>
              <div>
                <div className='fixtureFilters uk-flex-inline'>
                  <div>
                    <select 
                      className='uk-select seasonSelector'
                      onChange={handleSeason}>
                      {seasons && seasons.map(season => {
                        return <option key={season.id} value={season.name}>{season.name}</option>
                      })}
                    </select>
                  </div>  
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
              {fixtures && filterResults().map(fixture => {
                return <div className="column" key={fixture.id} id="column">
                  <div className="uk-column-1-7">
                    <p>{fixture.date.split('-').reverse().join('/')}</p>
                    <p>{fixture.league[0].name}</p>
                    <img className='smallFixtureLogo' src={fixture.homeTeam[0].logo}></img>
                    <p><a href={`/teams/${fixture.homeTeam[0].id}`}>{fixture.homeTeam[0].name}</a></p>
                    <p><a href={`/fixtures/${fixture.id}`}>{fixture.homeTotalScore} - {fixture.awayTotalScore}</a></p>
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

export default Results