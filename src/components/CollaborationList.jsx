import React, {useEffect, useState} from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import {useContext} from 'react'

import {AuthContext} from "../context/auth.context"

import {getCollaborateDetailsService} from "../services/collaborate.services"

function Collaborate(props) {


  const {id} = useParams()
  console.log(id)

  const navigate = useNavigate()

  const {authenticatedUser} = useContext(AuthContext)

  const [allCollabs, setAllCollabs] = useState(null)
  const [isFetching, setIsFetching] = useState(true)

  useEffect(() => {
    getCollabDetails()
  }, [])

  const getCollabDetails = async () => {

    try {
      const response = await getCollaborateDetailsService(id)
      console.log("Respuesta Lista", response.data)

      setAllCollabs(response.data)
      setIsFetching(false)

      props.getDetails()
      authenticatedUser()

    } catch (error) {
      navigate("/error")
    }
  }

  console.log("ESTO SALE EN EL FRONT", allCollabs)


  if (isFetching === true) {
    return <h4>...Loading...Loading...Loading...</h4>
  }


  

  return (

    <div className="collabotation-list">

      <div>
          <h2>COLLABORATIONS</h2>
        </div>

        <div className='details-info'>
        
        {allCollabs.map((eachCollab) => {
            return (
                <div>
                    <p>{eachCollab.category}</p>
                    <p>{eachCollab.text}</p>
                    <p>{eachCollab.owner}</p>
                </div>
            )
        })}

        </div>

    </div>
  )
  
  }

  


export default Collaborate