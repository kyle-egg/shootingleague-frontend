import React from 'react'
import { useLocation } from 'react-router-dom'
import Image from '../../assets/images/JSSA-Logo-edit.png'

function Footer() {
  useLocation()

  return (
    <div className="footer uk-flex-between uk-flex uk-flex-between uk-flex-middle">
      <ul className="uk-navbar-nav">
        <li >
          <a className="uk-navbar-item uk-logo" href="/">
            <img className="footerlogo" src= {Image}></img>
          </a>
        </li>
      </ul>
      <p className="footertext">© 2022 Jersey Small-bore Shooting Association (JSSA). All Rights Reserved.</p>
      <span><a className="footertext" href="/#"> Privacy Policy</a></span>
    </div>

  )
}

export default Footer