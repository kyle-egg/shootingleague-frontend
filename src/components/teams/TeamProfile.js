  import React from 'react'
  import axios from 'axios'
  import { useLocation } from 'react-router-dom'
  import { useParams } from 'react-router-dom'
  import { getAllClubs, getAllResults, getAllFixtures } from '../../lib/api'
  import { dynamicSeasonValue } from '../fixturesresults/Tables'

  
  function TeamProfile() {
    useLocation()
    var today = new Date()
    var date = String(today.getDate()).padStart(2, '0')
    var month = String(today.getMonth() + 1).padStart(2, '0') //January is 0!
    var year = String(today.getFullYear())
    var hh = String(today.getHours()) - 1
    var mm = String(today.getMinutes())
    var ss = String(today.getSeconds())
    const { teamId } = useParams()
    const [team, setTeam] = React.useState(null)
    const [clubs, setClubs] = React.useState(null)
    const [fixtures, setFixtures] = React.useState(null)
    const [results, setResults] = React.useState([])
    
    today = year + month + date + hh + mm + ss  

    React.useEffect(() => {
      const getData = async () => {
        try {
          const res = await axios.get(`/api/clubs/teams/${teamId}`)
          setTeam(res.data)
        } catch (err) {
          console.log(err)
        }
      }
      getData()
    
    }, [teamId])

    React.useEffect(() => {
      const getData = async () => {
        const res = await getAllClubs()
        setClubs(res.data)
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
        const res = await getAllFixtures()
        setFixtures(res.data)
      }
      getData()
      
    }, [ ])
  
  const parentClub = () => {
    if (clubs) {
      return clubs.filter(club => {
        return team.name.slice(0,5).includes(club.name.slice(0,5))
    }
  )}
  }

  if (fixtures) {
    fixtures.sort(function(b,a){
      return new Date(a.date) - new Date(b.date)
    })
  }

  const fatherClub = parentClub()

  const filterPlayersLeague = () => {
    if (month <= '07' && results) {
      return results.filter(result => {
        return result.createdAt.split('-').join('').slice(0,6) >= (dynamicSeasonValue() - 1) + '07' &&
        result.createdAt.split('-').join('').slice(0,6) <= dynamicSeasonValue() + '07' &&
        team.players.some(p => result.playerName.slice(result.playerName.indexOf('#') + 1).includes(p.name))
      })
    }
    if (month > '07' && results) {
      return results.filter(result => {
        return result.createdAt.split('-').join('').slice(0,6) >= dynamicSeasonValue() + '07' &&
        result.createdAt.split('-').join('').slice(0,6) <= (dynamicSeasonValue() + 1) + '07' &&
        team.players.some(p => result.playerName.slice(result.playerName.indexOf('#') + 1).includes(p.name))
      })
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

  const filterFixtures = () => {
    if (team) {
      return fixtures.filter(fixture => {
        return fixture.homeTeam.every(hT => team.name.includes(hT.name)) &&
        fixture.date.split('-').join('') + fixture.time.split(':').join('') > today ||
        fixture.awayTeam.every(aT => team.name.includes(aT.name)) &&
        fixture.date.split('-').join('') + fixture.time.split(':').join('') > today
      }) 
  }
}

const filterResults = () => {
  if (team) {
    return fixtures.filter(fixture => {
      return fixture.homeTeam.every(hT => team.name.includes(hT.name)) &&
      fixture.season.every(s => dynamicSeasonValue().includes(s.name)) &&
      fixture.date.split('-').join('') + fixture.time.split(':').join('') < today ||
      fixture.awayTeam.every(aT => team.name.includes(aT.name)) &&
      fixture.season.every(s => dynamicSeasonValue().includes(s.name)) &&
      fixture.date.split('-').join('') + fixture.time.split(':').join('') < today
    }) 
  }
}


  return (
    <div className="uk-section teambackground">
    {team && fatherClub &&
      <div className="uk-container">
        <div id="club" className="uk-card uk-card-default teamcontainer">
          <div id="clubcrest" className="uk-card-media-top">
            <img src={team.logo} uk-cover/>
          </div>
          <div>
            <div className="uk-card-body">
              <h3 className="team-profile uk-card-title">{team.name}</h3>
              <h4 id="clubtitle" className="team-profile clubofficers">Parent Club</h4>
              <p className="team-profile clubofficers"><a href={`/clubs/${fatherClub[0].id}`}>{fatherClub[0].name}</a></p>
              <h4 id="clubtitle" className="team-profile clubofficers">Current Team Averages</h4>
              <table className="uk-table uk-table-hover uk-table-divider">
                <thead>
                  <tr>
                    <th>Position</th>
                    <th className='leftColumn'>Player</th>
                    <th className='centerColumn'>Matches Played</th>
                    <th className='centerColumn'>Season Average</th>
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
              <div className="column">
              <div className="uk-column-1-2 nextFiveLastFive">
              <div className="column" id="column">
              <h4 id="fiveResults" className="team-profile clubofficers">Latest Results</h4>
              {fixtures && filterResults().map(fixture => {
                return <div className="column" key={fixture.id} id="column">
                  <div className="uk-column-1-4">
                    <p>{fixture.date.split('-').reverse().join('/')}</p>
                    <p><a href={`/teams/${fixture.homeTeam[0].id}`}>{fixture.homeTeam[0].name}</a></p>
                    <p><a href={`/fixtures/${fixture.id}`}>{fixture.homeTotalScore} - {fixture.awayTotalScore}</a></p>
                    <p><a href={`/teams/${fixture.awayTeam[0].id}`}>{fixture.awayTeam[0].name}</a></p>
                  </div>
                </div>
              })}
              </div>
              <div className="column" id="column">
              <h4 id="fiveFixtures" className="team-profile clubofficers">Upcoming Fixtures</h4>
              {fixtures && filterFixtures().map(fixture => {
                return <div className="uk-column-1-2" key={fixture.id}>
                    <p>{fixture.date.split('-').reverse().join('/')} - {fixture.time.slice(0,5)}</p>
                    <p><a href={`/teams/${fixture.homeTeam[0].id}`}>{fixture.homeTeam[0].name}</a> V <a href={`/teams/${fixture.awayTeam[0].id}`}>{fixture.awayTeam[0].name}</a></p>
                  </div>
              })}
                  </div>
                </div>
                </div>
            </div>
          </div>
        </div>
      </div>
      }
    </div>
  )
}
export default TeamProfile