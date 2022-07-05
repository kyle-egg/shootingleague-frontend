import EasternImage from '../../assets/images/Logo_EARC.jpg'


function Western() {

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
              <h4 id="clubtitle" className="clubofficers">Safeguarding Officer(s)</h4>
              <div className="uk-flex uk-flex-center uk-flex-wrap" uk-grid uk-scrollspy="cls: uk-animation-fade; target: .member; delay: 200; repeat: true">
                <div className="clubinfocard uk-card uk-card uk-card-body uk-flex-bottom">
                  <p className="clubofficers">
                  Sarah Campion
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
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Western