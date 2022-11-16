import React from 'react'

function Results() {
  const [showDetailed, setShowDetailed] = React.useState(false)

  const seeDetailed = () => {
    if (!showDetailed) {
      setShowDetailed(true)
    } else {
      setShowDetailed(false)
    }
  }

  const closeDetailed = () => { 
    setShowDetailed(false)
  }

  return (
    <section>
      <div id="resultsshero" className="uk-background-cover uk-height-large uk-panel uk-flex uk-flex-center uk-flex-middle">      
      </div>
      <div id="homeabout" className="uk-child-width-1-1@s" uk-grid>
        <div className="fixturescontainer">
          <div id="elevate" className="uk-background-cover uk-height-medium uk-panel uk-flex uk-flex-column uk-flex-center uk-flex-middle uk-text-center">
            <h3 id="fixturetitle"className="uk-text-lead">RESULTS</h3>
            <br></br>
            <div>
              <ul className="uk-subnav uk-subnav-pill" uk-margin>
                <li onClick={closeDetailed}><a>All</a></li>
                <li><a onClick={seeDetailed}>Latest Results</a></li>
              </ul>
            </div>
            <div>
              {showDetailed && (
                <iframe
                  className="resultsgrid" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTxlCLGun8UdSIxgeGvBmJWpJyDpSVj4U5CLMfKpbat9_dFmNqzfYTVyeTjt-IEbvkw-Ay5jerNYUW4/pubhtml?gid=697951496&amp;single=true&amp;widget=false&amp;headers=false&amp;scrolling=no&amp;chrome=false"></iframe>
              )}
              <iframe
                className="resultsgrid" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTxlCLGun8UdSIxgeGvBmJWpJyDpSVj4U5CLMfKpbat9_dFmNqzfYTVyeTjt-IEbvkw-Ay5jerNYUW4/pubhtml?gid=1187899803&amp;single=true&amp;widget=false&amp;headers=false&amp;scrolling=no&amp;chrome=false"></iframe>
            </div>
          </div>
        </div>     
      </div>
    </section>
  )
}

export default Results