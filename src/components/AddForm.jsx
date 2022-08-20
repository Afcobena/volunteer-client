/* import axios from 'axios' */
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import {addProposalService} from "../services/proposal.services"

function AddForm(props) {

  const navigate = useNavigate()

  const [date, setDate] = useState("")
  const [title, setTitle] = useState("")
  const [category, setCategory] = useState("")
  const [text, setText] = useState("")

  const handleDateChange= (event) => setDate(event.target.value)
  const handleTitleChange= (event) => setTitle(event.target.value)
  const handleCategoryChange= (event) => setCategory(event.target.value)
  const handleTextChange= (event) => setText(event.target.value)


  const handleSubmit = async () => {

    const newProposal = {
      date: date, 
      title: title, 
      category: category, 
      text: text,
    }
    try {
      /* axios.post("http://localhost:5005/api/proposal", newProposal) */
      await addProposalService(newProposal)
      props.getListOfProposals()
      
    } catch (error) {
      navigate("/error")
    }

  }

  return (
    <div>

    <div>
      <h2>New Proposal</h2>
    </div>

    <div className="form-new-proposal">

        <div className="date-add">
          <label htmlFor="date">Date: </label>
          <input type="date" name="date" onChange={handleDateChange} value={date} />
        </div>

        <br />

        <div className="title-add">
          <label htmlFor="title">Title: </label>
          <input type="text" name="title" onChange={handleTitleChange} value={title} />
        </div>
        
        <br />

        <div className="category-add">
          <label htmlFor="category">Category: </label>
          <select onChange={handleCategoryChange} value={category}>

          <option value="Ambiental">Ambiental</option>
          <option value="Comunitario">Comunitario</option>
          <option value="Cultural">Cultural</option>
          <option value="Deportivo">Deportivo</option>
          <option value="Educativo">Educativo</option>
          <option value="Internacional">Internacional</option>
          <option value="Ocio">Ocio</option>
          <option value="Protección Civil">Protección Civil</option>
          <option value="Socio Sanitario">Socio Sanitario</option>
          <option value="Social">Social</option>

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
}

export default AddForm