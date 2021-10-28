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
          <h4>E-mail</h4>

          <p>Kontaktirati nas možete putem našeg maila – info@fm387.com</p>
        </main>
        <Widget />
      </div>      
    </div>
  )
}

export default Kontakt