import React from 'react'
import './user.scss'
import Single from '../components/Single'
import { singleUser } from '../data'

const User = () => {
  //fetch data and send to Single Component

  return (
    <div className="user">
       <Single  {...singleUser}/>
    </div>
  )
}

export default User