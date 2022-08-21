import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {useContext} from 'react'

import {AuthContext} from "../context/auth.context"

/* import {} from "../services/proposal.services" */

function Collaborate(props) {

  const navigate = useNavigate()

  const {isUserActive, authenticatedUser} = useContext(AuthContext)

  const [category, setCategory] = useState("")
  const [text, setText] = useState("")

  const handleCategoryChange= (event) => setCategory(event.target.value)
  const handleTextChange= (event) => setText(event.target.value)


  const handleSubmit = async () => {

    const newCollaborate = {
      category: category, 
      text: text,
    }
    try {

      await axios.post("http://localhost:5005/api/collaborate", newCollaborate)
      props.getDetails()
      authenticatedUser()
      navigate("/proposals")
      
    } catch (error) {
      navigate("/error")
    }

  }
  

  if (isUserActive === true) {
    return (
    <div>

    <div>
      <h2>New Proposal</h2>
    </div>

    <div className="form-new-proposal">

        <div className="date-add">
          
        </div>

        <br />

        <div className="category-add">
          <label htmlFor="category">Category: </label>
          <select onChange={handleCategoryChange} value={category}>

          <option value="General">General</option>
          <option value="Logistica">Logistica</option>
          <option value="Transporte">Transporte</option>
          <option value="Mano de obra">Mano de obra</option>
          <option value="Sanitarios">Sanitarios</option>
          <option value="Seguridad">Seguridad</option>
          <option value="Psicológicos">Psicológicos</option>
          <option value="Comida Civil">Comida Civil</option>
          <option value="Materiales">Materiales</option>
          <option value="Dinero">Dinero</option>

          </select>
        </div>
        
        <br />
        
        <div className="text-add">
          <label htmlFor="text">Text: </label>
          <input type="text" name="text" onChange={handleTextChange} value={text} />
        </div>
        
        <br />

        <div className="button-add">
          <button onClick={handleSubmit}>Add</button>
        </div>

    </div>

    </div>
  )
  } else {
    return (
      <h4>Login to add a New Proposal</h4>
    )
  }

  
}

export default Collaborate