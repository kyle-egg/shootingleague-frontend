import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './components/common/Home.js'
import NavBar from './components/common/NavBar.js'
import CouncilMembers from './components/common/CouncilMembers.js'
import Fixtures from './components/fixturesresults/Fixtures.js'
import Results from './components/fixturesresults/Results.js'
import CodeOfConduct from './components/common/CodeOfConduct.js'
import Teams from './components/teams/Teams.js'
import Archive from './components/common/Archive.js'
import ContactUs from './components/common/Contact.js'
import Footer from './components/common/Footer.js'
import Brelade from './components/teams/Stbrelade.js'
import Grouville from './components/teams/Grouville.js'
import Helier from './components/teams/Sthelier.js'
import John from './components/teams/Stjohn.js'
import Lawrence from './components/teams/Stlawrence.js'
import Leoville from './components/teams/Leoville.js'
import Vinchelez from './components/teams/Vinchelez.js'
import Guernsey from './components/teams/Guernsey.js'
import Western from './components/teams/Western.js'


function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/councilmembers" element={<CouncilMembers />} />
          <Route path="/fixtures" element={<Fixtures />} />
          <Route path="/results"  element={<Results />} />
          <Route path="/CodeOfConduct"  element={<CodeOfConduct />} />
          <Route path="/teams/stbrelade" element={<Brelade />} />
          <Route path="/teams/grouville" element={<Grouville />} />
          <Route path="/teams/sthelier" element={<Helier />} />
          <Route path="/teams/stjohn" element={<John />} />
          <Route path="/teams/stlawrence" element={<Lawrence />} />
          <Route path="/teams/leoville" element={<Leoville />} />
          <Route path="/teams/vinchelez" element={<Vinchelez />} />
          <Route path="/teams/guernsey" element={<Guernsey />} />
          <Route path="/teams/western" element={<Western />} />
          <Route path="/teams" element={<Teams/>} />
          <Route path="/archive" element={<Archive />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
