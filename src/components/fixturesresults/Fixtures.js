import React from 'react'
import axios from 'axios'


function Fixtures() {
  const [fixtures, setFixtures] = React.useState(null)
  const [seasonValue, setSeasonValue] = React.useState('')
  const [searchValue, setSearchValue] = React.useState('')

  React.useEffect(() => {
    const getData = async () => {
      const res = await axios.get('/api/fixtures')
      setFixtures(res.data)
    }
    getData()
    
  }, [ ])


  const handleSeason = (e) => {
    setSeasonValue(e.target.value)
  }

  const handleSearch = (e) => {
    setSearchValue(e.target.value)
  }

  // const filterFixtures = () => {
  //   if (seasonValue || searchValue) {
  //     return fixtures.filter(fixture => {
  //       return fixture.season.every(c => seasonValue.includes(c.name)) && 
  //       fixture.homeTeam.every(t => searchValue.toLowerCase().includes(t.name.toLowerCase()))
  //     })
  //   } else {
  //     return fixtures
  //   }
  // }


  return (
    <section>
      <div id="fixtureshero" className="uk-background-cover uk-height-large uk-panel uk-flex uk-flex-center uk-flex-middle">      
      </div>
      <div id="homeabout" className="uk-child-width-1-1@s" uk-grid>
        <div className="fixturescontainer">
          <div id="elevate" className="uk-background-cover uk-height-medium uk-panel uk-flex uk-flex-column uk-flex-center uk-flex-middle uk-text-center">
            <h3 id="fixturetitle"className="uk-text-lead">FIXTURES</h3>
            <br></br>
            <div>
              <ul className="uk-subnav uk-subnav-pill" uk-margin>
                <li className="uk-active"><a href="#">All</a></li>
                <li><a href="#">Division 1</a></li>
                <li><a href="#">Division 2</a></li>
              </ul>
            </div>
            <div>
              <div>
                {/* <iframe
                className="fixturesgrid" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTxlCLGun8UdSIxgeGvBmJWpJyDpSVj4U5CLMfKpbat9_dFmNqzfYTVyeTjt-IEbvkw-Ay5jerNYUW4/pubhtml?gid=1279606674&amp;single=true&amp;widget=false&amp;headers=false&amp;scrolling=no&amp;chrome=false"></iframe> */}
                <div>
                  <input 
                    className='searchFixtures'
                    placeholder='SEARCH TEAMS'
                    onChange={handleSearch}
                    id="sub-header"/>
                </div>
                <div>
                  <select 
                    className='seasonSelector'
                    onChange={handleSeason}>
                    <option value=''>Flavour:</option>
                    <option value='Classic'>Classic</option>
                    <option value='Citrus'>Citrus</option>
                    <option value='Spiced'>Spiced</option>
                    <option value='Fruit'>Fruit</option>
                    <option value='Floral'>Floral</option>
                    <option value='Herbs'>Herbs</option>
                  </select>
                </div>
              </div>
              {fixtures && filterFixtures().map(fixture => {
                return <div className="column"key={fixture.id} id="column">
                  <div className="uk-column-1-6">
                    <p>{fixture.date}</p>
                    <p>{fixture.time}</p>
                    <p>{fixture.league[0].name}</p>
                    <p>{fixture.homeTeam[0].name}</p>
                    <p>V</p>
                    <p>{fixture.awayTeam[0].name}</p>
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
export default Fixtures