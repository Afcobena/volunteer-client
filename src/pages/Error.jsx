import React from 'react'
import { Link } from 'react-router-dom'
import Burroimgg from "../assets/imagessrc/burro.png"

function Error() {
  return (
    <div className='page-title'>

      <div className='error'>
        <h2>ERROR</h2>
        <p>Parece que estás más perdido que un burro en un garage... <br /> vuelve a <Link to={"/"} >Home</Link> oara seguir navegando.</p>

        <img src={Burroimgg} alt="" />
      </div>
      
    
    </div>
  )
}

export default Error