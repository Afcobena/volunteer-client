import React, {useState} from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import {useContext} from 'react'

import {AuthContext} from "../context/auth.context"

import {addCollaborateService} from "../services/collaborate.services"

function Collaborate(props) {

  const {id} = useParams()

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

      const responseCreate = await addCollaborateService(id, newCollaborate)
      console.log("Respuesta COLLABORA", responseCreate.data)
      props.getDetails()
      authenticatedUser()
      setCategory("")
      setText("")
      navigate("/proposals")
      
    } catch (error) {
      navigate("/error")
    }

  }
  

  if (isUserActive === true) {
    return (
    <div className='page-title'>

      <div className='collab-title'>
        <h2>Participa</h2>
      </div>

      <div className="form-new-proposal">

          <div className="category-add">
            <label className='addform-label-cat' htmlFor="category">Category: </label>
            <select className='addform-input' onChange={handleCategoryChange} value={category}>

            <option value="Selecciona">Selecciona</option>
            <option selected value="General">General</option>
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
          
          
          <div className="text-add">
            <label className='addform-label-cat' htmlFor="text">Text: </label>
            <input className='addform-input' type="text" name="text" onChange={handleTextChange} value={text} />
          </div>
          

          <div className="button-add">
            <button className='btn-add' onClick={handleSubmit}>Add</button>
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