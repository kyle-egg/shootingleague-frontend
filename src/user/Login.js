import React from 'react'
// import { useHistory } from 'react-router-dom'
import { setToken } from '../lib/auth'
import axios from 'axios'
// import { FadeInDiv } from '../gins/Gins'
// import { baseUrl } from '../../config'

function Login() {
  // const history = useHistory()
  const [formData, setFormData] = React.useState({
    username: '',
    password: '',
  })
  const [isError, setIsError] = React.useState(false)

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const { data } = await axios.post('/api/login/', formData)
      setToken(data.token)
      // history.push('/profile')
    } catch (err) {
      setIsError(true)
    }
  }

  return (
    // <FadeInDiv>
    <section className="hero is-fullheight" id="myprofile">
      <div className="hero-body" id="profile-body">
        <h1 id="checkoutheader">Login!</h1>
        <div className="section">
          <form
            className="column"
            onSubmit={handleSubmit}
          >
            <div className="field">
              <label className="label">Username:</label>
              <div className="control">
                <input
                  className="input"
                  placeholder="Username"
                  name="username"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Password:</label>
              <div className="control">
                <input
                  type="password"
                  className="input"
                  placeholder="Password"
                  name="password"
                  onChange={handleChange}
                />
              </div>
            </div>
            {isError && (
              <>
                <p className="help is-danger">
              Your E-mail And/Or Password Are Incorrect!<br></br>
              Please Contact Admin
                </p>
              </>
            )}
            <div className="field">
              <button type="submit" className="buttons">
              Log In!
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
    // </FadeInDiv>
  )
}

export default Login