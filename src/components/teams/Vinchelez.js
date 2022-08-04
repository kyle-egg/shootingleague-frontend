import VinchelezImage from '../../assets/images/logoplaceholder.png'

function Vinchelez() {

  return (
    <div className="uk-section clubbackground">
      <div className="uk-container">
        <div id="club" className="uk-card uk-card-default clubcontainer">
          <div id="clubcrest" className="uk-card-media-top">
            <img src={VinchelezImage} uk-cover/>
          </div>
          <div>
            <div className="uk-card-body">
              <h3 className="uk-card-title">Vinchelez</h3>
              <h6 className="clubinfo"><a href="mailto:vinchelezsecretary@hotmail.com"></a>vinchelezsecretary@hotmail.com</h6>
              <h6 className="clubinfo"><a href="https://goo.gl/maps/XZq3gmzn1EUQVSqP6"></a>Vinchelez Sports Club, Rue De La Mare,	St Ouen, Jersey</h6>
              <h6 className="clubinfo"><a href="tel:www.westernmrc.org.je"></a></h6>
              <br></br>
              <h6 className="clubinfo"><strong>Operating Times:</strong> From 7:30pm</h6>
              <h6 className="clubinfo"><strong>Club & Practice Night(s):</strong> Monday</h6>
              <h6 className="clubinfo"><strong>Team Shooting Night:</strong> Thursday</h6>
              <br></br>
            
              <h4 id="clubtitle" className="clubofficers">Club Officers</h4>
              <div className="uk-flex uk-flex-center uk-flex-wrap" uk-grid uk-scrollspy="cls: uk-animation-fade; target: .member; delay: 200; repeat: true">
                <div className="clubinfocard uk-card uk-card uk-card-body uk-flex-bottom">
                  <p className="clubofficers">
                    <br></br>
                  Paul Vibert
                  President
                  </p>
                </div>
                <div className="clubinfocard uk-card uk-card uk-card-body">
                  <p className="clubofficers">
                    <br></br>
                Chris Stead
                Vice President
                  </p>
                </div>
                <div className="clubinfocard uk-card uk-card uk-card-body">
                  <p className="clubofficers">
                    <br></br>
                Matt Beddoe
                Treasurer
                  </p>
                </div>
                <div className="clubinfocard uk-card uk-card uk-card-body">
                  <p className="clubofficers">
                    <br></br>
                Alistair Simon
                Club Secretary
                  </p>
                </div>
              </div>
              <h4 id="clubtitle" className="clubofficers">Executive Committee</h4>
              <div className="clubinfocard uk-flex uk-flex-center uk-flex-wrap" uk-grid uk-scrollspy="cls: uk-animation-fade; target: .member; delay: 200; repeat: true">
                <div className="clubinfocard uk-card uk-card uk-card-body uk-flex-bottom">
                  <p className="clubofficers">
                    <br></br>
                  Graham Huelin
                  </p>
                </div>
                <div className="clubinfocard uk-card uk-card uk-card-body">
                  <p className="clubofficers">
                    <br></br>
                Phil Romeril
                  </p>
                </div>
                <div className="clubinfocard uk-card uk-card uk-card-body">
                  <p className="clubofficers">
                    <br></br>
                Richard Savarese
                  </p>
                </div>
              </div>
              <div className="uk-flex uk-flex-center uk-flex-wrap" uk-grid uk-scrollspy="cls: uk-animation-fade; target: .member; delay: 200; repeat: true">
                <div className="clubinfocard uk-card uk-card uk-card-body">
                  <p className="clubofficers">
                    <br></br>
                Gary Vibert
                  </p>
                </div>
                <div className="clubinfocard uk-card uk-card uk-card-body">
                  <p className="clubofficers">
                    <br></br>
                Darren Rimeur
                  </p>
                </div>
                <div className="clubinfocard uk-card uk-card uk-card-body">
                  <p className="clubofficers">
                    <br></br>
                Charlotte Beddoe
                  </p>
                </div>
                <div className="clubinfocard uk-card uk-card uk-card-body">
                  <p className="clubofficers">
                    <br></br>
                Kevin De Gruchy
                  </p>
                </div>
              </div>
              <h4 id="clubtitle" className="clubofficers">Safeguarding Officer(s)</h4>
              <div className="uk-flex uk-flex-center uk-flex-wrap" uk-grid uk-scrollspy="cls: uk-animation-fade; target: .member; delay: 200; repeat: true">
                <div className="clubinfocard uk-card uk-card uk-card-body uk-flex-bottom">
                  <p className="clubofficers">
                  Gary Vibert
                  </p>
                </div>
              </div>
              <h4 id="clubtitle" className="clubofficers">Ammunitions Officer</h4>
              <div className="uk-flex uk-flex-center uk-flex-wrap" uk-grid uk-scrollspy="cls: uk-animation-fade; target: .member; delay: 200; repeat: true">
                <div className="clubinfocard uk-card uk-card uk-card-body uk-flex-bottom">
                  <p className="clubofficers">
                  Kevin De Gruchy
                  </p>
                </div>
              </div>
              <h4 id="clubtitle" className="clubofficers">Delegates to JSSA</h4>
              <div className="uk-flex uk-flex-center uk-flex-wrap" uk-grid uk-scrollspy="cls: uk-animation-fade; target: .member; delay: 200; repeat: true">
                <div className="clubinfocard uk-card uk-card uk-card-body uk-flex-bottom">
                  <p className="clubofficers">
                  Kevin De Gruchy
                  </p>
                </div>
                <div className="clubinfocard uk-card uk-card uk-card-body">
                  <p className="clubofficers">
                Pauk Vibert
                  </p>
                </div>
              </div>
              <br></br>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2605.5057390790394!2d-2.2015!3d49.228899999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xca5c7c4d5ce5ce78!2zNDnCsDEzJzQ0LjAiTiAywrAxMicwNS40Ilc!5e0!3m2!1sen!2sje!4v1659647637550!5m2!1sen!2sje" width="600" height="450"></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Vinchelez