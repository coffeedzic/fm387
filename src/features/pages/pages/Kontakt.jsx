import React from 'react'
import { Link } from 'react-router-dom'

import Widget from '../../widget/components/Widget'

const Kontakt = () => {
  const renderPageTitle = () => {
    return(
      <div className="page">
        <div className="page-title">
          Kontakt
        </div>
        <div className="page-nav">
          <Link to="/">
            Home
          </Link>
          <span>/</span>
          Kontakt
        </div>
      </div>
    )
  }

  return(
    <div className="main">
      {renderPageTitle()}
      <div className="main-flex">
        <main>
          <p>Kontakt stranica je trenutno u izradi.</p>

          <p>Možete nas kontaktirati na mail – info@fm387.com</p>
        </main>
        <Widget />
      </div>      
    </div>
  )
}

export default Kontakt