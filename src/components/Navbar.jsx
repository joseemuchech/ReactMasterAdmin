import './navbar.scss'

import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="logo">
        <img src="../images/jm2.jpeg" alt="" />
        <span>JmAdmin</span>
      </div>
      <div className="icons">
        <img src="/search.svg" alt="" className="icon" />
        <img src="/app.svg" alt="" className="icon" />
        <img src="/expand.svg" alt="" className="icon" />
        
      <div className="notification">
        <img src="/notifications.svg" alt="" />
        <span>1</span>
      </div>
      <div className="user">
        <img src="../images/image7.jpeg" alt="" />
        <span>Jose</span>
      </div>
      <img src="/settings.svg" alt="" />

      </div>
    </div>
 
  )
}

export default Navbar