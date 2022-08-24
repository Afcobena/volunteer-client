import React, {useEffect, useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {useContext} from 'react'
/* import CollaborationList from '../../components/CollaborationList' */

import {AuthContext} from "../context/auth.context"

import {getProfileCollabsService} from "../services/profile.services"

function UserCollabList() {

    const navigate = useNavigate()
    const [allUserCollaborates, setAllUserCollaborates] = useState(null)
    const [isFetching, setIsFetching] = useState(true)

    const {isUserActive, isUserAdmin, authenticatedUser, user} = useContext(AuthContext)

    console.log("ESTO QUE EHH", allUserCollaborates)
    useEffect(() => {
        getUserCollaborates()
    }, [])


  const getUserCollaborates = async () => {

    try {
      const response = await getProfileCollabsService()
      setAllUserCollaborates(response.data)
      setIsFetching(false)
      authenticatedUser()

    } catch (error) {
      navigate("/error")
    }
  }

  if (isFetching === true) {
    return <h4>...Loading...Loading...Loading...</h4>
  }


if (isUserActive === true) {
  return (
    <div className="profile-card">

        <div className="proposal-list">
        
        {allUserCollaborates.map((eachProposal) => {
          return (

              <div className='prof-proposals-card'>
                
                <div className="prof-proposal-details">
                  <h3 key={eachProposal._id}>
                    <Link to={`/proposal/${eachProposal._id}/details`} >{eachProposal.title}</Link>
                  </h3>
                </div>

                <div className="prof-proposal-category">
                  <p>{eachProposal.category}</p>
                </div>

                <div className="prof-proposal-date">
                  <p>{eachProposal.date}</p>
                </div>

                <div className="prof-proposal-title">
                  <p>{eachProposal.title}</p>
                </div>
              
              </div>

            
          )
        })}

      </div> 

    
    </div>
  )
}

  
}

export default UserCollabList
