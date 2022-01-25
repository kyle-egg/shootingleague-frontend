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
            <li><a href="/news">News</a></li>
            <li><a href="/fixtures">Fixtures</a></li>
            <li><a href="/results">Results</a></li>
            <li><a href="/policies">Policies</a></li>
            <li><a href="/teams">Clubs</a></li>
            <li><a href="/archive">Archive</a></li>
            <li><a href="/contact">Contact Us</a></li>
        </ul>

    </div>
</nav>

  )
}

export default NavBar