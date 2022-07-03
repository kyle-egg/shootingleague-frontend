import HelierImage from '../../assets/images/logoplaceholder.png'
function Helier() {

  return (
    <div className="uk-section clubbackground">
      <div className="uk-container">
        <div id="club" className="uk-card uk-card-default clubcontainer">
          <div id="clubcrest" className="uk-card-media-top">
            <img src={HelierImage} uk-cover/>
          </div>
          <div>
            <div className="uk-card-body">
              <h3 className="uk-card-title">St. Helier</h3>
              <h6 className="clubinfo"><a href="mailto:svjelley@gmail.com">svjelley@gmail.com</a></h6>
              <h6 className="clubinfo"><a href="mailto:davidlequesne@hotmail.com">davidlequesne@hotmail.com</a></h6>
              <h6 className="clubinfo"><a href="https://goo.gl/maps/hUrcfyWv8S9H3U5e6">Victoria College Range, Mont Millias			</a></h6>
              <h6 className="clubinfo"><a href="tel:07797925055">07797 925055</a></h6>
              <br></br>
              <h6 className="clubinfo"><strong>Operating Times:</strong> September to March</h6>
              <h6 className="clubinfo"><strong>Club & Practice Night(s):</strong> Monday evenings</h6>
              <br></br>
              <h4 id="clubtitle" className="clubofficers">Club Officers</h4>
              <div className="uk-flex uk-flex-center uk-flex-wrap" uk-grid uk-scrollspy="cls: uk-animation-fade; target: .member; delay: 200; repeat: true">
                <div className="clubinfocard uk-card uk-card uk-card-body uk-flex-bottom">
                  <p className="clubofficers">
                  D. Le Quesne<br></br>
                  President
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
export default Helier