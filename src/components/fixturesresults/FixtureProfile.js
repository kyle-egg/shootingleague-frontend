import React from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { getUserId } from '../../lib/auth'
import { useLocation } from 'react-router-dom'
import { userProfile, headers, createResult } from '../../lib/api'

const initialState = {
  'player': '',
  // 'playerId': '',
  'shotOne': 0,
  'shotTwo': 0,
}

function FixtureProfile() {
  useLocation()
  const [profile, setProfile] = React.useState({})
  const { fixtureId } = useParams()
  const [fixture, setFixture] = React.useState(null)
  const [players, setPlayers] = React.useState(null)
  const [formData, setFormData] = React.useState(initialState)
  // const [playerIdValue, setPlayerIdValue] = React.useState('')
  const [formErrors, setFormErrors] = React.useState(initialState)

  React.useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(`/api/fixtures/${fixtureId}`)
        setFixture(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  
  }, [fixtureId])

  React.useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get('/api/players/')
        setPlayers(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  
  }, [ ])


  React.useEffect(() => {
    const getData = async () => {
      const res = await userProfile(getUserId(), headers())
      setProfile(res.data)
    }
    getData()
    
  }, [ ])

  var today = new Date()
  var date = String(today.getDate()).padStart(2, '0')
  var tomorrow = String(1 + today.getDate()).padStart(2, '0')
  var month = String(today.getMonth() + 1).padStart(2, '0') //January is 0!
  var year = String(today.getFullYear())

  const matchDate = year + month + date + String('090000')
  const deadline = year + month + tomorrow + String('000000')

  
  const resultSubmission = () => {
    if (fixture && profile.team) {
      if (fixture.homeTeam[0].name || 
          fixture.awayTeam[0].name === 
          profile.team[0].name &&
          fixture.date.split('-').join('') + fixture.time.split(':').join('') > matchDate && 
          fixture.date.split('-').join('') + fixture.time.split(':').join('') < deadline) {
        return true
      } else {
        return false
      }
    }      
  } 

  const liveResult = () => {
    if (fixture && profile.team) {
      if (fixture.date.split('-').join('') + fixture.time.split(':').join('') > matchDate && 
          fixture.date.split('-').join('') + fixture.time.split(':').join('') < deadline) {
        return true
      } else {
        return false
      }
    }      
  }   

  const submitResult = resultSubmission()
  const isResultLive = liveResult()

  
  const filterHomeResults = () => {
    if (fixture) {
      return fixture.results.filter(result => {
        return result.team.username.slice(0,5).includes(fixture.homeTeam[0].name.split(' ').join('').slice(0,5))
      })
    }
  }

  const filterAwayResults = () => {
    if (fixture) {
      return fixture.results.filter(result => {
        return result.team.username.slice(0,5).includes(fixture.awayTeam[0].name.split(' ').join('').slice(0,5))
      })
    }
  }


  const filterPlayers = () => {
    if (players && profile.club) {
      return players.filter(player => {
        return player.clubPlayers.some(club => profile.club[0].name.includes(club.name))
      })
    }
  }
  
  const postResult = async e => {
    e.preventDefault()
    try {
      const { data } = await createResult(fixtureId, formData)
      console.log('Result Submitted:', data)
      location.reload()
    } catch (err) {
      console.log(formErrors)
      setFormErrors(err.response.data.errors)
      console.log(err)
    }

  }

  const inputtingResult = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setFormErrors({ ...formErrors, [e.target.name]: '' })
  }


  const calcHomeShotOne = () => {
    if (filterHomeResults()) { 
      return filterHomeResults().reduce(function(prev, cur) {
        return prev + cur.shotOne
      }, 0)
    }
  }

  const calcHomeShotTwo = () => {
    if (filterHomeResults()) { 
      return filterHomeResults().reduce(function(prev, cur) {
        return prev + cur.shotTwo
      }, 0)
    }
  }

  const calcHomeShotTotal = () => {
    if (filterHomeResults()) { 
      return filterHomeResults().reduce(function(prev, cur) {
        return prev + cur.shotTwo + cur.shotOne 
      }, 0)
    }
  }

  const calcAwayShotOne = () => {
    if (filterAwayResults()) { 
      return filterAwayResults().reduce(function(prev, cur) {
        return prev + cur.shotOne
      }, 0)
    }
  }

  const calcAwayShotTwo = () => {
    if (filterAwayResults()) { 
      return filterAwayResults().reduce(function(prev, cur) {
        return prev + cur.shotTwo
      }, 0)
    }
  }

  const calcAwayShotTotal = () => {
    if (filterAwayResults()) { 
      return filterAwayResults().reduce(function(prev, cur) {
        return prev + cur.shotTwo + cur.shotOne 
      }, 0)
    }
  }

  return (
    <section>
      <div id="resultsshero" className="uk-background-cover uk-height-large uk-panel uk-flex uk-flex-center uk-flex-middle">      
      </div>
      <div id="homeabout" className="uk-child-width-1-1@s" uk-grid>
        <div className="fixturesprofilecontainer">
          {fixture && 
          <div id="elevate" className="uk-background-cover uk-height-medium uk-panel uk-flex uk-flex-column uk-flex-center uk-flex-middle uk-text-center">
            {/* <img className='mediumFixtureLogo' src={fixture.homeTeam[0].logo}></img> */}
            <h3 id="fixtureprofiletitle"className="uk-text-lead">
              <a href={`/teams/${fixture.homeTeam[0].id}`}>{fixture.homeTeam[0].name} </a>
              {fixture.homeTotalScore} - {fixture.awayTotalScore} <a href={`/teams/${fixture.awayTeam[0].id}`}>{fixture.awayTeam[0].name}</a></h3>
            {/* <img className='mediumFixtureLogo' src={fixture.awayTeam[0].logo}></img>  */}
            <br></br>
            <div className="uk-column-1-2 uk-column-divider">
              <div className="column">
                {filterHomeResults().map(result => {
                  return <div  key={result.id} id="homeResultDetail" className="uk-column-1-5">
                    <button>Edit Result</button>
                    <p><a href={`/players/${result.playerName.slice(0, result.playerName.indexOf('#'))}`}>{result.playerName.slice(result.playerName.indexOf('#') + 1)}</a></p>
                    <p>{result.shotOne}</p>
                    <p>{result.shotTwo}</p>
                    <p><strong>{(result.shotOne + result.shotTwo)}</strong></p>
                  </div>
                })
                }
                <><hr></hr><div className="uk-column-1-5" id="homeResultDetail">
                      <p>null</p>
                      <p>null</p>
                      <p><strong>{calcHomeShotOne()}</strong></p>
                      <p><strong>{calcHomeShotTwo()}</strong></p>
                      <p><strong>{calcHomeShotTotal()}</strong></p>
                    </div></>
              </div>
              <div className="column">
              {filterAwayResults().map(result => {
                return <div key={result.id} id="awayResultDetail" className="uk-column-1-5">
                    <button>Edit Result</button>
                    <p><a href={`/players/${result.playerName.slice(0, result.playerName.indexOf('#'))}`}>{result.playerName.slice(result.playerName.indexOf('#') + 1)}</a></p>
                    <p>{result.shotOne}</p>
                    <p>{result.shotTwo}</p>
                    <p><strong>{(result.shotOne + result.shotTwo)}</strong></p>
                  </div>
              })
              }
              <hr></hr>
              <div className="uk-column-1-5" id="awayResultDetail">
                <p>null</p>
                <p>null</p>
                <p><strong>{calcAwayShotOne()}</strong></p>
                <p><strong>{calcAwayShotTwo()}</strong></p>
                <p><strong>{calcAwayShotTotal()}</strong></p>
              </div>
            </div>
          </div>
          </div>
          }
        </div>
        {submitResult && isResultLive &&
        <div className="inputresultscontainer">
          {fixture && players &&
          <div id="elevate" className="uk-background-cover uk-height-medium uk-panel uk-flex uk-flex-column uk-flex-center uk-flex-middle uk-text-center">
            <h3 id="fixtureprofiletitle"className="uk-text-lead">SUBMIT A RESULT</h3>
            <form
              id='createResult'
              onSubmit={postResult}>
              <div className="field uk-flex">
                <div className="control">
                  <select 
                    className={`input ${formErrors.playerName}`}
                    onChange={inputtingResult}
                    name='playerName'
                    value={formData.playerName}>
                    <option>Choose A Player</option>
                    {players && filterPlayers().map(player => {
                      return <option key={player.id} id={player.id} value={ (player.id + '#' + player.name) }>{player.name}</option>
                    })}
                  </select>
                </div>
                <div className="control">
                  <input
                    className={`input ${formErrors.shotOne}`}
                    name="shotOne"
                    placeholder="Shot One"
                    type="number"
                    onChange={inputtingResult}
                    value={formData.shotOne}
                  />
                </div>
                <div className="control">
                  <input
                    className={`input ${formErrors.shotTwo}`}
                    name="shotTwo"
                    placeholder="Shot Two"
                    type="number"
                    onChange={inputtingResult}
                    value={formData.shotTwo}
                  />
                </div>
                <button 
                  type="submit" 
                  className="buttons"
                  onSubmit={postResult}>
                  Submit Result!
                </button>
              </div>
            </form>
          </div>
          }
        </div>      
        }
      </div>
    </section>
  )
}

export default FixtureProfile