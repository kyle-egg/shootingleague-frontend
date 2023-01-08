import { getAllSeasons, getAllFixtures } from '../../lib/api'
import React from 'react'
import axios from 'axios'

function Tables() {
  var today = new Date()
  var date = String(today.getDate()).padStart(2, '0')
  var month = String(today.getMonth() + 1).padStart(2, '0') //January is 0!
  var year = String(today.getFullYear())
  var hh = String(today.getHours()) - 1
  var mm = String(today.getMinutes())
  var ss = String(today.getSeconds())
  const [seasonValue, setSeasonValue] = React.useState('2023')
  const [leagueValue, setLeagueValue] = React.useState('JSSA Division One')
  const [leagues, setLeagues] = React.useState(null)
  const [seasons, setSeasons] = React.useState(null)
  const [fixtures, setFixtures] = React.useState([])
  const [parsedResults, setParsedResults] = React.useState(null)
  

  React.useEffect(() => {
    const getData = async () => {
      const res = await getAllSeasons()
      setSeasons(res.data)
    }
    getData()
    
  }, [ ])

  React.useEffect(() => {
    const getData = async () => {
      const res = await getAllFixtures()
      setFixtures(res.data)
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

  if (seasons) {
    seasons.sort((b, a) => a.name - b.name)
  }
  
  if (leagues) {
    leagues.sort((a, b) => a.id - b.id)
  }

  const handleSeason = (e) => {
    setSeasonValue(e.target.value)
  }

  const handleLeague = (e) => {
    setLeagueValue(e.target.value)
  }

  today = year + month + date + hh + mm + ss

  const results = () => {
    if (fixtures) {
      return fixtures.filter(fixture => {
        return fixture.date.split('-').join('') + fixture.time.split(':').join('') < today
      })
    }
  }

  React.useEffect(() => {
    if (fixtures) {
      const parsed = results().map(fixture => {
        return {
          homeTeamId: fixture.homeTeam[0].id,
          awayTeamId: fixture.awayTeam[0].id,
          homeTeam: fixture.homeTeam[0].name,
          awayTeam: fixture.awayTeam[0].name,
          homeTeamLogo: fixture.homeTeam[0].logo,
          awayTeamLogo: fixture.awayTeam[0].logo,
          homeTeamScore: fixture.homeTotalScore,
          awayTeamScore: fixture.awayTotalScore,
          points: fixture.homeTotalScore > fixture.awayTotalScore ? 3 : fixture.homeTotalScore === fixture.awayTotalScore ? 1 : 0,
          league: fixture.league,
          season: fixture.season,
        }
      })
      parsed.sort((b, a) => a.points - b.points)
      setParsedResults(parsed)
    }
  }, [fixtures])

  if (!parsedResults) {
    return <p>Loading...</p>
  }

  const teamData = {}

  parsedResults.forEach((result) => {
    const { homeTeam, awayTeam, homeTeamId, awayTeamId, homeTeamLogo, awayTeamLogo, homeTeamScore, awayTeamScore, league, season } = result

    // Initialize the data for each team if it doesn't already exist
    if (!teamData[homeTeam]) {
      teamData[homeTeam] = {
        teamId: homeTeamId,
        teamLogo: homeTeamLogo,
        name: homeTeam,
        wins: 0,
        losses: 0,
        draws: 0,
        gamesPlayed: 0,
        points: 0,
        averageScore: 0,
        aggregateScore: 0,
        league: league,
        season: season,
      }
    }
    if (!teamData[awayTeam]) {
      teamData[awayTeam] = {
        teamId: awayTeamId,
        teamLogo: awayTeamLogo,
        name: awayTeam,
        wins: 0,
        losses: 0,
        draws: 0,
        gamesPlayed: 0,
        points: 0,
        averageScore: 0,
        aggregateScore: 0,
        league: league,
        season: season,
      }
    }

    // Update the data for each team based on the result of the match
    if (homeTeamScore > awayTeamScore) {
      teamData[homeTeam].wins += 1
      teamData[awayTeam].losses += 1
      teamData[homeTeam].points += 2
    } else if (awayTeamScore > homeTeamScore) {
      teamData[awayTeam].wins += 1
      teamData[homeTeam].losses += 1
      teamData[awayTeam].points += 2
    } else {
      teamData[homeTeam].draws += 1
      teamData[awayTeam].draws += 1
      teamData[homeTeam].points += 1
      teamData[awayTeam].points += 1
    }

    // Update the games played, average score, and aggregate score for each team
    teamData[homeTeam].gamesPlayed += 1
    teamData[homeTeam].averageScore = teamData[homeTeam].aggregateScore / teamData[homeTeam].gamesPlayed
    teamData[homeTeam].aggregateScore += homeTeamScore
    teamData[awayTeam].gamesPlayed += 1
    teamData[awayTeam].averageScore = teamData[awayTeam].aggregateScore / teamData[awayTeam].gamesPlayed
    teamData[awayTeam].aggregateScore += awayTeamScore
  })

  // Convert the team data object into an array and sort it by points
  const tableData = Object.values(teamData)
  tableData.sort((a, b) => b.points - a.points)

  const filterLeague = () => {
    if (leagueValue) {
      return tableData.filter(fixture => {
        return fixture.league.some(l => leagueValue.includes(l.name)) &&
      fixture.season.every(s => seasonValue.includes(s.name))
      })
    } else {
      return tableData.filter(fixture => {
        return fixture.season.every(s => seasonValue.includes(s.name))
      })
    }
  }

  return (
    // <section>
    //   <div id="tableshero" className="uk-background-cover uk-height-large uk-panel uk-flex uk-flex-center uk-flex-middle">      
    //   </div>
    //   <div id="homeabout" className="uk-child-width-1-1@s" uk-grid>
    //     <div className="tablescontainer">
    //       <div id="elevate" className="uk-background-cover uk-height-medium uk-panel uk-flex uk-flex-column uk-flex-center uk-flex-middle uk-text-center">
    //         <h3 id="tabletitle"className="uk-text-lead">LEAGUE TABLES</h3>
    //         <br></br>
    //         <div>
    //           <iframe
    //             className="tablesgrid" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTxlCLGun8UdSIxgeGvBmJWpJyDpSVj4U5CLMfKpbat9_dFmNqzfYTVyeTjt-IEbvkw-Ay5jerNYUW4/pubhtml?gid=865715886&amp;single=true&amp;widget=false&amp;headers=false&amp;scrolling=no&amp;chrome=false"></iframe>
    //         </div>
    //       </div>
    //       <div id="elevate" className="uk-background-cover uk-height-medium uk-panel uk-flex uk-flex-column uk-flex-center uk-flex-middle uk-text-center">
    //         <h3 id="averagestitle"className="uk-text-lead">LEAGUE AVERAGES</h3>
    //         <br></br>
    //         <div>
    //           <iframe
    //             className="averagesgrid" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTxlCLGun8UdSIxgeGvBmJWpJyDpSVj4U5CLMfKpbat9_dFmNqzfYTVyeTjt-IEbvkw-Ay5jerNYUW4/pubhtml?gid=396609002&amp;single=true&amp;widget=false&amp;headers=false&amp;scrolling=no&amp;chrome=false"></iframe>
    //           <iframe
    //             className="averagesgrid" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTxlCLGun8UdSIxgeGvBmJWpJyDpSVj4U5CLMfKpbat9_dFmNqzfYTVyeTjt-IEbvkw-Ay5jerNYUW4/pubhtml?gid=357569035&amp;single=true&amp;widget=false&amp;headers=false&amp;scrolling=no&amp;chrome=false"></iframe>
    //         </div>
    //       </div>
    //     </div>     
    //   </div>
    // </section>
    <section>
      <div id="tableshero" className="uk-background-cover uk-height-large uk-panel uk-flex uk-flex-center uk-flex-middle">      
      </div>
      <div id="homeabout" className="uk-child-width-1-1@s" uk-grid="true">
        <div className="tablescontainer">
          <div id="elevate" className="uk-background-cover uk-height-medium uk-panel uk-flex uk-flex-column uk-flex-center uk-flex-middle uk-text-center">
            <h3 id="fixturetitle"className="uk-text-lead">LEAGUE TABLES</h3>
            <div>
              <div>
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
                      {leagues && leagues.map(league => {
                        return <option key={league.id} value={league.name}>{league.name}</option>
                      })}
                    </select>
                  </div>  
                </div>
              </div>

              <table className="uk-table uk-table-hover uk-table-divider">
                <thead>
                  <tr>
                    <th className="uk-table-shrink"></th>
                    <th>Team</th>
                    <th>Played</th>
                    <th>Wins</th>
                    <th>Draws</th>
                    <th>Losses</th>
                    <th>Points</th>
                    <th>Average</th>
                    <th>Aggregate</th>
                  </tr>
                </thead>
                <tbody>
                  {filterLeague().map((team) => (
                    <tr key={team.name}>
                      <td><a href={team.teamId}><img className="uk-preserve-width" width="40" height="40" alt="" src={team.teamLogo}/></a></td>
                      <td><a href={team.teamId}>{team.name}</a></td>
                      <td>{team.gamesPlayed}</td>
                      <td>{team.wins}</td>
                      <td>{team.draws}</td>
                      <td>{team.losses}</td>
                      <td>{team.points}</td>
                      <td>{team.averageScore}</td>
                      <td>{team.aggregateScore}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>     
        </div>
      </div>
    </section>
  )
}
export default Tables