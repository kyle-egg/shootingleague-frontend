import React from 'react'
import { useNavigate } from 'react-router-dom'
import { setToken } from '../lib/auth'
import { loginUser } from '../lib/api'

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
      const { data } = await loginUser()
      setToken(data.token)
      navigate('/teamcenter')
    } catch (err) {
      setIsError(true)
    }
  }

  return (
    // <FadeInDiv>
    <section>
      <div id="loginhero" classNameName="uk-background-cover uk-height-large uk-panel uk-flex uk-flex-center uk-flex-middle">      
      </div>
      <div id="homeabout" classNameName="uk-child-width-1-1@s" uk-grid>
        <div classNameName="homecontainer">
          <div id="elevate" classNameName="uk-background-cover uk-height-medium uk-panel uk-flex uk-flex-column uk-flex-center uk-flex-middle uk-text-center">
            <h3 id="abouttitle"classNameName="uk-text-lead">LOGIN</h3>
            <br></br>  
            <div classNameName="section">
              <form
                classNameName="column"
                onSubmit={handleSubmit}
              >

                <div className="uk-margin">
                  <div className="uk-inline">
                    <span className="uk-form-icon" uk-icon="icon: user"></span>
                    <input
                      classNameName="uk-input logininput"
                      placeholder="USERNAME"
                      name="username"
                      onChange={handleChange}
                      aria-label="Not clickable icon"
                    />
                  </div>
                </div>
                <br></br>
                <div className="uk-margin">
                  <div className="uk-inline">
                    <span className="uk-form-icon" uk-icon="icon: lock"></span>
                    <input
                      type="password"
                      classNameName="uk-input logininput"
                      placeholder="PASSWORD"
                      name="password"
                      onChange={handleChange}
                      aria-label="Not clickable icon"
                    />
                  </div>
                </div>
                {isError && (
                  <>
                    <p classNameName="loginhelp">
              Your Username And/Or Password Are Incorrect<br></br>
              Please Try Again Or Contact Admin
                    </p>
                  </>
                )}
                <br></br>
                <div classNameName="field">
                  <button type="submit" classNameName="buttons uk-button uk-button-primary">
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