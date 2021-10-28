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
          <p>FM387 je bosanskohercegovačka zajednica igrača Football Managera osnovana početkom 2021. godine.</p>

          <p>Trenutno brojimo preko 200 članova na forumu i preko 50 na discordu. Iz dana u dan ova brojka raste.</p>
        </main>
        <Widget />
      </div>      
    </div>
  )
}

export default ONama