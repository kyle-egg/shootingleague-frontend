import EasternImage from '../../assets/images/Eastern.png'


function Eastern() {

  return (
    <div className="uk-section clubbackground">
      <div className="uk-container">
        <div id="club" className="uk-card uk-card-default clubcontainer">
          <div id="clubcrest" className="uk-card-media-top">
            <img src={EasternImage} uk-cover/>
          </div>
          <div>
            <div className="uk-card-body">
              <h3 className="uk-card-title">Eastern Air Rifle Club</h3>
              <h6 className="clubinfo"><a href="https://goo.gl/maps/StkpNnJgw38iDCbF6">Stanley England Memorial Range, Grouville Parish Hall, Grouville, Jersey, JE3 9GA</a></h6>
              <br></br>
              <h6 className="clubinfo"><strong>Club & Practice Night(s):</strong> Thursday 7:30pm (Open to Guests)</h6>
              <h6 className="clubinfo"><strong>Team Shooting Night:</strong> Monday 7:30pm (Members Only)</h6>
              <br></br>
              <a href=" https://www.facebook.com/EasternAirRifleClub" uk-icon="facebook"></a>
              <h4 id="clubtitle" className="clubofficers">Club Officers</h4>
              <div className="uk-flex uk-flex-center uk-flex-wrap" uk-grid uk-scrollspy="cls: uk-animation-fade; target: .member; delay: 200; repeat: true">
                <div className="clubinfocard uk-card uk-card uk-card-body uk-flex-bottom">
                  <p className="clubofficers">
                  Darren Fry<br></br>
                  President
                  </p>
                </div>
                <div className="clubinfocard uk-card uk-card uk-card-body">
                  <p className="clubofficers">
                  Kirk Lewis<br></br>
                Treasurer
                  </p>
                </div>
                <div className="clubinfocard uk-card uk-card uk-card-body">
                  <p className="clubofficers">
                  Kate Smaller<br></br>
                Club Secretary
                  </p>
                </div>
              </div>
              <h4 id="clubtitle" className="clubofficers">Delegates to JSSA</h4>
              <div className="uk-flex uk-flex-center uk-flex-wrap" uk-grid uk-scrollspy="cls: uk-animation-fade; target: .member; delay: 200; repeat: true">
                <div className="clubinfocard uk-card uk-card uk-card-body uk-flex-bottom">
                  <p className="clubofficers">
                  Kate Smaller
                  </p>
                </div>
                <div className="clubinfocard uk-card uk-card uk-card-body">
                  <p className="clubofficers">
                  Shane Lopez-Rubio
                  </p>
                </div>
              </div>
              <br></br>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2607.8815995308964!2d-2.0524722000000004!3d49.183833299999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9d71ae689121dd3c!2zNDnCsDExJzAxLjgiTiAywrAwMycwOC45Ilc!5e0!3m2!1sen!2sje!4v1659715271312!5m2!1sen!2sje" width="600" height="450"></iframe></div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Eastern