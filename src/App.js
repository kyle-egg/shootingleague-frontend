import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './components/common/Home.js'
import NavBar from './components/common/NavBar.js'
import CouncilMembers from './components/common/CouncilMembers.js'
import Fixtures from './components/fixturesresults/Fixtures.js'
import Results from './components/fixturesresults/Results.js'
import CodeOfConduct from './components/common/CodeOfConduct.js'
import TeamProfile from './components/teams/TeamProfile.js'
import Teams from './components/teams/Teams.js'
import Archive from './components/common/Archive.js'
import ContactUs from './components/common/Contact.js'
import Footer from './components/common/Footer.js'
import Western from './components/teams/western.js'


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
          <Route path="/teams/:teamId" element={<TeamProfile />} />
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
