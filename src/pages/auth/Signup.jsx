import React from 'react'
import {useState} from 'react'
import { useNavigate } from 'react-router-dom'

import {signupService} from "../../services/auth.services"

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
    <div>

      <div>
        <h2>SIGN UP</h2>
      </div>

      <div>

        <form onSubmit={handleSignup}>

        <div className="username">
          <label htmlFor="username">Username: </label>
          <input type="text" name="username" onChange={handleUsernameChange} value={username} />
        </div>

        <br />

        <div className="email">
          <label htmlFor="email">Email: </label>
          <input type="email" name="email" onChange={handleEmailChange} value={email} />
        </div>
        
        <br />

        <div className="password">
          <label htmlFor="password">Password: </label>
          <input type="password" name="password" onChange={handlePasswordChange} value={password} />
        </div>
        
        <br />

        <div className="erros-messg-signup">
          {errorMessage ? <p>{errorMessage}</p> : null}
        </div>
        <br />

        <div className="button-signup">
          <button>Sign Up</button>
        </div>

      </form>

      </div>
    
    </div>
  )
}

export default Signup