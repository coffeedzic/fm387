import React from 'react'
import { Link } from 'react-router-dom'

import Widget from '../../widget/components/Widget'

const Tools = () => {
  const renderPageTitle = () => {
    return(
      <div className="page">
        <div className="page-title">
          Alati
        </div>
        <div className="page-nav">
          <Link to="/">
            Home
          </Link>
          <span>/</span>
          Alati
        </div>
      </div>
    )
  }

  return(
    <div className="main">
      {renderPageTitle()}
      <div className="main-flex">
        <main>
          Alati još nisu dostupni.
        </main>
        <Widget />
      </div>      
    </div>
  )
}

export default Tools