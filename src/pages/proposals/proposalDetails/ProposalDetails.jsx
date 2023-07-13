import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Collaborate from '../../../components/collaborations/collaborate/Collaborate'
import CollaborationList from '../../../components/collaborations/collaborationList/CollaborationList'
import {useContext} from 'react'

import {AuthContext} from "../../../context/auth.context"


import {getProposalDetailsService, deleteProposalService} from "../../../services/proposal.services"


function ProposalDetails() {

  const {id} = useParams()
  const navigate = useNavigate()

  const {/* isUserActive, isUserAdmin, authenticatedUser,  */user} = useContext(AuthContext)

  const [detailsProposal, setDetailsProposal] = useState(null)
  const [isFetching, setIsFetching] = useState(true)


  useEffect(() => {
    getDetails()
  }, [])

  const getDetails = async () => {

    try {

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

  console.log("AQUI QUE HAY", owner)
  console.log("AQUI QUE HAY en el otro", user._id)

  return (
    <div className='profile-card'>

      <div className="proposal-list">

        <div className='page-title'>
          <h2>PROPOSALS DETAILS</h2>
        </div>

        <div className='prof-proposals-card'>

          <div className="details-proposal">
          <p>{date}</p>
          </div>

          <div className="details-title">
          <h3>{title}</h3>
          </div>

          <div className="details-category">
          <h5>{category}</h5>
          </div>

          <div className="details-text">
          <p>{text}</p>
          </div>

          <div className="details-owner">
          <p>{owner.username}</p>
          </div>

        </div>
      </div>

      <div className="buttons">

        <div className="signup-button">
        {user._id === detailsProposal.owner._id ? <Link to={`/proposal/${detailsProposal._id}/edit`}><button className='sign-btn'>Edit</button></Link> : null}
        </div>

        <div className="signup-button">
          {user._id === detailsProposal.owner._id ? <button className='sign-btn' onClick={handleDelete} width="200">Delete</button> : null}
        </div>

      </div>

      <div>
        <Collaborate getDetails={getDetails} />
      </div>

      <div>
        <CollaborationList getDetails={getDetails} />
      </div>
    
    </div>
  )
}

export default ProposalDetails