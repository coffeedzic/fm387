import React from 'react'
import { Link } from 'react-router-dom'

import Widget from '../../widget/components/Widget'

const Kupi = () => {
  const renderPageTitle = () => {
    return(
      <div className="page">
        <div className="page-title">
          Kupi FM
        </div>
        <div className="page-nav">
          <Link to="/">
            Home
          </Link>
          <span>/</span>
          Kupi FM
        </div>
      </div>
    )
  }

  return(
    <div className="main">
      {renderPageTitle()}
      <div className="main-flex">
        <main>
          Kupnja FM-a je trenutno nedostupna
        </main>
        <Widget />
      </div>      
    </div>
  )
}

export default Kupi