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
          <p>Trenutno možete donirati jedino kupovinom Football Managera 2022 offline. Upute se nalaze na stranici 'Kupi FM'.</p>
        </main>
        <Widget />
      </div>      
    </div>
  )
}

export default Donacije