import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

import Widget from '../../widget/components/Widget'

const Liga = () => {
  const leagues = useSelector(state => state.baza.leagues)
  const teams = useSelector(state => state.baza.teams)
  const [league, setLeague] = useState({name: ''})
  const { id } = useParams()  

  useEffect(() => {
    setLeague(leagues.find(item => item.id == id))
  }, [leagues])

  

  const renderPageTitle = () => {
    return(
      <div className="page">
        <div className="page-title">
          {typeof league !== 'undefined' ? league.name : ''}
        </div>
        <div className="page-nav">
          <Link to="/">
            Home
          </Link>
          <span>/</span>
          <Link to="/baza">
            Baza
          </Link>
          <span>/</span>
          {typeof league !== 'undefined' ? league.name : ''}
        </div>
      </div>
    )
  }

  const renderTeams = () => {
    return teams.map((item, index) => {
      if(item.league == id) {
        return(
          <Link 
            to={'/tim/' + item.id}
            key={index}
            className="item"
          >
            <div className="image">
              <img src={`https://fm387.com/api/images/teams/${item.image}`} alt="" />
            </div>
            <div className="content">
              <div className="heading">
                {item.name}
              </div>
              <div className="desc">
                Transfer budget: {item.transfer} - Wage budget: {item.wage}
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
              Timovi
            </div>
            <div className="tier-items">
              {renderTeams()}
            </div>
          </div>
        </main>
        <Widget />
      </div>      
    </div>
  )
}

export default Liga