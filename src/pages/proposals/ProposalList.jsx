import userEvent from '@testing-library/user-event'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AddForm from '../../components/AddForm'

import {getProposalService} from "../../services/proposal.services"

function ProposalList() {

  const navigate = useNavigate()
  const [allProposals, setAllProposals] = useState(null)
  const [isFetching, setIsFetching] = useState(true)


  useEffect(() => {
    getListOfProposals()
  }, [])


  const getListOfProposals = async () => {

    try {

      const response = await getProposalService()
      console.log("Respuesta Lista", response.data)

      setAllProposals(response.data)
      setIsFetching(false)
      
    } catch (error) {
      navigate("/error")
    }
  }



  if (isFetching === true) {
    return <h4>...Loading...Loading...Loading...</h4>
  }


  return (
    <div>

      <div className='page-title'>
        <h2>PROPOSALS</h2>
      </div>

      <div className="forumlario">
        <AddForm getListOfProposals={getListOfProposals} />
      </div>

      <h2>Proposals List</h2>

      <div className="proposal-list">
        

        {allProposals.map((eachProposal) => {
          return (
            
            <div>

              <div className="card-image">
                <img src="" alt="" />
              </div>
            <h3 key={eachProposal._id}>
              <Link to={`/proposal/${eachProposal._id}/details`} >{eachProposal.title}</Link>
            </h3>

            </div>

          )
        })}

        
      </div>
    
    </div>
  )
}

export default ProposalList