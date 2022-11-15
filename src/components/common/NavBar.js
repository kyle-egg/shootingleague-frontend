import React from 'react'
import { useLocation } from 'react-router-dom'
import Pdf from '../../assets/documents/JSSAConstitution.pdf'
import Image from '../../assets/images/JSSA-Logo-edit.png'

function NavBar() {
  useLocation()

  return (
    <nav className="uk-navbar-container uk-margin" id='navbar' uk-navbar="mode: click">
      <div className="uk-navbar-left">
        <ul className="uk-navbar-nav">
          <li>
            <a className="uk-navbar-item uk-logo" href="/">
              <img className="logo" src= {Image}></img>
            </a>
          </li>
          <li className="uk-visible@l"><a className="navtext" id="navabout">About</a>
            <div className="uk-navbar-dropdown" id='navbar'>
              <ul className="uk-nav uk-navbar-dropdown-nav">
                <li className="navtext"><a id="navtext" href="/councilmembers">Overview</a></li>
                <li className="navtext"><a id="navtext" href= {Pdf}>JSSA Constitution</a></li>
              </ul>
            </div>
          </li>
          <li className="navtext uk-visible@l"><a id="navtext" href="/fixtures">Fixtures</a></li>
          <li className="navtext uk-visible@l"><a id="navtext" href="/results">Results</a></li>
          <li className="navtext uk-visible@l"><a id="navtext" href="/tables">Tables</a></li>
          <li className="navtext uk-visible@l"><a id="navpolicies">Policies</a>
            <div className="uk-navbar-dropdown" id='navbar'>
              <ul className="uk-nav uk-navbar-dropdown-nav uk-visible@l" uk-accordion>
                <li><a id="navpolicies" href="/codeofconduct">Code Of Conduct</a></li>
                <li><a id="navpolicies" href="https://thecpsu.org.uk/" target="_blank" rel="noreferrer">Child Protection In Sport</a></li>
                <li><a id="navpolicies" href="https://www.sportresolutions.com/" target="_blank" rel="noreferrer">Sport Resolutions</a></li>
                <li id="uk-nav-header">Doping</li>
                <li><a id="navpolicies" href="https://www.ukad.org.uk/" target="_blank" rel="noreferrer">UK Anti-Doping</a></li>
                <li><a id="navpolicies" href="https://www.ukad.org.uk/protect-your-sport" target="_blank" rel="noreferrer">Report Doping In Sport</a></li>
                <li><a id="navpolicies" href="https://www.nsra.co.uk/index.php/home/downloads/category/3-codes-and-guidance?download=1020:whistle-blowing-policy" target="_blank" rel="noreferrer"></a></li>
                <li id="uk-nav-header">Safeguarding</li>
                <li><a id="navpolicies" href="https://www.anncrafttrust.org/safeguarding-adults-sport-activity/" target="_blank" rel="noreferrer">Ann Craft Trust</a></li>
                <li><a id="navpolicies" href="https://safeguarding.je/" target="_blank" rel="noreferrer">Jersey Safeguarding Partnership Board</a></li>
              </ul>
            </div>
          </li>
          <li className="navtext uk-visible@l"><a id="navtext" href="/teams">Clubs</a></li>
          {/* <li className="navtext"><a id="navtext" href="/archive">Archive</a></li> */}
          <li className="navtext uk-visible@l"><a id="navtext" href="/contact">Contact Us</a></li>
        </ul>
      </div>
      <div className="uk-navbar-right">
        <ul className="uk-navbar-nav">
          <li className="uk-hidden@l">
            <img id="hamburger" src="https://img.icons8.com/ios/50/000000/menu--v4.png" className="uk-margin-small-right" type="button" uk-toggle="target: #offcanvas-nav-primary"/>            </li>
        </ul>
      </div>
    </nav>

  )
}

export default NavBar