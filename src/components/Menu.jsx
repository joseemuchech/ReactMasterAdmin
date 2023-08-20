import React from 'react';
import './menu.scss'
import { Link } from 'react-router-dom';
import { menu } from "../data";


const Menu = () => {
  return (
    <div className="menu">

      {menu.map((item)=>(
      <div className="item" key={item.id}>
        <span className="title">{item.title}</span>

        {item.listItem.map((listItems)=>(
        <Link to={listItems.url} className="listItem" key={listItems.id}>
        <img src={listItems.icons} alt="" />
        <span className="listItemTitle">{listItems.title}</span>
        </Link>
        ))}

      </div>
      ))}
    </div>
  );
};

export default Menu