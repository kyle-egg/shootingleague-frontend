import HelierImage from '../../assets/images/hmrc-logo.png'
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
              <br></br>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2607.842073660357!2d-2.0949722000000004!3d49.18458330000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x159069f55b0a76c4!2zNDnCsDExJzA0LjUiTiAywrAwNSc0MS45Ilc!5e0!3m2!1sen!2sje!4v1659715033093!5m2!1sen!2sje" width="600" height="450"></iframe></div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Helier