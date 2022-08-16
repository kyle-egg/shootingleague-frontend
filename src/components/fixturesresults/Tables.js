

function Tables() {



  return (
    <section>
      <div id="tableshero" className="uk-background-cover uk-height-large uk-panel uk-flex uk-flex-center uk-flex-middle">      
      </div>
      <div id="homeabout" className="uk-child-width-1-1@s" uk-grid>
        <div className="tablescontainer">
          <div id="elevate" className="uk-background-cover uk-height-medium uk-panel uk-flex uk-flex-column uk-flex-center uk-flex-middle uk-text-center">
            <h3 id="tabletitle"className="uk-text-lead">LEAGUE TABLES</h3>
            <br></br>
            <div>
              <iframe
                className="tablesgrid" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRfP50FZC-IB2WsPHzJPLwxMc-1NDHpv_bbMU_tPaItPQPgdZq72fCRa4y4s76AQQ/pubhtml?gid=788435547&amp;single=true&amp;widget=false&amp;headers=false&amp;scrolling=no&amp;chrome=false"></iframe>
            </div>
          </div>
        </div>     
      </div>
    </section>
  )
}
export default Tables