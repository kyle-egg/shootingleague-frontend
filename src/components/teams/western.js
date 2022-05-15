import WesternImage from '../../assets/images/Western_MRC_Logo-removebg-preview.png'

function Western() {

  return (
<div class="uk-section clubbackground">
    <div class="uk-container">
      <div id="club" class="uk-card uk-card-default clubcontainer">
        <div id="clubcrest" class="uk-card-media-top">
          <img src={WesternImage} uk-cover/>
        </div>
        <div>
          <div class="uk-card-body">
            <h3 class="uk-card-title">Western M.R.C</h3>
            <h6 className="clubinfo"><a href="www.westernmrc.org.je">www.westernmrc.org.je</a></h6>
            <h6 className="clubinfo"><a href="mailto:westernmrc@gmail.com">westernmrc@gmail.com</a></h6>
            <h6 className="clubinfo"><a href="https://goo.gl/maps/avfNWuVuE35VYBbH6">La Rue de la Fosse, St Peter, Jersey, JE3 7AH</a></h6>
            <h6 className="clubinfo"><a href="tel:www.westernmrc.org.je">01534 483293</a></h6>
            <a href="https://www.facebook.com/westernmrc/" className="clubinfo" uk-icon="facebook"></a>
            <a href="https://www.instagram.com/westernmrc/" className="clubinfo" uk-icon="instagram"></a>
            <p className="clubblurb">The club was founded in 1907, during the time between the Boer War and the First World War, when the Government of the day actively promoted the formation of shooting clubs.   The club moved to its present site in 1968. Since then, the facilities have been improved and updated on a regular basis. The last major programme was a complete refurbishment of the clubhouse in 2015 which included the installation of electronic targets.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
export default Western