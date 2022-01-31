import React from 'react'
import { useLocation } from 'react-router-dom'
import Pdf from '../../assets/documents/JSSAConstitution.pdf'

function NavBar() {
  useLocation()

  return (
<nav className="uk-navbar-container uk-margin" uk-navbar="mode: click">
    <div className="uk-navbar-left">

        <ul className="uk-navbar-nav">
            <li><a href="/">Home</a></li>
            <li><a>About</a>
                <div class="uk-navbar-dropdown">
                    <ul class="uk-nav uk-navbar-dropdown-nav">
                        <li><a href= {Pdf}>JSSA Constitution</a></li>
                        <li><a href="/councilmembers">Council Members</a></li>
                    </ul>
                </div>
            </li>
            <li><a href="/fixtures">Fixtures</a></li>
            <li><a href="/results">Results</a></li>
            <li><a>Policies</a>
                <div class="uk-navbar-dropdown">
                    <ul class="uk-nav uk-navbar-dropdown-nav" uk-accordion>
                        <li><a href="/codeofconduct">Code Of Conduct</a></li>
                        <li class="uk-nav-divider"></li>
                        <li><a href="https://thecpsu.org.uk/" target="_blank">Child Protection In Sport</a></li>
                        <li><a href="https://www.sportresolutions.com/" target="_blank">Sport Resolutions</a></li>
                        <li class="uk-nav-header">Doping</li>
                        <li><a href="https://www.ukad.org.uk/" target="_blank">UK Anti-Doping</a></li>
                        <li><a href="https://www.ukad.org.uk/protect-your-sport" target="_blank">Report Doping In Sport</a></li>
                        <li><a href="https://www.nsra.co.uk/index.php/home/downloads/category/3-codes-and-guidance?download=1020:whistle-blowing-policy" target="_blank"></a></li>
                        <li class="uk-nav-header">Safeguarding</li>
                        <li><a href="https://www.anncrafttrust.org/safeguarding-adults-sport-activity/" target="_blank">Ann Craft Trust</a></li>
                        <li><a href="https://safeguarding.je/" target="_blank">Jersey Safeguarding Partnership Board</a></li>
                    </ul>
                </div>
            </li>
            <li><a href="/teams">Clubs</a></li>
            <li><a href="/archive">Archive</a></li>
            <li><a href="/contact">Contact Us</a></li>
        </ul>

    </div>
</nav>

  )
}

export default NavBar