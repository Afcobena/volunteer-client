import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import {updateProposalService} from "../../services/proposal.services"

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
    <div>
        <div>
            <h2>Edit</h2>
        </div>

        <div>

        <label htmlFor="date">Date: </label>
        <input type="date" name="date" onChange={handleDateChange} value={date} />

        <br />

        <label htmlFor="title">Title: </label>
        <input type="text" name="title" onChange={handleTitleChange} value={title} />
        
        <br />

        <label htmlFor="category">Category: </label>
        <select onChange={handleCategoryChange} value={category}>

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
        
        <br />

        <label htmlFor="text">Text: </label>
        <input type="text" name="text" onChange={handleTextChange} value={text} />
        
        <br />

        <button onClick={handleEdit}>Add</button>

        </div>
    </div>
  )
}

export default ProposalEdit