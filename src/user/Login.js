import React from 'react'
import { useNavigate } from 'react-router-dom'
import { setToken } from '../lib/auth'
import axios from 'axios'

// import { FadeInDiv } from '../gins/Gins'
// import { baseUrl } from '../../config'

function Login() {
  const navigate = useNavigate()
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
      const { data } = await axios.post('/api/auth/login/', formData)
      setToken(data.token)
      navigate('/teamcenter')
    } catch (err) {
      setIsError(true)
    }
  }

  return (
    // <FadeInDiv>
    <section>
      <div id="loginhero" className="uk-background-cover uk-height-large uk-panel uk-flex uk-flex-center uk-flex-middle">      
      </div>
      <div id="homeabout" className="uk-child-width-1-1@s" uk-grid>
        <div className="homecontainer">
          <div id="elevate" className="uk-background-cover uk-height-medium uk-panel uk-flex uk-flex-column uk-flex-center uk-flex-middle uk-text-center">
            <h3 id="abouttitle"className="uk-text-lead">LOGIN</h3>
            <br></br>  
            <div className="section">
              <form
                className="column"
                onSubmit={handleSubmit}
              >

<div class="uk-margin">
        <div class="uk-inline">
        <span class="uk-form-icon" uk-icon="icon: user"></span>
                    <input
                      className="uk-input logininput"
                      placeholder="USERNAME"
                      name="username"
                      onChange={handleChange}
                      aria-label="Not clickable icon"
                    />
                  </div>
                </div>
                <br></br>
                <div class="uk-margin">
        <div class="uk-inline">
        <span class="uk-form-icon" uk-icon="icon: lock"></span>
                    <input
                      type="password"
                      className="uk-input logininput"
                      placeholder="PASSWORD"
                      name="password"
                      onChange={handleChange}
                      aria-label="Not clickable icon"
                    />
                  </div>
                </div>
                {isError && (
                  <>
                    <p className="loginhelp">
              Your Username And/Or Password Are Incorrect<br></br>
              Please Try Again Or Contact Admin
                    </p>
                  </>
                )}
                <br></br>
                <div className="field">
                  <button type="submit" className="buttons uk-button uk-button-primary">
                  Log In!
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>     
      </div>
    </section>
    // </FadeInDiv>
  )
}

export default Login