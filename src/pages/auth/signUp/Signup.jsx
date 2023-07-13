import React from 'react'
import {useState} from 'react'
import { useNavigate } from 'react-router-dom'

import {signupService} from "../../../services/auth.services"

function Signup() {

  const navigate = useNavigate()

  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errorMessage, setErrorMessage] = useState("")

  const handleUsernameChange= (event) => setUsername(event.target.value)
  const handleEmailChange= (event) => setEmail(event.target.value)
  const handlePasswordChange= (event) => setPassword(event.target.value)

  const handleSignup = async (event) => {
    event.preventDefault()

    const user = {
      username,
      email,
      password
    }

    try {
      await signupService(user)
      navigate("/login")
      
    } catch (error) {
      console.log(error.response.status)
      console.log(error.response.data.errorMessage)
      if (error.response.status === 400) {
        setErrorMessage(error.response.data.errorMessage)
      } else {
        navigate("/error")
      }
    }
  }
  


  return (
    <div className='page-title'>

      <div className='signup-title'>
        <h2>SIGN UP</h2>
      </div>

      <div className='signup-form-card'>

        <form className='signup-page-form' onSubmit={handleSignup}>

        <div className="username">
          <label className='sign-label-us' htmlFor="username">Username: </label>
          <input className='sign-input' type="text" name="username" onChange={handleUsernameChange} value={username} />
        </div>


        <div className="sign-email">
          <label className='sign-label-em' htmlFor="email">Email: </label>
          <input className='sign-input' type="email" name="email" onChange={handleEmailChange} value={email} />
        </div>
        

        <div className="sign-password">
          <label className='sign-label-ps' htmlFor="password">Password: </label>
          <input className='sign-input' type="password" name="password" onChange={handlePasswordChange} value={password} />
        </div>
        

        <div className="erros-messg-signup">
          {errorMessage ? <p>{errorMessage}</p> : null}
        </div>


        <div className="signup-button">
          <button className='sign-btn'><span>Sign Up</span></button>
        </div>

      </form>

      </div>
    
    </div>
  )
}

export default Signup