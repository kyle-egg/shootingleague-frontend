import JohnImage from '../../assets/images/logoplaceholder.png'

function John() {

  return (
    <div className="uk-section clubbackground">
      <div className="uk-container">
        <div id="club" className="uk-card uk-card-default clubcontainer">
          <div id="clubcrest" className="uk-card-media-top">
            <img src={JohnImage} uk-cover/>
          </div>
          <div>
            <div className="uk-card-body">
              <h3 className="uk-card-title">St. John</h3>
              <h6 className="clubinfo"><a href="https://goo.gl/maps/8rmfNqHbrrQE7gwn7">5 La Route du Mont Mado, Jersey JE3 4DS</a></h6>
              <br></br>
              <a href="https://facebook.com/StJohnsShootingClub/" uk-icon="facebook"></a>
              <h4 id="clubtitle" className="clubofficers">Club Officers</h4>
              <div className="uk-flex uk-flex-center uk-flex-wrap" uk-grid uk-scrollspy="cls: uk-animation-fade; target: .member; delay: 200; repeat: true">
                <div className="clubinfocard uk-card uk-card uk-card-body uk-flex-bottom">
                  <p className="clubofficers">
                  Peter Quimby<br></br>
                  President
                  </p>
                </div>
                <div className="clubinfocard uk-card uk-card uk-card-body">
                  <p className="clubofficers">
                  Craig Marett<br></br>
                Vice President
                  </p>
                </div>
                <div className="clubinfocard uk-card uk-card uk-card-body">
                  <p className="clubofficers">
                  Dave Ward<br></br>
                Vice President
                  </p>
                </div>
                <div className="clubinfocard uk-card uk-card uk-card-body">
                  <p className="clubofficers">
                  Helen Pulley<br></br>
                Treasurer
                  </p>
                </div>
                <div className="clubinfocard uk-card uk-card uk-card-body">
                  <p className="clubofficers">
                  Evita de Vos<br></br>
                Club Secretary
                  </p>
                </div>
              </div>
              <h4 id="clubtitle" className="clubofficers">Executive Committee</h4>
              <div className="clubinfocard uk-flex uk-flex-center uk-flex-wrap" uk-grid uk-scrollspy="cls: uk-animation-fade; target: .member; delay: 200; repeat: true">
                <div className="clubinfocard uk-card uk-card uk-card-body uk-flex-bottom">
                  <p className="clubofficers">
                  Francis Wood
                  </p>
                </div>
                <div className="clubinfocard uk-card uk-card uk-card-body">
                  <p className="clubofficers">
                  Frank Wood
                  </p>
                </div>
                <div className="clubinfocard uk-card uk-card uk-card-body">
                  <p className="clubofficers">
                  Francois Le Luyer
                  </p>
                </div>
              </div>
              <div className="uk-flex uk-flex-center uk-flex-wrap" uk-grid uk-scrollspy="cls: uk-animation-fade; target: .member; delay: 200; repeat: true">
                <div className="clubinfocard uk-card uk-card uk-card-body">
                  <p className="clubofficers">
                  Dave Ward
                  </p>
                </div>
                <div className="clubinfocard uk-card uk-card uk-card-body">
                  <p className="clubofficers">
                  John Renouf
                  </p>
                </div>
                <div className="clubinfocard uk-card uk-card uk-card-body">
                  <p className="clubofficers">
                  John Gallichan
                  </p>
                </div>
                <div className="clubinfocard uk-card uk-card uk-card-body">
                  <p className="clubofficers">
                  Dave Mills
                  </p>
                </div>
              </div>
              <h4 id="clubtitle" className="clubofficers">Safeguarding Officer(s)</h4>
              <div className="uk-flex uk-flex-center uk-flex-wrap" uk-grid uk-scrollspy="cls: uk-animation-fade; target: .member; delay: 200; repeat: true">
                <div className="clubinfocard uk-card uk-card uk-card-body uk-flex-bottom">
                  <p className="clubofficers">
                  John Renouf
                  </p>
                </div>
                <div className="clubinfocard uk-card uk-card uk-card-body">
                  <p className="clubofficers">
                  Nikki Holmes
                  </p>
                </div>
              </div>
              <h4 id="clubtitle" className="clubofficers">Range Officer(s)</h4>
              <div className="clubinfocard uk-flex uk-flex-center uk-flex-wrap" uk-grid uk-scrollspy="cls: uk-animation-fade; target: .member; delay: 200; repeat: true">
                <div className="clubinfocard uk-card uk-card uk-card-body uk-flex-bottom">
                  <p className="clubofficers">
                  Hayden Lister
                  </p>
                </div>
                <div className="clubinfocard uk-card uk-card uk-card-body">
                  <p className="clubofficers">
                  Peter Quimby
                  </p>
                </div>
                <div className="clubinfocard uk-card uk-card uk-card-body">
                  <p className="clubofficers">
                  John Renouf
                  </p>
                </div>
                <div className="clubinfocard uk-card uk-card uk-card-body">
                  <p className="clubofficers">
                  Frank Wood
                  </p>
                </div>
              </div>
              <div className="uk-flex uk-flex-center uk-flex-wrap" uk-grid uk-scrollspy="cls: uk-animation-fade; target: .member; delay: 200; repeat: true">
                <div className="clubinfocard uk-card uk-card uk-card-body">
                  <p className="clubofficers">
                  Craig Marett
                  </p>
                </div>
              </div>
              <h4 id="clubtitle" className="clubofficers">Club Instructor/Coach:</h4>
              <div className="uk-flex uk-flex-center uk-flex-wrap" uk-grid uk-scrollspy="cls: uk-animation-fade; target: .member; delay: 200; repeat: true">
                <div className="clubinfocard uk-card uk-card uk-card-body uk-flex-bottom">
                  <p className="clubofficers">
                  Peter Quimby
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
export default John