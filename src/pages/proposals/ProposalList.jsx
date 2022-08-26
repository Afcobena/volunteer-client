import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AddForm from '../../components/AddForm'

import {getProposalService} from "../../services/proposal.services"

import handleImg from "../../utils/selectImgCategory"

function ProposalList() {

  const navigate = useNavigate()
  const [allProposals, setAllProposals] = useState(null)
  const [isFetching, setIsFetching] = useState(true)
  const [isFormShowing, setIsFormShowing] = useState(false)

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


 /*  const filterProducts = (searchingFor) => {
    console.log(searchingFor);

    const filteredArr = allProposals.filter((eachProposal) => {
      return eachProposal.name.includes(searchingFor);
    }); */

    /* setVisibleProducts(filteredArr); */

    
  /* }; */

  const toggleFormShowing = () =>{
    setIsFormShowing(!isFormShowing)
  }



  if (isFetching === true) {
    return <h4>...Loading...Loading...Loading...</h4>
  }




console.log("ESTE ES EL HANDLE", handleImg)

  return (
    <div className="proposal-list">


      <div className='page-title'>
        <h2>TODAS LAS PROPUESTAS</h2>
      </div>

      <div className='add-form'>
        <button className='add' onClick={toggleFormShowing}>{isFormShowing === false ? <span className='add-ocul'>Añadir Propuesta</span>  : <span className='add-ocul'>Ocultar Formulario</span>} </button>
    {isFormShowing === true ? <AddForm  setIsFormShowing={setIsFormShowing} getListOfProposals={getListOfProposals}/> : null }
      </div>
      

      <div className='proposals-cards'>

      {allProposals.map((eachProposal) => {
          return (

            <ul className="cards">

              <li className='props-card-list'>
              <Link className='card' to={`/proposal/${eachProposal._id}/details`} >
                  <img className="card__image" src={handleImg(eachProposal.category)} alt="Category" />
                  <div className="card__overlay">
                    <div className="card__header">
                      
                      <div className="card__header-text">
                        <p className="card__title">{eachProposal.title} </p>           
                        <span className="card__status">{eachProposal.category}</span>
                      </div>
                    </div>
                    <p>{eachProposal.owner.username}</p>
                  </div>
                </Link>      
              </li>
  
            </ul>

          )
          })}

      </div>
    

    </div>
  )
}

export default ProposalList


