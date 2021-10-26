import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import Widget from '../../widget/components/Widget'

import '../styles/Baza.css'

const Baza = () => {
  const leagues = useSelector(state => state.baza.leagues)

  const renderPageTitle = () => {
    return(
      <div className="page">
        <div className="page-title">
          Baza
        </div>
        <div className="page-nav">
          <Link to="/">
            Home
          </Link>
          <span>/</span>
          Baza
        </div>
      </div>
    )
  }

  const renderFirstTier = () => {
    return leagues.map((item, index) => {
      if(item.tier == 1) {
        return(
          <Link 
            to={'/liga/' + item.id}
            key={index}
            className="item"
          >
            <div className="image">
              <img src={`https://fm387.com/api/images/leagues/${item.image}`} alt=""/>
            </div>
            <div className="content">
              <div className="heading">
                {item.name}
              </div>
              <div className="desc">
                Broj timova: {item.teams}
              </div>
            </div>
          </Link>
        ) 
      }           
    })
  }

  const renderSecondTier = () => {
    return leagues.map((item, index) => {
      if(item.tier == 2) {
        return(
          <Link 
            to={'/liga/' + item.id}
            key={index}
            className="item"
          >
            <div className="image">
              <img src={`https://fm387.com/api/images/leagues/${item.image}`} alt="" />
            </div>
            <div className="content">
              <div className="heading">
                {item.name}
              </div>
              <div className="desc">
                Broj timova: {item.teams}
              </div>
            </div>
          </Link>
        )
      }      
    })
  }

  return(
    <div className="main">
      {renderPageTitle()}
      <div className="main-flex">
        <main>
          <div className="tier">
            <div className="tier-name">
              Prvi red takmičenja
            </div>
            <div className="tier-items">
              {renderFirstTier()}
            </div>
          </div>
          <div className="tier">
            <div className="tier-name">
              Drugi red takmičenja
            </div>
            <div className="tier-items">
              {renderSecondTier()}
            </div>
          </div>
        </main>
        <Widget />
      </div>      
    </div>
  )
}

export default Baza