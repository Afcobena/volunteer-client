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

  const {date, title, category, text, owner} = allProposals


  return (
    <div>

      <div>
        <h2>PROPOSALS</h2>
      </div>

      <div className="forumlario">
        <AddForm getListOfProposals={getListOfProposals} />
      </div>

      <h2>All Proposals</h2>

      <div className="proposal-list">
        

        {allProposals.map((eachProposal) => {
          return (
            <h3 key={eachProposal._id}>
              <Link to={`/proposal/${eachProposal._id}/details`} >{eachProposal.title}</Link>
            </h3>
          )
        })}

        
      </div>
    
    </div>
  )
}

export default ProposalList