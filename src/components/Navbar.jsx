import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>

      <div className='nav'>
        <Link className='links' to={"/"}>HOME</Link>
        <Link className='links' to={"/proposals"}>PROPOSALS</Link>
        <Link className='links' to={"/signup"}>SIGN UP</Link>
        <Link className='links' to={"/login"}>LOGIN</Link>

      </div>
    
    </div>
  )
}

export default Navbar