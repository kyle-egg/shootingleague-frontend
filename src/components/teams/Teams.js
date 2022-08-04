
function Teams() {

  return (
    <div className="uk-section teamsbackground">
      <div className="uk-container"></div>
      <div id="clubsgrid" className="uk-grid-small uk-child-width-1-4@s uk-flex-center uk-text-center" uk-grid="parallax: 150">
        <div>
          <a className="uk-navbar-item uk-logo" href="/teams/stbrelade">
            <div className="clubcard uk-card uk-card-default uk-card-body uk-grid-margin" id="stbrelade"><h6 id="teamtitle">St. Brelade</h6></div>
          </a>
          <a className="uk-navbar-item uk-logo" href="/teams/sthelier">
            <div className="clubcard uk-card uk-card-default uk-card-body uk-grid-margin" id="sthelier"><h6 id="teamtitle">St. Helier</h6></div>
          </a>
          <a className="uk-navbar-item uk-logo" href="/teams/leoville">
            <div className="clubcard uk-card uk-card-default uk-card-body uk-grid-margin" id="leoville"><h6 id="teamtitle">Leoville</h6></div>
          </a>
        </div>
        <div>
          <a className="uk-navbar-item uk-logo" href="/teams/eastern">
            <div className="clubcard uk-card uk-card-default uk-card-body uk-grid-margin" id="eastern"><h6 id="teamtitle">Eastern Air Rifle Club</h6></div>
          </a>
          <a className="uk-navbar-item uk-logo" href="/teams/stjohn">
            <div className="clubcard uk-card uk-card-default uk-card-body uk-grid-margin" id="stjohn"><h6 id="teamtitle">St. John</h6></div>
          </a>
          <a className="uk-navbar-item uk-logo" href="/teams/western">
            <div className="clubcard uk-card uk-card-default uk-card-body uk-grid-margin" id="western"><h6 id="teamtitle">Western</h6></div>
          </a>
          <a className="uk-navbar-item uk-logo" href="/teams/jorc">
            <div className="clubcard uk-card uk-card-default uk-card-body uk-grid-margin" id="jorc"><h6 id="teamtitle">Jersey Smallbore Outdoor Rifle Club</h6></div>
          </a>
        </div>
        <div>
          <a className="uk-navbar-item uk-logo" href="/teams/grouville">
            <div className="clubcard uk-card uk-card-default uk-card-body uk-grid-margin" id="logoplaceholder"><h6 id="teamtitle">Grouville</h6></div>
          </a>
          <a className="uk-navbar-item uk-logo" href="/teams/stlawrence">
            <div className="clubcard uk-card uk-card-default uk-card-body uk-grid-margin" id="stlawrence"><h6 id="teamtitle">St. Lawrence</h6></div>
          </a>
          <a className="uk-navbar-item uk-logo" href="/teams/vinchelez">
            <div className="clubcard uk-card uk-card-default uk-card-body uk-grid-margin" id="logoplaceholder"><h6 id="teamtitle">Vinchelez</h6></div>
          </a>
        </div>
      </div>
    </div>
  )
}
export default Teams