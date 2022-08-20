import React from 'react'
import {useContext} from 'react'

import {AuthContext} from "../../context/auth.context"

function Profile() {

    const {isUserActive, isUserAdmin, authenticatedUser, user} = useContext(AuthContext)

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

export default Profile