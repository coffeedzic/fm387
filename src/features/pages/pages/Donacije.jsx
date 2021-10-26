import React from 'react'
import { Link } from 'react-router-dom'

import Widget from '../../widget/components/Widget'

const Donacije = () => {
  const renderPageTitle = () => {
    return(
      <div className="page">
        <div className="page-title">
          Donacije
        </div>
        <div className="page-nav">
          <Link to="/">
            Home
          </Link>
          <span>/</span>
          Donacije
        </div>
      </div>
    )
  }

  return(
    <div className="main">
      {renderPageTitle()}
      <div className="main-flex">
        <main>
          <p>Donacije su trenutno nedostupne.</p>
        </main>
        <Widget />
      </div>      
    </div>
  )
}

export default Donacije