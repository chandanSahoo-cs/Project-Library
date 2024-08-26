import React from 'react'
import UserContext from '../context/userContext'
import {useContext} from 'react'
function Profile() {
  const {value}= useContext(UserContext)
  if(!value) return <div> Please Login</div>
  return <div> Welcome {value.username}</div>
}

export default Profile