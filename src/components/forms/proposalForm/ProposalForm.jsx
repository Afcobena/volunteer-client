/* import axios from 'axios' */
import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {useContext} from 'react'

import {AuthContext} from "../../../context/auth.context"

import {addProposalService} from "../../../services/proposal.services"

function ProposalForm(props) {

  const navigate = useNavigate()

  const {isUserActive, /* isUserAdmin,  */authenticatedUser} = useContext(AuthContext)

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
      await addProposalService(newProposal)
      props.getListOfProposals()
      authenticatedUser()
      setDate("")
      setTitle("")
      setCategory("")
      setText("")
      
    } catch (error) {
      navigate("/error")
    }

  }

  if (isUserActive === true) {
    return (
    <div className='addform-page'>

      <div className='page-title'>
        <h2>New Proposal</h2>
      </div>

      <div className="addform-card">

        <div className="form-new-proposal">

          <div className="date-add">
            <label className='addform-label-dat' htmlFor="date">Date: </label>
            <input className='addform-input' type="date" name="date" onChange={handleDateChange} value={date} />
          </div>

          <br />

          <div className="title-add">
            <label className='addform-label-ttl' htmlFor="title">Title: </label>
            <input className='addform-input' type="text" name="title" onChange={handleTitleChange} value={title} />
          </div>
          
          <br />

          <div className="category-add">
            <label className='addform-label-cat' htmlFor="category">Category: </label>
            <select className='addform-input' onChange={handleCategoryChange} value={category}>
            <option value="Seleccional">Selecciona</option>

            <option value="Environmental">Environmental</option>
            <option value="Community">Community</option>
            <option value="Cultural">Cultural</option>
            <option value="Sports">Sports</option>
            <option value="Educational">Educational</option>
            <option value="Leisure">Leisure</option>
            <option value="Civil Protection">Civil Protection</option>
            <option value="Social Healthcare">Social Healthcare</option>
            <option value="Social Events">Social Events</option>

            </select>
          </div>
          
          <br />
          
          <div className="text-add">
            <label className='addform-label-txt' htmlFor="text">Text: </label>
            <input className='addform-input' type="text" name="text" onChange={handleTextChange} value={text} />
          </div>
          
          <br />

          <div className="button-add">
            <button className='btn-add' onClick={handleSubmit}>Add</button>
          </div>

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

export default ProposalForm