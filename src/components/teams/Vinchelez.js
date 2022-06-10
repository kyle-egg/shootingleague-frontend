import VinchelezImage from '../../assets/images/logoplaceholder.png'

function Vinchelez() {

  return (
<div class="uk-section clubbackground">
    <div class="uk-container">
      <div id="club" class="uk-card uk-card-default clubcontainer">
        <div id="clubcrest" class="uk-card-media-top">
          <img src={VinchelezImage} uk-cover/>
        </div>
        <div>
          <div class="uk-card-body">
            <h3 class="uk-card-title">Vinchelez</h3>
            <h6 className="clubinfo"><a href="www.westernmrc.org.je">westernmrc.org.je</a></h6>
            <h6 className="clubinfo"><a href="mailto:westernmrc@gmail.com">westernmrc@gmail.com</a></h6>
            <h6 className="clubinfo"><a href="https://goo.gl/maps/avfNWuVuE35VYBbH6">La Rue de la Fosse, St Peter, Jersey, JE3 7AH</a></h6>
            <h6 className="clubinfo"><a href="tel:www.westernmrc.org.je">01534 483293</a></h6>
            <br></br>
            <h6 className="clubinfo"><strong>Operating Times:</strong> April to September</h6>
            <h6 className="clubinfo"><strong>Club & Practice Night(s):</strong> From 7:00pm Tuesday</h6>
            <h6 className="clubinfo"><strong>Team Shooting Night:</strong> From 7:00pm Thursday (or Friday)</h6>
            <br></br>
            <a href="https://www.facebook.com/westernmrc/" uk-icon="facebook"></a>
            <a href="https://www.instagram.com/westernmrc/" uk-icon="instagram"></a>
            
            <p className="clubblurb">The club was founded in 1907, during the time between the Boer War and the First World War, when the Government of the day actively promoted the formation of shooting clubs.   The club moved to its present site in 1968. Since then, the facilities have been improved and updated on a regular basis. The last major programme was a complete refurbishment of the clubhouse in 2015 which included the installation of electronic targets.</p>
            <h4 id="clubtitle" className="clubofficers">Club Officers</h4>
            <div class="uk-flex uk-flex-center uk-flex-wrap" uk-grid uk-scrollspy="cls: uk-animation-fade; target: .member; delay: 200; repeat: true">
              <div className="clubinfocard uk-card uk-card uk-card-body uk-flex-bottom">
                <p className="clubofficers">
                  Sarah Campion<br></br>
                  President
                </p>
              </div>
              <div class="clubinfocard uk-card uk-card uk-card-body">
                <p className="clubofficers">
                Paul Pinel<br></br>
                Vice President
                </p>
              </div>
              <div class="clubinfocard uk-card uk-card uk-card-body">
                <p className="clubofficers">
                Andy Hood<br></br>
                Vice President
                </p>
              </div>
              <div class="clubinfocard uk-card uk-card uk-card-body">
                <p className="clubofficers">
                R.Marshall<br></br>
                Treasurer
                </p>
              </div>
              <div class="clubinfocard uk-card uk-card uk-card-body">
                <p className="clubofficers">
                K. Armstrong<br></br>
                Club Secretary
                </p>
              </div>
            </div>
            <h4 id="clubtitle" className="clubofficers">Executive Committee</h4>
            <div class="clubinfocard uk-flex uk-flex-center uk-flex-wrap" uk-grid uk-scrollspy="cls: uk-animation-fade; target: .member; delay: 200; repeat: true">
              <div className="clubinfocard uk-card uk-card uk-card-body uk-flex-bottom">
                <p className="clubofficers">
                  Jack Pallot<br></br>
                  Competition Secretary
                </p>
              </div>
              <div class="clubinfocard uk-card uk-card uk-card-body">
                <p className="clubofficers">
                Tony Rees-Williams<br></br>
                Statistics Officer
                </p>
              </div>
              <div class="clubinfocard uk-card uk-card uk-card-body">
                <p className="clubofficers">
                Carol Le Moignan<br></br>
                Office
                </p>
              </div>
            </div>
            <div class="uk-flex uk-flex-center uk-flex-wrap" uk-grid uk-scrollspy="cls: uk-animation-fade; target: .member; delay: 200; repeat: true">
              <div class="clubinfocard uk-card uk-card uk-card-body">
                <p className="clubofficers">
                Richard Le Boutillier<br></br>
                Member
                </p>
              </div>
              <div class="clubinfocard uk-card uk-card uk-card-body">
                <p className="clubofficers">
                Barry Le Cheminant<br></br>
                Member
                </p>
              </div>
              <div class="clubinfocard uk-card uk-card uk-card-body">
                <p className="clubofficers">
                John Le Ruez<br></br>
                Member
                </p>
              </div>
              <div class="clubinfocard uk-card uk-card uk-card-body">
                <p className="clubofficers">
                Goetz Eggelhoefer<br></br>
                Member
                </p>
              </div>
            </div>
            <h4 id="clubtitle" className="clubofficers">Safeguarding Officer(s)</h4>
            <div class="uk-flex uk-flex-center uk-flex-wrap" uk-grid uk-scrollspy="cls: uk-animation-fade; target: .member; delay: 200; repeat: true">
              <div className="clubinfocard uk-card uk-card uk-card-body uk-flex-bottom">
                <p className="clubofficers">
                  Sarah Campion
                </p>
              </div>
              <div class="clubinfocard uk-card uk-card uk-card-body">
                <p className="clubofficers">
                Paul Pinel
                </p>
              </div>
            </div>
            <h4 id="clubtitle" className="clubofficers">Ammunitions Officer</h4>
            <div class="uk-flex uk-flex-center uk-flex-wrap" uk-grid uk-scrollspy="cls: uk-animation-fade; target: .member; delay: 200; repeat: true">
              <div className="clubinfocard uk-card uk-card uk-card-body uk-flex-bottom">
                <p className="clubofficers">
                  Barry Fossey
                </p>
              </div>
            </div>
            <h4 id="clubtitle" className="clubofficers">Delegates to JSSA</h4>
            <div class="uk-flex uk-flex-center uk-flex-wrap" uk-grid uk-scrollspy="cls: uk-animation-fade; target: .member; delay: 200; repeat: true">
              <div className="clubinfocard uk-card uk-card uk-card-body uk-flex-bottom">
                <p className="clubofficers">
                  Sarah Campion
                </p>
              </div>
              <div class="clubinfocard uk-card uk-card uk-card-body">
                <p className="clubofficers">
                Goetz Eggelhoefer
                </p>
              </div>
            </div>
            <h4 id="clubtitle" className="clubofficers">Range Officer(s)</h4>
            <div class="clubinfocard uk-flex uk-flex-center uk-flex-wrap" uk-grid uk-scrollspy="cls: uk-animation-fade; target: .member; delay: 200; repeat: true">
              <div className="clubinfocard uk-card uk-card uk-card-body uk-flex-bottom">
                <p className="clubofficers">
                  Jack Pallot
                </p>
              </div>
              <div class="clubinfocard uk-card uk-card uk-card-body">
                <p className="clubofficers">
                Tony Rees-Williams
                </p>
              </div>
              <div class="clubinfocard uk-card uk-card uk-card-body">
                <p className="clubofficers">
                Mo Le Mottee
                </p>
              </div>
              <div class="clubinfocard uk-card uk-card uk-card-body">
                <p className="clubofficers">
                Sarah Campion
                </p>
              </div>
            </div>
            <div class="uk-flex uk-flex-center uk-flex-wrap" uk-grid uk-scrollspy="cls: uk-animation-fade; target: .member; delay: 200; repeat: true">
              <div class="clubinfocard uk-card uk-card uk-card-body">
                <p className="clubofficers">
                Cliff Mallett
                </p>
              </div>
              <div class="clubinfocard uk-card uk-card uk-card-body">
                <p className="clubofficers">
                Paul Pinel
                </p>
              </div>
              <div class="clubinfocard uk-card uk-card uk-card-body">
                <p className="clubofficers">
                Geoff Michel
                </p>
              </div>
              <div class="clubinfocard uk-card uk-card uk-card-body">
                <p className="clubofficers">
                Richard Le Boutillier
                </p>
              </div>
            </div>
            <div class="uk-flex uk-flex-center uk-flex-wrap" uk-grid uk-scrollspy="cls: uk-animation-fade; target: .member; delay: 200; repeat: true">
              <div class="clubinfocard uk-card uk-card uk-card-body">
                <p className="clubofficers">
                Eric Payn
                </p>
              </div>
              <div class="clubinfocard uk-card uk-card uk-card-body">
                <p className="clubofficers">
                Jason Crump
                </p>
              </div>
              <div class="clubinfocard uk-card uk-card uk-card-body">
                <p className="clubofficers">
                Andy Le Cheminant
                </p>
              </div>
              <div class="clubinfocard uk-card uk-card uk-card-body">
                <p className="clubofficers">
                Andy Hood
                </p>
              </div>
            </div>
            <h4 id="clubtitle" className="clubofficers">Safeguarding Officer(s)</h4>
            <div class="uk-flex uk-flex-center uk-flex-wrap" uk-grid uk-scrollspy="cls: uk-animation-fade; target: .member; delay: 200; repeat: true">
              <div className="clubinfocard uk-card uk-card uk-card-body uk-flex-bottom">
                <p className="clubofficers">
                  Sarah Campion
                </p>
              </div>
              <div class="clubinfocard uk-card uk-card uk-card-body">
                <p className="clubofficers">
                Jack Pallot
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
export default Vinchelez