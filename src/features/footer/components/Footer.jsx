import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import logoGray from '../../../assets/images/logo-gray.png'
import footerMenu from '../../../assets/menus/footer-menu'

import '../styles/Footer.css'

const Footer = () => {
  const renderFooterMenuItems = () => {
    return footerMenu.map((item, index) => {
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
        <a href="https://discord.gg/PuSgAPhHtQ" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={["fab", "discord"]} />
        </a>
      </div>
    )
  }

  return(
    <footer>
      <div className="footer">
        <div className="logo">
          <img src={logoGray} alt="Gray logo" />
        </div>
        <div className="menu">
          {renderFooterMenuItems()}
        </div>
        {renderSocialIcons()}        
        <div className="copyright">
          Designed & developed by <a href="https://coffeedzic.com" target="_blank" rel="noreferrer">Coffeedzic</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer