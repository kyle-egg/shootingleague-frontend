import { getAllSeasons, getAllFixtures, getAllResults, getAllLeagues } from '../../lib/api'
import React from 'react'

export var today = new Date()
export var date = String(today.getDate()).padStart(2, '0')
export var month = String(today.getMonth() + 1).padStart(2, '0') //January is 0!
export var year = String(today.getFullYear())
export var hh = String(today.getHours()) - 1
export var mm = String(today.getMinutes())
export var ss = String(today.getSeconds())

export const dynamicSeasonValue = () => {
  if (month > '07') {
    return (year + 1)
  } 
  if (month <= '06') {
    return year
  } 
}

function Tables() {
  const [seasonValue, setSeasonValue] = React.useState(dynamicSeasonValue())
  const [leagueValue, setLeagueValue] = React.useState('JSSA Division One')
  const [playerSeasonValue, setPlayerSeasonValue] = React.useState('')
  const [playerSearchValue, setPlayerSearchValue] = React.useState('')
  const [leagues, setLeagues] = React.useState(null)
  const [seasons, setSeasons] = React.useState(null)
  const [fixtures, setFixtures] = React.useState([])
  const [results, setResults] = React.useState([])
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
      const res = await getAllResults()
      setResults(res.data)
    }
    getData()
    
  }, [ ])


  React.useEffect(() => {
    const getData = async () => {
      const res = await getAllLeagues()
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

  const handlePlayerSeason = (e) => {
    setPlayerSeasonValue(e.target.value)
  }

  const handlePlayerSearch = (e) => {
    setPlayerSearchValue(e.target.value)
  }

  today = year + month + date + hh + mm + ss

  const filterTeamResults = () => {
    if (fixtures) {
      return fixtures.filter(fixture => {
        return fixture.date.split('-').join('') + fixture.time.split(':').join('') < today
      })
    }
  }

  const teamResults = filterTeamResults()

  React.useEffect(() => {
    if (fixtures) {
      const parsed = teamResults.map(fixture => {
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

  const filterPlayersLeague = () => {
    if (playerSeasonValue) {
      if (month <= '07' && results || playerSearchValue) {
        return results.filter(result => {
          return result.createdAt.split('-').join('').slice(0,6) >= (playerSeasonValue - 1) + '07' &&
        result.createdAt.split('-').join('').slice(0,6) <= playerSeasonValue + '07' &&
        result.playerName.slice(result.playerName.indexOf('#') + 1).toLowerCase().includes(playerSearchValue.toLowerCase())
        })
      } if (month > '07' && results || playerSearchValue) {
        return results.filter(result => {
          return result.createdAt.split('-').join('').slice(0,6) >= playerSeasonValue + '07' &&
          result.createdAt.split('-').join('').slice(0,6) <= (playerSeasonValue + 1) + '07' &&
          result.playerName.slice(result.playerName.indexOf('#') + 1).toLowerCase().includes(playerSearchValue.toLowerCase())
        })
      } 
    } else {
      if (results || playerSearchValue) {
        return results.filter(result => {
          return result.playerName.slice(result.playerName.indexOf('#') + 1).toLowerCase().includes(playerSearchValue.toLowerCase())
        })
      } 
    }
  }

  const washedPlayerData = filterPlayersLeague()

  const playerScores = {}

  washedPlayerData.forEach(result => {
    if (playerScores[result.playerName]) {
      playerScores[result.playerName].shotOne += result.shotOne
      playerScores[result.playerName].shotTwo += result.shotTwo
      playerScores[result.playerName].matchesPlayed += 1
      playerScores[result.playerName].averageScore = (playerScores[result.playerName].shotOne + playerScores[result.playerName].shotTwo) / (2 * playerScores[result.playerName].matchesPlayed)
    } else {
      playerScores[result.playerName] = {
        playerName: result.playerName,
        shotOne: result.shotOne,
        shotTwo: result.shotTwo,
        matchesPlayed: 1,
        averageScore: (result.shotOne + result.shotTwo) / 2,
      }
    }
  })

  const sortedPlayers = Object.values(playerScores).sort((a, b) => {
    const aAvg = (a.shotOne + a.shotTwo) / 2
    const bAvg = (b.shotOne + b.shotTwo) / 2
    return bAvg - aAvg
  })

  const filterCurrentLeagues = () => {
    if (seasons && seasonValue) {
      return seasons.filter(league => {
        return JSON.stringify(league.name).includes(seasonValue)
      })
    }
  }
  
  const currentLeagues = filterCurrentLeagues()

  // const juniorLeagues = 'JSSA Juniors'

  // const filterSeniorPlayerResults = () => {
  //   if (fixtures) {
  //     return fixtures.filter(fixture => {
  //       return !fixture.league[0].name.includes('Juniors')
  //     })
  //   }
  // }

  // const filterSeniorPlayerLeague = () => {
  //   if (fixtures) {
  //     return fixtures.filter(fixture => {
  //       return fixture.league.some(l => !'JSSA Juniors'.includes(l.name))
  //     })
  //   }
  // }
  
  // const seniorLeagues = filterSeniorPlayerLeague()

  // const filterSeniorFixtures = () => {
  //   if (fixtures && results && seniorLeagues) {
  //     return results.filter(result => {
  //       console.log(result.fixture)
  //       console.log(filterSeniorPlayerLeague().id)
  //       return result.fixture === seniorLeagues[0].id
  //     })
  //   }
  // }

  // console.log(filterSeniorPlayerLeague())
  // console.log(filterSeniorFixtures())
  
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
          <div id="elevate" className="uk-background-cover uk-panel uk-flex uk-flex-column uk-flex-center uk-flex-middle uk-text-center">
            <h3 id="fixturetitle"className="uk-text-lead">TEAM LEAGUE TABLES</h3>
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
                      {currentLeagues && currentLeagues[0].leagues.map(league => {
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
                    <th className='leftColumn'>Team</th>
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
                      <td className='leftColumn'><a href={`/teams/${team.teamId}`}>{team.name}</a></td>
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
              <div className="uk-divider"></div>
              <h3 id="fixturetitle"className="uk-text-lead">PLAYER LEAGUE TABLES</h3>
              <div>
                <div>
                  <div className='fixtureFilters uk-flex-inline'>
                    <div>
                      <select 
                        className='uk-select seasonSelector'
                        onChange={handlePlayerSeason}>
                        {seasons && seasons.map(season => {
                          return <option key={season.id} value={season.name}>{season.name}</option>
                        })}
                        <option value=''>All Seasons</option>
                      </select>
                    </div>
                    <div>
                      <input 
                        className="uk-search-input" type="search" placeholder="Player Search" aria-label="Search" id='playerTableSearch'
                        onChange={handlePlayerSearch}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <table className="uk-table uk-table-hover uk-table-divider">
                <thead>
                  <tr>
                    <th>Position</th>
                    <th className='leftColumn'>Player</th>
                    <th className='centerColumn'>Matches Played</th>
                    <th className='centerColumn'>Score Average</th>
                  </tr>
                </thead>
                <tbody>
                  {sortedPlayers.map((player, index) => (
                    <tr key={player.id}>
                      <td>{index + 1}</td>
                      <td className='leftColumn'><a href={`/players/${player.playerName.slice(0, player.playerName.indexOf('#'))}`}>{player.playerName.slice(player.playerName.indexOf('#') + 1)}</a></td>
                      <td>{player.matchesPlayed}</td>
                      <td>{((player.shotOne + player.shotTwo) / 2).toFixed(2)}</td>
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