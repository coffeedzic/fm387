import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import '../../../assets/icons/icons.js'
import mainMenu from '../../../assets/menus/main-menu'
import logoBlue from '../../../assets/images/logo-blue.png'

import '../styles/WebHeader.css'

const WebHeader = () => {
  const renderMenuItems = () => {
    return mainMenu.map((item, index) => {
      return(
        <div
          className="item"
          key={index}
        >
          <Link to={item.url}>
            {item.name}
          </Link>
        </div>
      )      
    })
  }

  return(
    <div className="web-header">
      <div className="logo">
        <Link to="/">
          <img src={logoBlue} alt="FM387 Logo" />
        </Link>
      </div>
      <div className="menu">
        {renderMenuItems()}
        <div className="search">
          <FontAwesomeIcon icon="search" />
        </div>
      </div>      
    </div>
  )
}

export default WebHeader