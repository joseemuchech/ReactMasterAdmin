import './topBox.scss';
import { topDealUsers } from '../data'

import React from 'react'

const TopBox = () => {
  return (
    <div className="topbox">
        <h1>Top Deals</h1>

        <div className="list">
        { topDealUsers.map((user)=>(
            <div className="listItem" key={user.id}>
                <div className="user">
                    <img src={user.img} alt="" />
                    <div className="userTexts">
                        <span className="username">{user.username}</span>
                        <span className="email">{user.email}</span>
                    </div>
                </div>
                <span className="amount">${user.account}</span>

            </div>
        ))}
        </div>
    </div>
  )
}

export default TopBox