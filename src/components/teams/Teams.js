
function Teams() {

  return (
<div class="uk-section teamsbackground">
    <div class="uk-container"></div>
    <div id="clubsgrid" class="uk-grid-small uk-child-width-1-4@s uk-flex-center uk-text-center" uk-grid="parallax: 150">
    <div>
    <a className="uk-navbar-item uk-logo" href="/teams/stbrelade">
        <div class="clubcard uk-card uk-card-default uk-card-body uk-grid-margin" id="logoplaceholder"><h6 id="teamtitle">St. Brelade</h6></div>
        </a>
        <a className="uk-navbar-item uk-logo" href="/teams/grouville">
        <div class="clubcard uk-card uk-card-default uk-card-body uk-grid-margin" id="logoplaceholder"><h6 id="teamtitle">Grouville</h6></div>
        </a>
        <a className="uk-navbar-item uk-logo" href="/teams/sthelier">
        <div class="clubcard uk-card uk-card-default uk-card-body uk-grid-margin" id="logoplaceholder"><h6 id="teamtitle">St. Helier</h6></div>
        </a>
    </div>
    <div>
        <a className="uk-navbar-item uk-logo" href="/teams/stjohn">
        <div class="clubcard uk-card uk-card-default uk-card-body uk-grid-margin" id="logoplaceholder"><h6 id="teamtitle">St. John</h6></div>
        </a>
        <a className="uk-navbar-item uk-logo" href="/teams/stlawrence">
        <div class="clubcard uk-card uk-card-default uk-card-body uk-grid-margin" id="stlawrence"><h6 id="teamtitle">St. Lawrence</h6></div>
        </a>
        <a className="uk-navbar-item uk-logo" href="/teams/leoville">
        <div class="clubcard uk-card uk-card-default uk-card-body uk-grid-margin" id="leoville"><h6 id="teamtitle">Leoville</h6></div>
        </a>
    </div>
    <div>
    <a className="uk-navbar-item uk-logo" href="/teams/vinchelez">
        <div class="clubcard uk-card uk-card-default uk-card-body uk-grid-margin" id="logoplaceholder"><h6 id="teamtitle">Vinchelez</h6></div>
        </a>
        <a className="uk-navbar-item uk-logo" href="/teams/guernsey">
        <div class="clubcard uk-card uk-card-default uk-card-body uk-grid-margin" id="logoplaceholder"><h6 id="teamtitle">Guernsey</h6></div>
        </a>
        <a className="uk-navbar-item uk-logo" href="/teams/western">
        <div class="clubcard uk-card uk-card-default uk-card-body uk-grid-margin" id="western"><h6 id="teamtitle">Western</h6></div>
        </a>
    </div>
</div>
</div>
  )
}
export default Teams