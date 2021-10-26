import React from 'react'
import { Link } from 'react-router-dom'

import Widget from '../../widget/components/Widget'

const Marketing = () => {
  const renderPageTitle = () => {
    return(
      <div className="page">
        <div className="page-title">
          Marketing
        </div>
        <div className="page-nav">
          <Link to="/">
            Home
          </Link>
          <span>/</span>
          Marketing
        </div>
      </div>
    )
  }

  return(
    <div className="main">
      {renderPageTitle()}
      <div className="main-flex">
        <main>
          <p>Trenutno nije moguće oglašavanje na našem portalu.</p>
        </main>
        <Widget />
      </div>      
    </div>
  )
}

export default Marketing