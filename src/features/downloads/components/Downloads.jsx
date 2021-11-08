import React from 'react'
import { Link } from 'react-router-dom'

import downloads from '../../../assets/downloads/downloads'
import graphics from '../../../assets/downloads/graphics'
import Widget from '../../widget/components/Widget'

import '../styles/Downloads.css'

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

  const renderDownloads = () => {
    return downloads.map((item, index) => {      
      return(
        <a
          href={item.url}
          key={index}
          className="item"
        >
          {item.name}
        </a>
      )         
    })
  }

  const renderGraphics = () => {
    return graphics.map((item, index) => {      
      return(
        <a
          href={item.url}
          key={index}
          className="item"
        >
          {item.name}
        </a>
      )         
    })
  }

  return(
    <div className="main">
      {renderPageTitle()}
      <div className="main-flex">
        <main>
          <div className="dl">
            <div className="dl-name">
              Editor data
            </div>
            <div className="dl-items">
              {renderDownloads()}
            </div>
          </div>
          <div className="dl">
            <div className="dl-name">
              Grafika
            </div>
            <div className="dl-items">
              {renderGraphics()}
            </div>
          </div>
        </main>
        <Widget />
      </div>      
    </div>
  )
}

export default Downloads