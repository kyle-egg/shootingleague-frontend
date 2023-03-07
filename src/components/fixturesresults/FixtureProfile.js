import React from 'react'
import axios from 'axios'
import { getUserId } from '../../lib/auth'
import { useParams, useLocation, useNavigate } from 'react-router-dom'
import { userProfile, headers, createResult, editTotal, getAllPlayers, getAFixture } from '../../lib/api'
import { baseUrl } from '../../config.js'

const initialState = {
  'playerName': '',
  'shotOne': 0,
  'shotTwo': 0,
}

const initialShotOne = {
  'shotOne': '',
}

const initialShotTwo = {
  'shotTwo': '',
}

function FixtureProfile() {
  useLocation()
  const navigate = useNavigate()
  const [profile, setProfile] = React.useState({})
  const { fixtureId } = useParams()
  const [fixture, setFixture] = React.useState(null)
  const [players, setPlayers] = React.useState(null)
  const [formData, setFormData] = React.useState(initialState)
  const [formErrors, setFormErrors] = React.useState(initialState)
  const [shotOneFormData, setShotOneFormData] = React.useState(initialShotOne)
  const [shotOneFormErrors, setShotOneFormErrors] = React.useState(initialShotOne)
  const [shotTwoFormData, setShotTwoFormData] = React.useState(initialShotTwo)
  const [shotTwoFormErrors, setShotTwoFormErrors] = React.useState(initialShotTwo)

  React.useEffect(() => {
    const getData = async () => {
      try {
        const res = await getAFixture(fixtureId)
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
        const res = await getAllPlayers()
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

  const matchDate = year + month + date + String('000000')
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

  const homeTeam = () => {
    if (fixture && profile.team) {
      if (fixture.homeTeam[0].name === 
          profile.team[0].name) {
        return true
      } else {
        return false
      }
    }      
  } 

  const awayTeam = () => {
    if (fixture && profile.team) {
      if (fixture.awayTeam[0].name === 
          profile.team[0].name) {
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
  const isHomeTeam = homeTeam()
  const isAwayTeam = awayTeam()
  
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

  const isHomeResults = filterHomeResults()
  const isAwayResults = filterAwayResults()

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
      postTotalResult()
      const { data } = await createResult(fixtureId, formData)
      console.log('Result Submitted:', data)
      calcAwayShotTotal()
      calcHomeShotTotal()
      setTimeout(function(){
        window.location.reload()
      }, 1000)
    } catch (err) {
      console.log(formErrors)
      setFormErrors(err.response.data.errors)
      console.log(err)
    }

  }

  const inputtingResult = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setFormErrors({ ...formErrors, [e.target.name]: '' })
    inputtingTotalScore()
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

  const [awayScore, setAwayScore] = React.useState(calcAwayShotTotal())
  const [awayScoreErrors, setAwayScoreErrors] = React.useState(calcAwayShotTotal())
  const [homeScore, setHomeScore] = React.useState(calcHomeShotTotal())
  const [homeScoreErrors, setHomeScoreErrors] = React.useState(calcHomeShotTotal())
  
  const inputtingTotalScore = () => {
    setHomeScore({ ...homeScore, 'homeTotalScore': calcHomeShotTotal() })
    setHomeScoreErrors({ ...homeScoreErrors, 'homeTotalScore': '' })
    setAwayScore({ ...awayScore, 'awayTotalScore': calcAwayShotTotal() })
    setAwayScoreErrors({ ...awayScoreErrors, 'awayTotalScore': '' })
  }

  const postAwayScore = async () => {
    try {
      const { data } = await editTotal(fixtureId, awayScore)
      console.log('Home Total Submitted:', data)
    } catch (err) {
      console.log(awayScoreErrors)
      setAwayScoreErrors(err.response.data.errors)
      console.log(err)
    }
  }

  const postHomeScore = async () => {
    try {
      const { data } = await editTotal(fixtureId, homeScore)
      console.log('Away Total Submitted:', data)
    } catch (err) {
      console.log(homeScoreErrors)
      setHomeScoreErrors(err.response.data.errors)
      console.log(err)
    }
  }

  const postTotalResult = () => {
    inputtingTotalScore()
    if (isHomeTeam) {
      postHomeScore()
    }
    if (isAwayTeam) {
      postAwayScore()
    }
  }

  const finalResult = () => {
    postTotalResult()
    setTimeout(function(){
      navigate('/teamcenter')
    }, 500)
  }

  const maxPlayers = () => {
    if (isHomeTeam && isHomeResults) {
      if (filterHomeResults().length > 5) {
        return true
      } else {
        return false
      }
    }
    if (isAwayTeam && isAwayResults) {
      if (filterAwayResults().length > 5) {
        return true
      } else {
        return false
      }
    }        
  } 

  const isMaxPlayers = maxPlayers()

  const deleteResult = async e => {
    e.preventDefault()
    postTotalResult()
    await axios.delete(`${baseUrl}/api/fixtures/${fixtureId}/results/${e.target.id}/`, headers())
    setTimeout(function(){
      window.location.reload()
    }, 1000)
  }

  const editScoreOne = async e => {
    e.preventDefault()
    postTotalResult()
    await axios.put(`${baseUrl}/api/fixtures/${fixtureId}/results/${e.target.id}/`, shotOneFormData, headers())
    setTimeout(function(){
      window.location.reload()
    }, 1000)
  }

  const inputtingShotOne = e => {
    inputtingTotalScore()
    setShotOneFormData({ ...shotOneFormData, [e.target.name]: e.target.value })
    setShotOneFormErrors({ ...shotOneFormErrors, [e.target.name]: '' })
  }

  const editScoreTwo = async e => {
    e.preventDefault()
    postTotalResult()
    await axios.put(`${baseUrl}/api/fixtures/${fixtureId}/results/${e.target.id}/`, shotTwoFormData, headers())
    setTimeout(function(){
      window.location.reload()
    }, 1000)
  }

  const inputtingShotTwo = e => {
    inputtingTotalScore()
    setShotTwoFormData({ ...shotTwoFormData, [e.target.name]: e.target.value })
    setShotTwoFormErrors({ ...shotTwoFormErrors, [e.target.name]: '' })
  }

  return (
    <><section>
      <div id="fixtureprofile" className="uk-child-width-1-1@s" uk-grid='true'>
        <div className="fixturesprofilecontainer">
          {fixture &&
            <div id="resultContainer" className="uk-background-cover uk-height-medium uk-panel uk-flex uk-flex-column uk-text-center">
              {/* <img className='mediumFixtureLogo' src={fixture.homeTeam[0].logo}></img> */}
              <h3 id="fixtureprofiletitle" className="uk-text-lead">
                <a href={`/teams/${fixture.homeTeam[0].id}`}>{fixture.homeTeam[0].name} </a>
                {calcHomeShotTotal()} - {calcAwayShotTotal()} <a href={`/teams/${fixture.awayTeam[0].id}`}>{fixture.awayTeam[0].name}</a></h3>
              {/* <img className='mediumFixtureLogo' src={fixture.awayTeam[0].logo}></img>  */}
              <div className="uk-column-1-2 uk-column-divider uk-flex" id="resultScores">
                <div className="resultColumn" id="homeResultColumn">
                  {filterHomeResults().length > 0 ?
                    <><div>
                      {filterHomeResults().map(result => {
                        return <div key={result.id} id="homeResultDetail" className="uk-column-1-5">
                          {isHomeTeam && isResultLive ?
                            <div className="uk-inline">
                              <button className="uk-button uk-button-small uk-button-danger home-columns" mode="click" type="button">DELETE</button>
                              <div className="uk-card uk-card-body uk-card-default" uk-drop="true; animation: slide-top; animate-out: true; duration: 1000">
                                <p className="uk-modal-title uk-text-center" id="abouttitle">Delete Score?</p>                            
                                <button id={result.id} onClick={deleteResult} className="uk-button-small uk-button  uk-button-danger" uk-toggle='target: #modal-delete-score'>DELETE</button>
                              </div>
                            </div>
                            :
                            <p className='invisible'>null</p>}
                          <p className='playerName home-columns'><a href={`/players/${result.playerName.slice(0, result.playerName.indexOf('#'))}`}>{result.playerName.slice(result.playerName.indexOf('#') + 1)}</a></p>
                          {isHomeTeam && isResultLive ?
                            <><div className="uk-inline">
                              <button className="uk-button uk-button-small uk-button-default home-columns" mode="click" type="button">{result.shotOne}</button>
                              <div className="uk-card uk-card-body uk-card-default" uk-drop="true; animation: slide-top; animate-out: true; duration: 1000">
                                <p className="uk-modal-title uk-text-center" id="abouttitle">Edit Shot One</p>
                                <form
                                  id='editResult'
                                  onSubmit={editScoreOne}>
                                  <div className="control">
                                    <input
                                      className={`uk-input input ${shotOneFormErrors.shotOne}`}
                                      name="shotOne"
                                      placeholder="Shot One"
                                      type="number"
                                      onChange={inputtingShotOne}
                                      value={shotOneFormData.shotOne}
                                      min="0"
                                      max="100" />
                                  </div>
                                  <button id={result.id} onClick={editScoreOne} className="uk-button-small uk-button uk-button-secondary" uk-toggle='target: #modal-edit-score'>EDIT</button>
                                </form>
                              </div>
                            </div>
                            <div className="uk-inline">
                              <button className="uk-button uk-button-small uk-button-default home-columns" mode="click" type="button">{result.shotTwo}</button>
                              <div className="uk-card uk-card-body uk-card-default" uk-drop="true; animation: slide-top; animate-out: true; duration: 1000">
                                <p className="uk-modal-title uk-text-center" id="abouttitle">Edit Shot Two</p>
                                <form
                                  id='editResult'
                                  onSubmit={editScoreTwo}>
                                  <div className="control">
                                    <input
                                      className={`uk-input input ${shotTwoFormErrors.shotTwo}`}
                                      name="shotTwo"
                                      placeholder="Shot Two"
                                      type="number"
                                      onChange={inputtingShotTwo}
                                      value={shotTwoFormData.shotTwo}
                                      min="0"
                                      max="100" />
                                  </div>
                                  <button id={result.id} onClick={editScoreTwo} className="uk-button-small uk-button uk-button-secondary" uk-toggle='target: #modal-edit-score'>EDIT</button>
                                </form>
                              </div>
                            </div></>
                            :
                            <>
                              <p className='scoresOne home-columns'>{result.shotOne}</p>
                              <p className='scoresTwo home-columns'>{result.shotTwo}</p>
                            </>
                          }
                          <p className='scoresTotal home-columns'><strong>{(result.shotOne + result.shotTwo)}</strong></p>
                        </div>
                      })}
                    </div><><hr></hr><div className="uk-column-1-5" id="homeResultDetail">
                      <p className='invisible'>null</p>
                      <p className='invisible'>null</p>
                      <p className='scoresOne'><strong>{calcHomeShotOne()}</strong></p>
                      <p className='scoresTwo'><strong>{calcHomeShotTwo()}</strong></p>
                      <p className='scoresTotal'><strong>{calcHomeShotTotal()}</strong></p>
                    </div></></>
                    :
                    <p className='resultColumn'>No Home Results Submitted</p>}
                </div>
                <div className="resultColumn" id="awayResultColumn">
                {filterAwayResults().length > 0 ?
                    <><div>
                      {filterAwayResults().map(result => {
                        return <div key={result.id} id="homeResultDetail" className="uk-column-1-5">
                          {isAwayTeam && isResultLive ?
                            <div className="uk-inline">
                              <button className="uk-button uk-button-small uk-button-danger home-columns" mode="click" type="button">DELETE</button>
                              <div className="uk-card uk-card-body uk-card-default" uk-drop="true; animation: slide-top; animate-out: true; duration: 1000">
                                <p className="uk-modal-title uk-text-center" id="abouttitle">Delete Score?</p>                            
                                <button id={result.id} onClick={deleteResult} className="uk-button-small uk-button  uk-button-danger" uk-toggle='target: #modal-delete-score'>DELETE</button>
                              </div>
                            </div>
                            :
                            <p className='invisible'>null</p>}
                          <p className='playerName home-columns'><a href={`/players/${result.playerName.slice(0, result.playerName.indexOf('#'))}`}>{result.playerName.slice(result.playerName.indexOf('#') + 1)}</a></p>
                          {isAwayTeam && isResultLive ?
                            <><div className="uk-inline">
                              <button className="uk-button uk-button-small uk-button-default home-columns" mode="click" type="button">{result.shotOne}</button>
                              <div className="uk-card uk-card-body uk-card-default" uk-drop="true; animation: slide-top; animate-out: true; duration: 1000">
                                <p className="uk-modal-title uk-text-center" id="abouttitle">Edit Shot One</p>
                                <form
                                  id='editResult'
                                  onSubmit={editScoreOne}>
                                  <div className="control">
                                    <input
                                      className={`uk-input input ${shotOneFormErrors.shotOne}`}
                                      name="shotOne"
                                      placeholder="Shot One"
                                      type="number"
                                      onChange={inputtingShotOne}
                                      value={shotOneFormData.shotOne}
                                      min="0"
                                      max="100" />
                                  </div>
                                  <button id={result.id} onClick={editScoreOne} className="uk-button-small uk-button uk-button-secondary" uk-toggle='target: #modal-edit-score'>EDIT</button>
                                </form>
                              </div>
                            </div>
                            <div className="uk-inline">
                              <button className="uk-button uk-button-default uk-button-small home-columns" id='awayscoretwobutton' mode="click" type="button">{result.shotTwo}</button>
                              <div className="uk-card uk-card-body uk-card-default" uk-drop="true; animation: slide-top; animate-out: true; duration: 1000">
                                <p className="uk-modal-title uk-text-center"  id="abouttitle">Edit Shot Two</p>
                                <form
                                  id='editResult'
                                  onSubmit={editScoreTwo}>
                                  <div className="control">
                                    <input
                                      className={`uk-input input ${shotTwoFormErrors.shotTwo}`}
                                      name="shotTwo"
                                      placeholder="Shot Two"
                                      type="number"
                                      onChange={inputtingShotTwo}
                                      value={shotTwoFormData.shotTwo}
                                      min="0"
                                      max="100" />
                                  </div>
                                  <button id={result.id} onClick={editScoreTwo} className="uk-button-small uk-button uk-button-secondary" uk-toggle='target: #modal-edit-score'>EDIT</button>
                                </form>
                              </div>
                            </div></>
                            :
                            <>
                              <p className='scoresOne home-columns'>{result.shotOne}</p>
                              <p className='scoresTwo home-columns'>{result.shotTwo}</p>
                            </>
                          }
                          <p className='scoresTotal home-columns'><strong>{(result.shotOne + result.shotTwo)}</strong></p>
                        </div>
                      })}
                    </div><><hr></hr><div className="uk-column-1-5" id="homeResultDetail">
                      <p className='invisible'>null</p>
                      <p className='invisible'>null</p>
                      <p className='scoresOne'><strong>{calcAwayShotOne()}</strong></p>
                      <p className='scoresTwo'><strong>{calcAwayShotTwo()}</strong></p>
                      <p className='scoresTotal'><strong>{calcAwayShotTotal()}</strong></p>
                    </div></></>
                    :
                    <p className='resultColumn'>No Away Results Submitted</p>}
                </div>
              </div>
            </div>}
        </div>
        {submitResult && isResultLive &&
          <div className="inputresultscontainer">
            {fixture && players &&
              <div id="elevate" className="uk-background-cover uk-height-medium uk-panel uk-flex uk-flex-column uk-flex-center uk-flex-middle uk-text-center">
                {!isMaxPlayers ?
                  <><h3 id="fixtureprofilesecondtitle" className="uk-text-lead">SUBMIT A RESULT</h3>
                    <form
                      id='createResult'
                      onSubmit={postResult}>
                      <div className="field uk-flex">
                        <div className="control">
                          <select
                            className={`uk-select input ${formErrors.playerName}`}
                            onChange={inputtingResult}
                            name='playerName'
                            value={formData.playerName}>
                            <option>Choose A Player</option>
                            {players && filterPlayers().map(player => {
                              return <option key={player.id} id={player.id} value={(player.id + '#' + player.name)}>{player.name}</option>
                            })}
                          </select>
                        </div>
                        <div className="control">
                          <input
                            className={`uk-input input ${formErrors.shotOne}`}
                            name="shotOne"
                            placeholder="Shot One"
                            type="number"
                            onChange={inputtingResult}
                            value={formData.shotOne}
                            min="0"
                            max="100" />
                        </div>
                        <div className="control">
                          <input
                            className={`uk-input input ${formErrors.shotTwo}`}
                            name="shotTwo"
                            placeholder="Shot Two"
                            type="number"
                            onChange={inputtingResult}
                            value={formData.shotTwo}
                            min="0"
                            max="100" />
                        </div>
                        <button className="uk-button uk-button-primary uk-margin-small-right" type="button submit"
                          onSubmit={postResult} uk-toggle='target: #modal-result-submission'>Submit Shot(s)</button>
                      </div>
                    </form>
                    <div id='modal-result-submission' uk-modal='true'>
                      <div className="uk-modal-dialog uk-modal-body resultModal">
                        <h2 className="uk-modal-title uk-text-center" id="abouttitle">Submitting Shot(s)!</h2>
                        <span className='centerContent' uk-spinner="ratio: 3"></span>
                        <p className="uk-text-right">
                        </p>
                      </div>
                    </div></>
                  :
                  <><h3 id="fixtureprofilesecondtitle" className="uk-text-lead">FINISHED?</h3>
                    <div className="uk-margin uk-grid-small uk-child-width-auto uk-grid">
                      <label className='finishedcheckbox'><input name="homeTotalScore" onChange={inputtingTotalScore} className="uk-checkbox" type="checkbox" uk-toggle="target: #completeresultbutton" /> YES</label>
                    </div>
                    <button onClick={finalResult} id="completeresultbutton" className="uk-button uk-button-danger" hidden>Finalise Results</button>
                  </>}
              </div>}
          </div>}
      </div>
    </section>
    <div id='modal-edit-score' uk-modal='true'>
      <div className="uk-modal-dialog uk-modal-body resultModal">
        <h2 className="uk-modal-title uk-text-center" id="abouttitle">Editing Shot!</h2>
        <span className='centerContent' uk-spinner="ratio: 3"></span>
        <p className="uk-text-right">
        </p>
      </div>
    </div>
    <div id='modal-delete-score' uk-modal='true'>
      <div className="uk-modal-dialog uk-modal-body resultModal">
        <h2 className="uk-modal-title uk-text-center" id="abouttitle">Deleting Shot(s)!</h2>
        <span className='centerContent' uk-spinner="ratio: 3"></span>
        <p className="uk-text-right">
        </p>
      </div>
    </div>
    </>
  )
}

export default FixtureProfile