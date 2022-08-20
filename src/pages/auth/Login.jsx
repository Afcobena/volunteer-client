import React, { useContext } from 'react'
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'

import {loginService} from "../../services/auth.services"

import { AuthContext } from "../../context/auth.context";

function Login() {

  const navigate = useNavigate()

  const {authenticatedUser} = useContext(AuthContext)

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errorMessage, setErrorMessage] = useState("")

  const handleEmailChange= (event) => setEmail(event.target.value)
  const handlePasswordChange= (event) => setPassword(event.target.value)

  const handleLogin = async (event) => {
    event.preventDefault()

    const user = {
      email,
      password
    }

    try {
      const response = await loginService(user)
      console.log(response.data)

      const authToken = response.data.authToken
      localStorage.setItem("authToken", authToken)
      authenticatedUser()

      

      navigate("/proposals")
      
    } catch (error) {
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
        <h2>LOGIN</h2>
      </div>

      <div>

        <form onSubmit={handleLogin}>

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
          <button>Login</button>
        </div>

      </form>

      </div>
    
    </div>
  )
}

export default Login