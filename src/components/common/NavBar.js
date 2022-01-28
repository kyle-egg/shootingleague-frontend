import React from 'react'
import { useLocation } from 'react-router-dom'

function NavBar() {
  useLocation()

  return (
<nav className="uk-navbar-container uk-margin" uk-navbar="mode: click">
    <div className="uk-navbar-left">

        <ul className="uk-navbar-nav">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/fixtures">Fixtures</a></li>
            <li><a href="/results">Results</a></li>
            <li><a>Policies</a>
            <div class="uk-navbar-dropdown">
                    <ul class="uk-nav uk-navbar-dropdown-nav">
                        <li><a href="/codeofconduct">Code Of Conduct</a></li>
                        <li><a href="#">Safeguarding Policy</a></li>
                        <li><a href="#">NSRA</a></li>
                        <li><a href="#">UKAID</a></li>
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