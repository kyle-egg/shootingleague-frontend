import { userProfile, headers } from '../lib/api'
import React from 'react'
import { getUserId } from '../lib/auth'
import { useLocation } from 'react-router-dom'
import { getAllFixtures } from '../lib/api'
// import { FadeInDiv } from '../gins/Gins'

function TeamCenter() {
  useLocation()
  const [profile, setProfile] = React.useState({})
  const [fixtures, setFixtures] = React.useState(null)

  React.useEffect(() => {
    const getData = async () => {
      const res = await userProfile(getUserId(), headers())
      setProfile(res.data)
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

  var today = new Date()
  var date = String(today.getDate()).padStart(2, '0')
  var tomorrow = String(1 + today.getDate()).padStart(2, '0')
  var month = String(today.getMonth() + 1).padStart(2, '0') //January is 0!
  var year = String(today.getFullYear())

  const matchDate = year + month + date + String('090000')
  const deadline = year + month + tomorrow + String('000000')

  // Set the date we're counting down to
  var countDownDate = new Date((String(today).slice(4,7) + ' ' + tomorrow + ', ' + year + ' ' + '00:00:00')).getTime()

  // // Update the count down every 1 second
  // var x = setInterval(function() {   
  //   // Get today's date and time
  //   var now = new Date().getTime()
      
  //   // Find the distance between now and the count down date
  //   var distance = countDownDate - now
  //   // console.log(distance)
  //   // console.log(now)
    
  //   // Time calculations for days, hours, minutes and seconds
  //   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  //   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
  //   var seconds = Math.floor((distance % (1000 * 60)) / 1000)

  //   // Output the result in an element with id="demo"
  //   document.getElementById('countdowntimer').innerHTML = hours + 'h '
  // + minutes + 'm ' + seconds + 's '
  
  // if (hours > 5) {
  //   clearInterval(x)
  //   document.getElementById('countdowntimer').innerHTML = 'DEADLINE PASSED'
  // }
  // }, 1000)


  const filterLiveResults = () => {
    if (fixtures && profile.team) {
      return fixtures.filter(fixture => {
        return fixture.homeTeam.every(hT => profile.team[0].name.includes(hT.name)) &&
        fixture.date.split('-').join('') + fixture.time.split(':').join('') > matchDate && 
        fixture.date.split('-').join('') + fixture.time.split(':').join('') < deadline ||
        fixture.awayTeam.every(aT => profile.team[0].name.includes(aT.name)) &&
        fixture.date.split('-').join('') + fixture.time.split(':').join('') > matchDate && 
        fixture.date.split('-').join('') + fixture.time.split(':').join('') < deadline
      })
    } 
  }

  const liveResults = filterLiveResults()
  console.log(liveResults)
  return (
    // <FadeInDiv>
    <section>
      <div id="loginhero" className="uk-background-cover uk-height-large uk-panel uk-flex uk-flex-center uk-flex-middle">      
      </div>
      <div id="homeabout" className="uk-child-width-1-1@s" uk-grid>
        <div className="homecontainer">
          {profile.club &&
              profile.club.map(club => {
                return <div className="uk-text-center" key={club.id}>
                  <img className="largeFixtureLogo" src= {club.logo} />
                </div>
              })}
          <div id="teamcentercontainer" className="uk-background-cover uk-height-medium uk-panel uk-flex uk-flex-column uk-flex-middle uk-text-center">
            {profile.team &&
              profile.team.map(team => {
                return <div key={team.id}>
                  <h3 id="tctitle"className="uk-text-lead">{team.name.toUpperCase()} <br></br>
                MATCH CENTER</h3>
                </div>
              })}
              <div>
              <div>
            <br></br>
            <p>Please submit the below result(s) before the deadline.</p>
            {fixtures && profile && filterLiveResults().map(liveFixture => {
              return <div className="column" key={liveFixture.id} id="column">
                <div className="uk-column-1-7">
                  <img className='smallFixtureLogo' src={liveFixture.homeTeam[0].logo}></img>
                  <p>{liveFixture.homeTeam[0].name}</p>
                  <p><a href={`/fixtures/${liveFixture.id}`}>{liveFixture.homeTotalScore} - {liveFixture.awayTotalScore}</a></p>
                  <p>{liveFixture.awayTeam[0].name}</p>
                  <img className='smallFixtureLogo' src={liveFixture.awayTeam[0].logo}></img>
                  <p className="loginhelp" id="countdowntimer"></p>
                  <a href={`/fixtures/${liveFixture.id}`}>
                    <button href={`/fixtures/${liveFixture.id}`}>Submit Result</button>
                  </a>
                </div>
              </div>
            })}
            </div>
            </div>
          </div>
        </div>     
      </div>
    </section>
  )
}
export default TeamCenter