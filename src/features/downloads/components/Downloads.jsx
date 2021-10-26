import React from 'react'
import { Link } from 'react-router-dom'

import Widget from '../../widget/components/Widget'

const Downloads = () => {
  const renderPageTitle = () => {
    return(
      <div className="page">
        <div className="page-title">
          Downloads
        </div>
        <div className="page-nav">
          <Link to="/">
            Home
          </Link>
          <span>/</span>
          Downloads
        </div>
      </div>
    )
  }

  return(
    <div className="main">
      {renderPageTitle()}
      <div className="main-flex">
        <main>
          Downloads je trenutno nedostupan
        </main>
        <Widget />
      </div>      
    </div>
  )
}

export default Downloads