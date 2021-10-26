import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import '../../../assets/icons/icons.js'
import mainMenu from '../../../assets/menus/main-menu'
import logoBlue from '../../../assets/images/logo-blue.png'
import discord from '../../../assets/images/discord.png'

import '../styles/MobileHeader.css'

const MobileHeader = () => {
  const [menuOpened, setMenuOpened] = useState(false)
  
  const renderMobileMenuItems = () => {
    return mainMenu.map((item, index) => {
      return(
        <div 
          className="item"
          key={index}
        >
          <Link to={item.url} onClick={() => setMenuOpened(false)}>
            {item.name}
          </Link>
        </div>
      )
    })
  }

  const renderSocialIcons = () => {
    return(
      <div className="social-icons">
        <a href="https://www.facebook.com/fm387" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={["fab", "facebook"]} />
        </a>
        <a href="https://www.instagram.com/footballmanager387" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={["fab", "instagram"]} />
        </a>
        <a href="https://www.youtube.com/channel/UC4f6sfYi_bEXSlXIaxJxEdw" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={["fab", "youtube"]} />
        </a>
      </div>
    )
  }

  const renderMobileMenu = () => {
    return(
      <div className={menuOpened ? "mobile-menu active" : "mobile-menu"}>
        <div className="close-menu">
          <FontAwesomeIcon 
            icon="times"
            onClick={() => setMenuOpened(false)} 
          />
        </div>
        <div className="menu">
          {renderMobileMenuItems()}
        </div>
        <div className="footer">
          <div className="discord-logo">
            <a href="https://discord.gg/PuSgAPhHtQ" target="_blank" rel="noreferrer">
              <img src={discord} alt="Discord logo" />
            </a>
          </div>
          {renderSocialIcons()}
        </div>        
      </div>
    )
  }

  return(
    <div className="mobile-header">
      <div className="burger">
        <FontAwesomeIcon 
          icon="bars"
          onClick={() => setMenuOpened(true)}
        />
      </div>
      <div className="logo">
        <Link to="/">
          <img src={logoBlue} alt="FM387 Logo" />
        </Link>
      </div>
      <div className="search">
        <FontAwesomeIcon icon="search" />
      </div>
      {renderMobileMenu()}      
    </div>
  )
}

export default MobileHeader