import Image from '../../assets/images/JSSA-Logo-edit.png'
import Pdf from '../../assets/documents/JSSAConstitution.pdf'

function SideNav() {
  return (
    <div id="offcanvas-nav-primary" uk-offcanvas="flip: true; overlay: true">
      <div className="uk-offcanvas-bar uk-flex uk-flex-column">
        <button id="closebutton" className="uk-offcanvas-close" type="button" uk-close>X</button>
        <ul className="uk-nav uk-nav-primary uk-nav-center uk-margin-auto-vertical">
          <a href="/"><img className="sidenavlogo" src={Image}/></a>
          <li className="uk-nav-divider"></li>
          <li className="navtext"><a id="navtext" href="/councilmembers">OVERVIEW</a></li>
          <li className="navtext"><a id="navtext" href="/fixtures">FIXTURES</a></li>
          <li className="navtext"><a id="navtext" href="/results">RESULTS</a></li>
          <li className="navtext"><a id="navtext" href="/tables">TABLES</a></li>
          <li className="navtext"><a id="navtext" href="/teams">CLUBS</a></li>
          <li className="navtext"><a id="navtext" href="/contact">CONTACT US</a></li>
          <li className="uk-nav-divider"></li>
          <li className="navtext"><a id="navtext" href= {Pdf}>JSSA Constitution</a></li>
          <li><a id="navpolicies" href="/codeofconduct">Code Of Conduct</a></li>
          <li><a id="navpolicies" href="https://thecpsu.org.uk/" target="_blank" rel="noreferrer">Child Protection In Sport</a></li>
          <li><a id="navpolicies" href="https://www.sportresolutions.com/" target="_blank" rel="noreferrer">Sport Resolutions</a></li>
          <li><a id="navpolicies" href="https://www.ukad.org.uk/" target="_blank" rel="noreferrer">UK Anti-Doping</a></li>
          <li><a id="navpolicies" href="https://www.ukad.org.uk/protect-your-sport" target="_blank" rel="noreferrer">Report Doping In Sport</a></li>
          <li><a id="navpolicies" href="https://www.nsra.co.uk/index.php/home/downloads/category/3-codes-and-guidance?download=1020:whistle-blowing-policy" target="_blank" rel="noreferrer"></a></li>
          <li><a id="navpolicies" href="https://www.anncrafttrust.org/safeguarding-adults-sport-activity/" target="_blank" rel="noreferrer">Ann Craft Trust</a></li>
          <li><a id="navpolicies" href="https://safeguarding.je/" target="_blank" rel="noreferrer">Jersey Safeguarding Partnership Board</a></li>
          <li className="uk-nav-divider"></li>
        </ul>
      </div>
    </div>
  )
}

export default SideNav