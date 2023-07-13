import React, {useEffect, useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {useContext} from 'react'

import {AuthContext} from "../../../context/auth.context"

import {getProfileService/* , getProfileCollabsService */} from "../../../services/profile.services"
import UserCollabList from '../../../components/collaborations/userCollabList/UserCollabList'

function Profile() {

    const navigate = useNavigate()
    const [allUserProposals, setAllUserProposals] = useState(null)
/*     const [allUserCollaborates, setAllUserCollaborates] = useState(null) */
    const [isFetching, setIsFetching] = useState(true)

    const {isUserActive, isUserAdmin, authenticatedUser, user} = useContext(AuthContext)

    console.log("ESTO QUE EHH", allUserProposals)
    useEffect(() => {
      getUserProposals()
/*       getUserCollaborates() */
    }, [])


  const getUserProposals = async () => {

    try {

      const response = await getProfileService()
      setAllUserProposals(response.data)
      setIsFetching(false)
      authenticatedUser()
      
    } catch (error) {
      navigate("/error")
    }
  }

/*   const getUserCollaborates = async () => {

    try {
      const response = await getProfileCollabsService()
      setAllUserCollaborates(response.data)
      setIsFetching(false)
      authenticatedUser()

    } catch (error) {
      navigate("/error")
    }
  } */

  if (isFetching === true) {
    return <h4>...Loading...Loading...Loading...</h4>
  }


if (isUserActive === true) {
  return (
    <div className="profile-card">

      <div className="prof-header">
        {<h2>BIENVENIDO {user.username}</h2>}
      </div>

      <div className='prof-proposals-list-title'>
        <h2>Tus Propuestas</h2>
      </div>

      <div className="proposal-list">
        
        {allUserProposals.map((eachProposal) => {
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
              
              </div>

            
          )
        })}

      </div>

      <div className='prof-collabs-list-title'>
        <h3>Tus Collaboraciones</h3>
      </div>

      <div>
        <UserCollabList />
      </div>
    
    </div>
  )
}

  
}

export default Profile