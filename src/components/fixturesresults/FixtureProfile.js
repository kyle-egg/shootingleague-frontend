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
  
  // const filterResults = () => {
  //   if (teamValue && leagueValue) {
  //     return fixtures.filter(fixture => {
  //       return fixture.league.every(l => leagueValue.includes(l.name)) && 
  //       fixture.homeTeam.every(hT => teamValue.includes(hT.name)) &&
  //       fixture.season.every(s => seasonValue.includes(s.name)) &&
  //       fixture.date.split('-').join('') + fixture.time.split(':').join('') < today ||
  //       fixture.league.every(l => leagueValue.includes(l.name)) && 
  //       fixture.awayTeam.every(aT => teamValue.includes(aT.name)) &&
  //       fixture.season.every(s => seasonValue.includes(s.name)) &&
  //       fixture.date.split('-').join('') + fixture.time.split(':').join('') < today
  //     })
  //   } else if (teamValue) {
  //     return fixtures.filter(fixture => {
  //       return fixture.homeTeam.every(hT => teamValue.includes(hT.name)) &&
  //       fixture.season.every(s => seasonValue.includes(s.name)) &&
  //       fixture.date.split('-').join('') + fixture.time.split(':').join('') < today ||
  //       fixture.awayTeam.every(aT => teamValue.includes(aT.name)) &&
  //       fixture.season.every(s => seasonValue.includes(s.name)) &&
  //       fixture.date.split('-').join('') + fixture.time.split(':').join('') < today
  //     }) 
  //   } else if (leagueValue) {
  //     return fixtures.filter(fixture => {
  //       return fixture.league.every(l => leagueValue.includes(l.name)) &&
  //       fixture.season.every(s => seasonValue.includes(s.name)) &&
  //       fixture.date.split('-').join('') + fixture.time.split(':').join('') < today
  //     })
  //   } else {
  //     return fixtures.filter(fixture => {
  //       return fixture.date.split('-').join('') + fixture.time.split(':').join('') < today &&
  //       fixture.season.every(s => seasonValue.includes(s.name))
  //     })
  //   }
  // }

  return (
    <section>
      <div id="resultsshero" className="uk-background-cover uk-height-large uk-panel uk-flex uk-flex-center uk-flex-middle">      
      </div>
      <div id="homeabout" className="uk-child-width-1-1@s" uk-grid>
        <div className="fixturescontainer">
          {fixture &&
          <div id="elevate" className="uk-background-cover uk-height-medium uk-panel uk-flex uk-flex-column uk-flex-center uk-flex-middle uk-text-center">
``          <div className='fixtureFilters uk-flex-inline'>
``          <img className='mediumFixtureLogo' src={fixture.homeTeam[0].logo}></img>
``          <h3 id="fixturetitle"className="uk-text-lead">{fixture.homeTeam[0].name}   {fixture.homeTotalScore} - {fixture.awayTotalScore}   {fixture.awayTeam[0].name}</h3>
``          <img className='mediumFixtureLogo' src={fixture.awayTeam[0].logo}></img> 
``          </div>
            <br></br>
            <div>
          
            </div>
            
          </div>
          }
        </div>     
      </div>
    </section>
  )
}

export default FixtureProfile