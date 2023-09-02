import React from 'react'
import './style.css'

const Menu = () => {
  return (
    <div className="Menu container">
      <div className="menu_inner">
        <a href="#" className="menu_link">
          Cherche <span>Susan</span>.
        </a>
        <p className="menu_text">Headhunters & Advisers</p>
      </div>
      <ul className="menu_nav">
        <li className="menu_nav-item">Our Offers</li>
        <li className="menu_nav-item">Spontaneous Application</li>
        <li className="menu_nav-item">En</li>
        <li className="menu_nav-item"></li>
      </ul>
    </div>
  )
}

export default Menu
