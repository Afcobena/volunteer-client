import React, {useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {useContext} from 'react'

import {AuthContext} from "../../context/auth.context"

import {getProfileService} from "../../services/proposal.services"

function Profile() {

    const navigate = useNavigate()
    const [allUserProposals, setAllUserProposals] = useState(null)
    const [allUserCollaborations, setAllUserCollaborations] = useState(null)
    const [isFetching, setIsFetching] = useState(true)

    const {isUserActive, isUserAdmin, authenticatedUser, user} = useContext(AuthContext)

    useEffect(() => {

    }, [])

    const getUserProposals = async () => {
        
        try {
            
        } catch (error) {
            navigate("/error")
        }
    }

    const getUserCollaborations = async () => {
        
        try {
            
        } catch (error) {
            navigate("/error")
        }
    }


    if (isUserAdmin ===  true) {
        return (
            <div>ADMIN</div>

        )
    } else {
        return (
            <div>PROFILE</div>
  )
    }

  
}



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
            <h3 key={eachProposal._id}>
              <Link to={`/proposal/${eachProposal._id}/details`} >{eachProposal.title}</Link>
            </h3>
            <p>{eachProposal.owner}</p>
            </div>
          )
        })}

        
      </div>
    
    </div>
  )
}

export default ProposalList