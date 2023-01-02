import { getAllSeasons } from "../../lib/api"
import React from 'react'

function Tables() {
  const [seasonValue, setSeasonValue] = React.useState('2023')
  const [seasons, setSeasons] = React.useState(null)
  const [fixtures, setFixtures] = React.useState(null)

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

  const handleSeason = (e) => {
    setSeasonValue(e.target.value)
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
    <div id="homeabout" className="uk-child-width-1-1@s" uk-grid>
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
                </div>
              </div>
              {seasons && seasons.map(season => {
                console.log(season.leagues)
                return <div className="column" key={season.id} id="column">
                  <div className="uk-column-1-1">
                    <p>{season.leagues[0].name}</p>
                    {season.leagues[0].team.map(t => {
                      return <div className="column" key={t.id} id="column">
                                <p>{t.name}</p>
                                </div>
                    })}
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
export default Tables