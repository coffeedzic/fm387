import React from 'react'
import { Link } from 'react-router-dom'

import Widget from '../../widget/components/Widget'

const ONama = () => {
  const renderPageTitle = () => {
    return(
      <div className="page">
        <div className="page-title">
          O nama
        </div>
        <div className="page-nav">
          <Link to="/">
            Home
          </Link>
          <span>/</span>
          O nama
        </div>
      </div>
    )
  }

  return(
    <div className="main">
      {renderPageTitle()}
      <div className="main-flex">
        <main>
          Stranica o nama je trenutno u izradi.
        </main>
        <Widget />
      </div>      
    </div>
  )
}

export default ONama