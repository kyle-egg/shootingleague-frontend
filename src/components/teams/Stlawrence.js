import LawrenceImage from '../../assets/images/StLawrence.png'

function Lawrence() {

  return (
    <div className="uk-section clubbackground">
      <div className="uk-container">
        <div id="club" className="uk-card uk-card-default clubcontainer">
          <div id="clubcrest" className="uk-card-media-top">
            <img src={LawrenceImage} uk-cover/>
          </div>
          <div>
            <div className="uk-card-body">
              <h3 className="uk-card-title">St. Lawrence</h3>
              <h6 className="clubinfo"><a href="mailto:stlawrencemrc@fsnet.co.uk">stlawrencemrc@fsnet.co.uk</a></h6>
              <h6 className="clubinfo"><a href="https://goo.gl/maps/usj3dar8nv8FBHXU7">Maillard Memorial Range, La Fraide Rue, St. Lawrence, JE3 1HW</a></h6>
              <h6 className="clubinfo"><a href="tel:01534 863306">01534 863306</a></h6>
              <br></br>
              <h6 className="clubinfo"><strong>Operating Times:</strong> From 7pm</h6>
              <h6 className="clubinfo"><strong>Club & Practice Night(s):</strong> Monday (Air Rifle) and Wednesday (.22)</h6>
              <h6 className="clubinfo"><strong>Team Shooting Night:</strong> Friday</h6>
              <br></br>
              <a href="https://www.facebook.com/stlawmrc/" uk-icon="facebook"></a>
            
              <h4 id="clubtitle" className="clubofficers">Club Officers</h4>
              <div className="uk-flex uk-flex-center uk-flex-wrap" uk-grid uk-scrollspy="cls: uk-animation-fade; target: .member; delay: 200; repeat: true">
                <div className="clubinfocard uk-card uk-card uk-card-body uk-flex-bottom">
                  <p className="clubofficers">
                  P J Norman<br></br>
                  President
                  </p>
                </div>
                <div className="clubinfocard uk-card uk-card uk-card-body">
                  <p className="clubofficers">
                J Bouchard<br></br>
                Vice President
                  </p>
                </div>
                <div className="clubinfocard uk-card uk-card uk-card-body">
                  <p className="clubofficers">
                J Boydens<br></br>
                Vice President
                  </p>
                </div>
                <div className="clubinfocard uk-card uk-card uk-card-body">
                  <p className="clubofficers">
                R Bouchard<br></br>
                Vice President
                  </p>
                </div>
                <div className="clubinfocard uk-card uk-card uk-card-body">
                  <p className="clubofficers">
                K Armstrong<br></br>
                Treasurer
                  </p>
                </div>
                <div className="clubinfocard uk-card uk-card uk-card-body">
                  <p className="clubofficers">
                M M Norman<br></br>
                Club Secretary
                  </p>
                </div>
              </div>
              <h4 id="clubtitle" className="clubofficers">Executive Committee</h4>
              <div className="clubinfocard uk-flex uk-flex-center uk-flex-wrap" uk-grid uk-scrollspy="cls: uk-animation-fade; target: .member; delay: 200; repeat: true">
                <div className="clubinfocard uk-card uk-card uk-card-body uk-flex-bottom">
                  <p className="clubofficers">
                  P Aubin
                  </p>
                </div>
                <div className="clubinfocard uk-card uk-card uk-card-body">
                  <p className="clubofficers">
                J Dervin
                  </p>
                </div>
                <div className="clubinfocard uk-card uk-card uk-card-body">
                  <p className="clubofficers">
                S Falle
                  </p>
                </div>
              </div>
              <div className="uk-flex uk-flex-center uk-flex-wrap" uk-grid uk-scrollspy="cls: uk-animation-fade; target: .member; delay: 200; repeat: true">
                <div className="clubinfocard uk-card uk-card uk-card-body">
                  <p className="clubofficers">
                L Howard
                  </p>
                </div>
              </div>
              <h4 id="clubtitle" className="clubofficers">Safeguarding Officer(s)</h4>
              <div className="uk-flex uk-flex-center uk-flex-wrap" uk-grid uk-scrollspy="cls: uk-animation-fade; target: .member; delay: 200; repeat: true">
                <div className="clubinfocard uk-card uk-card uk-card-body uk-flex-bottom">
                  <p className="clubofficers">
                  M M Norman
                  </p>
                </div>
                <div className="clubinfocard uk-card uk-card uk-card-body uk-flex-bottom">
                  <p className="clubofficers">
                  R Bouchard
                  </p>
                </div>
              </div>
              <h4 id="clubtitle" className="clubofficers">Ammunitions Officer</h4>
              <div className="uk-flex uk-flex-center uk-flex-wrap" uk-grid uk-scrollspy="cls: uk-animation-fade; target: .member; delay: 200; repeat: true">
                <div className="clubinfocard uk-card uk-card uk-card-body uk-flex-bottom">
                  <p className="clubofficers">
                  A Berry
                  </p>
                </div>
              </div>
              <h4 id="clubtitle" className="clubofficers">Delegates to JSSA</h4>
              <div className="uk-flex uk-flex-center uk-flex-wrap" uk-grid uk-scrollspy="cls: uk-animation-fade; target: .member; delay: 200; repeat: true">
                <div className="clubinfocard uk-card uk-card uk-card-body uk-flex-bottom">
                  <p className="clubofficers">
                  M Norman
                  </p>
                </div>
                <div className="clubinfocard uk-card uk-card uk-card-body">
                  <p className="clubofficers">
                R Benest
                  </p>
                </div>
                <div className="clubinfocard uk-card uk-card uk-card-body uk-flex-bottom">
                  <p className="clubofficers">
                  P Aubin
                  </p>
                </div>
                <div className="clubinfocard uk-card uk-card uk-card-body">
                  <p className="clubofficers">
                S Falle (Reserve)
                  </p>
                </div>
              </div>
              <h4 id="clubtitle" className="clubofficers">Air Gun Delegates</h4>
              <div className="uk-flex uk-flex-center uk-flex-wrap" uk-grid uk-scrollspy="cls: uk-animation-fade; target: .member; delay: 200; repeat: true">
                <div className="clubinfocard uk-card uk-card uk-card-body uk-flex-bottom">
                  <p className="clubofficers">
                  K Armstrong
                  </p>
                </div>
                <div className="clubinfocard uk-card uk-card uk-card-body">
                  <p className="clubofficers">
                P Aubin
                  </p>
                </div>
              </div>
              <h4 id="clubtitle" className="clubofficers">Range Officer(s)</h4>
              <div className="clubinfocard uk-flex uk-flex-center uk-flex-wrap" uk-grid uk-scrollspy="cls: uk-animation-fade; target: .member; delay: 200; repeat: true">
                <div className="clubinfocard uk-card uk-card uk-card-body uk-flex-bottom">
                  <p className="clubofficers">
                  J Boydens
                  </p>
                </div>
                <div className="clubinfocard uk-card uk-card uk-card-body">
                  <p className="clubofficers">
                J Dervin
                  </p>
                </div>
                <div className="clubinfocard uk-card uk-card uk-card-body">
                  <p className="clubofficers">
                M Norman
                  </p>
                </div>
                <div className="clubinfocard uk-card uk-card uk-card-body">
                  <p className="clubofficers">
                R Bouchard
                  </p>
                </div>
              </div>
              <div className="uk-flex uk-flex-center uk-flex-wrap" uk-grid uk-scrollspy="cls: uk-animation-fade; target: .member; delay: 200; repeat: true">
                <div className="clubinfocard uk-card uk-card uk-card-body">
                  <p className="clubofficers">
                K Armstrong
                  </p>
                </div>
                <div className="clubinfocard uk-card uk-card uk-card-body">
                  <p className="clubofficers">
                L Howard
                  </p>
                </div>
                <div className="clubinfocard uk-card uk-card uk-card-body">
                  <p className="clubofficers">
                A Berry
                  </p>
                </div>
                <div className="clubinfocard uk-card uk-card uk-card-body">
                  <p className="clubofficers">
                J Bouchard
                  </p>
                </div>
                <div className="clubinfocard uk-card uk-card uk-card-body">
                  <p className="clubofficers">
                A Bouchard
                  </p>
                </div>
              </div>
              <h4 id="clubtitle" className="clubofficers">Club Instructor/Coach</h4>
              <div className="uk-flex uk-flex-center uk-flex-wrap" uk-grid uk-scrollspy="cls: uk-animation-fade; target: .member; delay: 200; repeat: true">
                <div className="clubinfocard uk-card uk-card uk-card-body uk-flex-bottom">
                  <p className="clubofficers">
                R Bouchard
                  </p>
                </div>
                <div className="clubinfocard uk-card uk-card uk-card-body">
                  <p className="clubofficers">
                J Boydens
                  </p>
                </div>
                <div className="clubinfocard uk-card uk-card uk-card-body uk-flex-bottom">
                  <p className="clubofficers">
                K Armstrong
                  </p>
                </div>
                <div className="clubinfocard uk-card uk-card uk-card-body">
                  <p className="clubofficers">
                R Benest
                  </p>
                </div>
                <div className="clubinfocard uk-card uk-card uk-card-body">
                  <p className="clubofficers">
                M Norman
                  </p>
                </div>
              </div>
              <br></br>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10424.70943059712!2d-2.1482778000000002!3d49.21616345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x480dad1889931183%3A0x57f6ec5e4fa219e!2sJersey%20JE3%201HW!5e0!3m2!1sen!2sje!4v1659714930714!5m2!1sen!2sje" width="600" height="450"></iframe></div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Lawrence