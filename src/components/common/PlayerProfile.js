import React from 'react'
import axios from 'axios'
import { useLocation } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import profilepic from '../../assets/images/profilepic.png'
import { getAllResults, getAllSeasons } from '../../lib/api'

function PlayerProfile() {
  useLocation()
  var today = new Date()
  var month = String(today.getMonth() + 1).padStart(2, '0') //January is 0!
  const { playerId } = useParams()
  const [player, setPlayer] = React.useState(null)
  const [results, setResults] = React.useState([])
  const [seasons, setSeasons] = React.useState(null)
  const [playerSeasonValue, setPlayerSeasonValue] = React.useState('')

  React.useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(`/api/players/${playerId}`)
        setPlayer(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  
  }, [playerId])

  React.useEffect(() => {
    const getData = async () => {
      const res = await getAllResults()
      setResults(res.data)
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

  const handlePlayerSeason = (e) => {
    setPlayerSeasonValue(e.target.value)
  }

  // const filterPlayerThisSeasonResults = () => {
  //   if (month <= '07' && results && player) {
  //     return results.filter(result => {
  //       return result.createdAt.split('-').join('').slice(0,6) >= (dynamicSeasonValue() - 1) + '07' &&
  //       result.createdAt.split('-').join('').slice(0,6) <= dynamicSeasonValue() + '07' &&
  //       player.name.includes(result.playerName.slice(result.playerName.indexOf('#') + 1))
  //     })
  //   }
  //   if (month > '07' && results && player) {
  //     return results.filter(result => {
  //       return result.createdAt.split('-').join('').slice(0,6) >= dynamicSeasonValue() + '07' &&
  //       result.createdAt.split('-').join('').slice(0,6) <= (dynamicSeasonValue() + 1) + '07' &&
  //       player.name.includes(result.playerName.slice(result.playerName.indexOf('#') + 1))
  //     })
  //   }
  // }

  const filterPlayerAverages = () => {
    if (playerSeasonValue && player) {
    if (month <= '07' && results && player) {
      return results.filter(result => {
        return result.createdAt.split('-').join('').slice(0,6) >= (playerSeasonValue - 1) + '07' &&
        result.createdAt.split('-').join('').slice(0,6) <= playerSeasonValue + '07' &&
        player.name.includes(result.playerName.slice(result.playerName.indexOf('#') + 1))
      })
    } if (month > '07' && results && player) {
      return results.filter(result => {
        return result.createdAt.split('-').join('').slice(0,6) >= playerSeasonValue + '07' &&
        result.createdAt.split('-').join('').slice(0,6) <= (playerSeasonValue + 1) + '07' &&
        player.name.includes(result.playerName.slice(result.playerName.indexOf('#') + 1))
      })
    } 
  } else if (player) {
      return results.filter(result => {
        return player.name.includes(result.playerName.slice(result.playerName.indexOf('#') + 1))
      })
    } 
}

  const washedPlayerData = filterPlayerAverages()
  const playerScores = {}

  if(washedPlayerData) {
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
  }

  const sortedPlayers = Object.values(playerScores).sort((a, b) => {
    const aAvg = (a.shotOne + a.shotTwo) / 2
    const bAvg = (b.shotOne + b.shotTwo) / 2
    return bAvg - aAvg
  })

  return (
    <div className="uk-section clubbackground">
      <div className="uk-container">
        <div id="club" className="uk-card uk-card-default clubcontainer">
          {player && playerScores &&
          <><div id="clubcrest" className="uk-card-media-top">
            {player.avatar ?
              <img src={player.avatar} className='uk-border-circle' width="400" height="400"/>
              :
              <img src={profilepic}/>
            }
            </div>
              <div>
                <div className="uk-card-body">
                  <h3 className="uk-card-title">{player.name}</h3>
                  <h6 className="clubinfo"><a href={`/clubs/${player.clubPlayers[0].id}`}>{player.clubPlayers[0].name}</a></h6>
                  <h6 className="clubinfo">{player.title}</h6>
                  <h6 className="clubinfo"><a href={`/teams/${player.teamPlayers[0].id}`}>{player.teamPlayers[0].name}</a></h6>
                  <h6 className="clubinfo">{player.honours}</h6>
                  <p className="clubinfo">{player.bio}</p>
                  <br></br>
                  <div className='playerAverages'>
                  <h5 id='playerlefttext'>In</h5>
                      <select
                        id='playerProfileSeasonSelector'
                        className='uk-select seasonSelector'
                        onChange={handlePlayerSeason}>
                        {seasons && seasons.map(season => {
                          return <option key={season.id} value={season.name}>{season.name}</option>
                        })}
                        <option value=''>All</option>
                      </select>
                  {sortedPlayers.map((player) => (
                    <div>
                      <h5 id='playerrighttext' key={player.id}>Season(s) I have played {player.matchesPlayed} matches, with an average of {((player.shotOne + player.shotTwo) / 2).toFixed(2)}</h5>
                      </div>
                  ))}
                  </div>
                  {playerSeasonValue ?
                  <h4 id="clubtitle" className="uk-card-title">{playerSeasonValue} Season Matches</h4>
                  :
                  <h4 id="clubtitle" className="uk-card-title">All Matches</h4>
                  }
              <table className="uk-table uk-table-hover uk-table-divider">
                <thead>
                  <tr>
                    <th className='centerColumn'>Date</th>
                    <th className='centerColumn'>Shot One</th>
                    <th className='centerColumn'>Shot Two</th>
                    <th className='centerColumn'>Match Average</th>
                  </tr>
                </thead>
                <tbody>
                  {filterPlayerAverages().map(result => (
                    <tr key={result.id}>
                      <td><a href={`/fixtures/${result.fixture}`}>{result.createdAt.slice(0,10).split('-').reverse().join('/')}</a></td>
                      <td>{result.shotOne}</td>
                      <td>{result.shotTwo}</td>
                      <td>{((result.shotOne + result.shotTwo) / 2).toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
                </div>
              </div></>
          }
        </div>
      </div>
    </div>
  )
}
export default PlayerProfile