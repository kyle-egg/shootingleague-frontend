

function Fixtures() {



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
                <li><a href="#">League 1</a></li>
                <li><a href="#">League 2</a></li>
              </ul>
            </div>
            <div>
              <iframe
                className="fixturesgrid" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vR8CHpmypq_pEujTIftL9dbgjxwIftLYj8wMTyvFjP45nBrma-bR8WnW549jZkgkyi_-JULO3AXGBXv/pubhtml?gid=1819380640&amp;single=true&amp;widget=false&amp;headers=false&amp;scrolling=no&amp;chrome=false"></iframe>
            </div>
          </div>
        </div>     
      </div>
    </section>
  )
}
export default Fixtures