import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Collaborate from '../../components/Collaborate'

import {getProposalDetailsService, deleteProposalService} from "../../services/proposal.services"


function ProposalDetails() {

  const {id} = useParams()
  const navigate = useNavigate()

  const [detailsProposal, setDetailsProposal] = useState(null)
  const [isFetching, setIsFetching] = useState(true)


  useEffect(() => {
    getDetails()
  }, [])

  const getDetails = async () => {

    try {
      /* axios.get(`http://localhost:5005/api/proposal/${id}`) */
      const response = await getProposalDetailsService(id)
      console.log("Respuesta Details", response.data)

      setDetailsProposal(response.data)
      setIsFetching(false)

    } catch (error) {
      navigate("/error")
    }
  }


  
  const handleDelete = async () => {
    
    try {
      await deleteProposalService(id)
      navigate("/proposals")
      
    } catch (error) {
      navigate("/error")
    }
  }



  if (isFetching === true) {
    return <h4>...Loading...Loading...Loading...</h4>
  }


  const {date, title, category, text, owner} = detailsProposal

  return (
    <div>

      <div>
        <h2>PROPOSALS DETAILS</h2>
      </div>

      <div className='details-info'>
        <p>{date}</p>
        <h3>{title}</h3>
        <h5>{category}</h5>
        <p>{text}</p>
        <p>{owner}</p>
      </div>

      <div className="buttons">

        <div className="btn-edit">
          <Link to={`/proposal/${detailsProposal._id}/edit`}><button>Edit</button></Link> 
        </div>

        <div className="btn-delete">
          <button onClick={handleDelete} width="200">Delete</button>
        </div>

      </div>

      <div>
        <Collaborate getDetails={getDetails} />
      </div>
    
    </div>
  )
}

export default ProposalDetails