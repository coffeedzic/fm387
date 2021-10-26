import React from 'react'
import { Link } from 'react-router-dom'

import Widget from '../../widget/components/Widget'

const Disclaimer = () => {
  const renderPageTitle = () => {
    return(
      <div className="page">
        <div className="page-title">
          Disclaimer
        </div>
        <div className="page-nav">
          <Link to="/">
            Home
          </Link>
          <span>/</span>
          Disclaimer
        </div>
      </div>
    )
  }

  return(
    <div className="main">
      {renderPageTitle()}
      <div className="main-flex">
        <main>
          <h4>Bosanski</h4>
          <p>Ova web stranica nije potvrđena od strane Sports Interactivea ili SEGA-e te je namijenjena isključivo u svrhu zabave. Stajališta izrečena putem ove web stranice su stajališta pojedinaca koji sudjeluju u kreiranju sadržaja te ne moraju biti jednaka stajalištima Sports Interactivea ili SEGA-e. Službenu web stranicu Football Managera možete pronaći na web adresi <a href="https://footballmanager.com">footballmanager.com</a>, a službeni forum na adresi <a href="https://community.sigames.com">community.sigames.com</a>.</p>
          <p>Sports Interactive, službeni SI logo, screenshotovi generirani iz igre te sav ostali sadržaj povezan s Football Managerom su registrirani zaštitni znakovi i/ili materijal zaštićen autorskim pravom Sports Interactivea.</p>
          <p>SEGA i službeni SEGA logo su registrirani znakovi SEGA Corporation. Football Manager, Sports Interactive i službeni Sports Interactive logo su registrirani znakovi Sports Interactivea. Sva prava pridržana.</p>
          <h4>English</h4>
          <p>This site is not endorsed by Sports Interactive or SEGA and is intended for entertainment purposes only. The views expressed on this site are the views of the individual contributors and not those of Sports Interactive or SEGA. The official Football Manager site can be found at <a href="https://footballmanager.com">footballmanager.com</a> and the official forums can be found at <a href="https://community.sigames.com">community.sigames.com.</a></p>
          <p>Sports Interactive, the Sports Interactive logo, in-game generated images and any other Football Manager related items are registered trademarks and/or copyright material owned by Sports Interactive, or their respective trademark and copyright holders.</p>
          <p>SEGA and the SEGA logo are either registered trademarks or trademarks of SEGA Corporation. Football Manager, Sports Interactive and the Sports Interactive logo are either registered trademarks or trademarks of Sports Interactive Limited. All rights reserved.</p>
        </main>
        <Widget />
      </div>      
    </div>
  )
}

export default Disclaimer