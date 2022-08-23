import React, {useEffect, useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {useContext} from 'react'
import CollaborationList from '../../components/CollaborationList'

import {AuthContext} from "../../context/auth.context"

import {getProfileService} from "../../services/profile.services"

function Profile() {

    const navigate = useNavigate()
    const [allUserProposals, setAllUserProposals] = useState(null)
    const [isFetching, setIsFetching] = useState(true)

    const {isUserActive, isUserAdmin, authenticatedUser, user} = useContext(AuthContext)

    console.log("ESTO QUE EHH", allUserProposals)
    useEffect(() => {
      getUserProposals()
    }, [])


  const getUserProposals = async () => {

    try {

      const response = await getProfileService()
      console.log("PROFILE RESPONSE", response.data)

      setAllUserProposals(response.data)
      setIsFetching(false)

      authenticatedUser()
      /* user() */
      
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
        <h2>YOUR PROPOSALS</h2>
      </div>

      <div className="proposal-list">
        
        {allUserProposals.map((eachProposal) => {
          return (
            <div>
            <h3 key={eachProposal._id}>
              <Link to={`/proposal/${eachProposal._id}/details`} >{eachProposal.title}</Link>
            </h3>
            <p>{eachProposal.category}</p>
            <p>{eachProposal.date}</p>
            <p>{eachProposal.title}</p>
            </div>
          )
        })}

      </div>

      <div>
        <h2>YOUR COLLABORATIONS</h2>
      </div>

      {/* <div className="forumlario">
        <CollaborationList  />
      </div> */}
    
    </div>
  )
}

export default Profile