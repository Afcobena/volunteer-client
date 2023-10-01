import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import {updateProposalService} from "../../../services/proposal.services"

function ProposalEdit() {

    const {id} = useParams()
    const navigate = useNavigate()

    const [date, setDate] = useState("")
    const [title, setTitle] = useState("")
    const [category, setCategory] = useState("")
    const [text, setText] = useState("")
  
    const handleDateChange= (event) => setDate(event.target.value)
    const handleTitleChange= (event) => setTitle(event.target.value)
    const handleCategoryChange= (event) => setCategory(event.target.value)
    const handleTextChange= (event) => setText(event.target.value)
  
  
    const handleEdit = async () => {
  
      const proposalObj = {
        date: date, 
        title: title, 
        category: category, 
        text: text,
      }
      try {

        await updateProposalService(id, proposalObj)
        navigate("/proposals")
        
      } catch (error) {
        navigate("/error")
      }
  
    }


  return (
    <div className='page-title'>

        <div className='collab-title'>
            <h2>Edit</h2>
        </div>

        <div className="form-new-proposal">

          <div className="category-add">
            <label className='addform-label-cat' htmlFor="date">Date: </label>
            <input className='addform-input' type="date" name="date" onChange={handleDateChange} value={date} />
          </div>
          
          <div className="category-add">
            <label className='addform-label-cat' htmlFor="title">Title: </label>
            <input className='addform-input' type="text" name="title" onChange={handleTitleChange} value={title} />
          </div>
          
          <div className="category-add">
            <label className='addform-label-cat' htmlFor="category">Category: </label>
            <select className='addform-input' onChange={handleCategoryChange} value={category}>

            <option value="Selecciona">Selecciona</option>
            <option value="Ambiental">Ambiental</option>
            <option value="Comunitario">Comunitario</option>
            <option value="Cultural">Cultural</option>
            <option value="Deportivo">Deportivo</option>
            <option value="Educativo">Educativo</option>
            <option value="Internacional">Internacional</option>
            <option value="Ocio">Ocio</option>
            <option value="ProtecciónCivil">Protección Civil</option>
            <option value="SocioSanitario">Socio Sanitario</option>
            <option value="Social">Social</option>

            </select>
          </div>
          
          
          <div className="text-add">
            <label className='addform-label-cat' htmlFor="text">Text: </label>
            <input className='addform-input' type="text" name="text" onChange={handleTextChange} value={text} />
          </div>
          
          
          <div className="button-add">
            <button className='btn-add' onClick={handleEdit}>Add</button>
          </div>

        </div>
    </div>
  )
}

export default ProposalEdit