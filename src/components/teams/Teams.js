
function Teams() {

  return (
<div class="uk-section">
    <div class="uk-container"></div>
    <div id="clubsgrid" class="uk-grid-small uk-child-width-1-4@s uk-flex-center uk-text-center" uk-grid="parallax: 150">
    <div>
        <div class="clubcard uk-card uk-card-default uk-card-body uk-grid-margin">St Brelade</div>
        <div class="clubcard uk-card uk-card-default uk-card-body uk-grid-margin">Grouville</div>
        <div class="clubcard uk-card uk-card-default uk-card-body uk-grid-margin">St Helier</div>
    </div>
    <div>
        <div class="clubcard uk-card uk-card-default uk-card-body uk-grid-margin">St John</div>
        <div class="clubcard uk-card uk-card-default uk-card-body uk-grid-margin">St Lawrence</div>
        <div class="clubcard uk-card uk-card-default uk-card-body uk-grid-margin">Leoville</div>
    </div>
    <div>
        <div class="clubcard uk-card uk-card-default uk-card-body uk-grid-margin">Vinchelez</div>
        <div class="clubcard uk-card uk-card-default uk-card-body uk-grid-margin">Guernsey</div>
        <a className="uk-navbar-item uk-logo" href="/teams/western">
        <div class="clubcard uk-card uk-card-default uk-card-body uk-grid-margin" id="western"></div>
        </a>
    </div>
</div>
</div>
  )
}
export default Teams