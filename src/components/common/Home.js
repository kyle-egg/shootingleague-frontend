import Image from '../../assets/images/JSSA-Logo-edit.png'

function Home() {

  return (
    <section>
      <div id="homehero" className="uk-background-cover uk-height-large uk-panel uk-flex uk-flex-center uk-flex-middle">      
      </div>
      <div id="homeabout" className="uk-child-width-1-1@s" uk-grid>
        <div className="homecontainer">
          <div id="elevate" className="uk-background-cover uk-height-medium uk-panel uk-flex uk-flex-column uk-flex-center uk-flex-middle uk-text-center">
            <img className="logohome" src= {Image}></img>
            <h3 id="abouttitle"className="uk-text-lead">WELCOME TO THE JSSA</h3>
            <br></br>
            <p className="paratext">The Jersey Small-bore Shooting Association (JSSA) seeks to foster and encourage the sport of target shooting in Jersey.<br></br>The JSSA is the governing body for small-bore and air rifle shooting clubs in Jersey. It sets the rules under which competitions are held.
            </p>
          </div>
        </div>     
      </div>
    </section>
  )
}
export default Home 