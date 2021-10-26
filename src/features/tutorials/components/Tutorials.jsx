import React from 'react'
import { Link } from 'react-router-dom'

import Widget from '../../widget/components/Widget'

const Tutorials = () => {
  const renderPageTitle = () => {
    return(
      <div className="page">
        <div className="page-title">
          Vodič
        </div>
        <div className="page-nav">
          <Link to="/">
            Home
          </Link>
          <span>/</span>
          Vodič
        </div>
      </div>
    )
  }

  return(
    <div className="main">
      {renderPageTitle()}
      <div className="main-flex">
        <main>
          Vodič je u pripremi.
        </main>
        <Widget />
      </div>      
    </div>
  )
}

export default Tutorials