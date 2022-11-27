import React from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'


function FixtureProfile() {
  const { fixtureId } = useParams()
  const [fixture, setFixture] = React.useState(null)


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

  // var today = new Date()
  // var date = String(today.getDate()).padStart(2, '0')
  // var month = String(today.getMonth() + 1).padStart(2, '0') //January is 0!
  // var year = String(today.getFullYear())
  // var hh = String(today.getHours()) - 1
  // var mm = String(today.getMinutes())
  // var ss = String(today.getSeconds())

  // today = year + month + date + hh + mm + ss

  // if (fixtures) {
  //   fixtures.sort((b, a) => b.date - a.date)
  // }
  
  // if (seasons) {
  //   seasons.sort((b, a) => b.name - a.name)
  //   console.log(seasons)
  // }


  const filterHomeResults = () => {
    if (fixture) {
      return fixture.results.filter(result => {
        return result.team.username.includes(fixture.homeTeam[0].name.split(' ').join(''))
      })
    }
  }

  const filterAwayResults = () => {
    if (fixture) {
      return fixture.results.filter(result => {
        return result.team.username.includes(fixture.awayTeam[0].name.split(' ').join(''))
      })
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
            <h3 id="fixtureprofiletitle"className="uk-text-lead">{fixture.homeTeam[0].name}   {fixture.homeTotalScore} - {fixture.awayTotalScore}   {fixture.awayTeam[0].name}</h3>
            {/* <img className='mediumFixtureLogo' src={fixture.awayTeam[0].logo}></img>  */}
            <br></br>
            <div className="uk-column-1-2">
              {filterHomeResults().map(result => {
                return <div className="column" key={result.id}>
                  <div className="uk-column-1-3">
                    <p>{result.player[0].name}</p>
                    <p>{result.shotOne}</p>
                    <p>{result.shotTwo}</p>
                    {console.log(result.player)}
                  </div>
                </div>
              })
              }
              {filterAwayResults().map(result => {
                return <div className="column" key={result.id}>
                  <div className="uk-column-1-3">
                    <p>{result.player[0].name}</p>
                    <p>{result.shotOne}</p>
                    <p>{result.shotTwo}</p>
                  </div>
                </div>
              })
              }
            </div>
          </div>
          }
        </div>     
      </div>
    </section>
  )
}

export default FixtureProfile