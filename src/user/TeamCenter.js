import { userProfile, headers } from '../lib/api'
import React from 'react'
import { getUserId } from '../lib/auth'
import { useLocation } from 'react-router-dom'
// import { FadeInDiv } from '../gins/Gins'

function TeamCenter() {
  useLocation()
  const [profile, setProfile] = React.useState({})
  React.useEffect(() => {

    const getData = async () => {
      const res = await userProfile(getUserId(), headers())
      console.log(res)
      setProfile(res.data)
    }
    getData()
    
  }, [ ])
  

  return (
    // <FadeInDiv>
    <section className="hero is-fullheight" id="myprofile">
      <div className="hero-body" id="profile-body">
        <h1 id="profileheader">Members Area</h1>
        <h1 id="profileheader">Welcome Back {profile.username}!</h1>
        <button className="buttons">Edit Details</button>
      </div>
      <div>
      </div>
    </section>
    // </FadeInDiv>
  )
}
export default TeamCenter