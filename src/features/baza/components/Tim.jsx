import React, { useEffect, useState} from 'react'
import { Link, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

import Widget from '../../widget/components/Widget'

import '../styles/Tim.css'

const Tim = () => {
  const leagues = useSelector(state => state.baza.leagues)
  const teams = useSelector(state => state.baza.teams)
  const players = useSelector(state => state.baza.players)
  const [league, setLeague] = useState({name: '', id: ''})
  const [team, setTeam] = useState({name: ''})
  const { id } = useParams()  

  useEffect(() => {
    setTeam(teams.find(item => item.id == id))
    if(typeof team !== 'undefined') {
      setLeague(leagues.find(item => item.id == team.league))
    }    
  }, [teams, team])

  const renderPageTitle = () => {
    return(
      <div className="page">
        <div className="page-title">
          {typeof team !== 'undefined' ? team.name : ''}
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
          <Link to={typeof league !== 'undefined' ? "/liga/" + league.id : ""}>
            {typeof league !== 'undefined' ? league.name : ''}
          </Link>
          <span>/</span>
          {typeof team !== 'undefined' ? team.name : ''}
        </div>
      </div>
    )
  }

  const renderGk = () => {
    return players.map((item, index) => {
      if(item.category == 0 && typeof team !== 'undefined') {
        if(item.club == team.id) {
          return(
            <div className="item">
              <div className="image">
                <img src={`https://fm387.com/api/images/players/${item.image}`} alt="" />
              </div>
              <div className="info">
                {item.name + ' / ' + item.age}
              </div>
            </div>
          )
        }
      }      
    })
  }

  const renderDf = () => {
    return players.map((item, index) => {
      if(item.category == 1 && typeof team !== 'undefined') {
        if(item.club == team.id) {
          return(
            <div className="item">
              <div className="image">
                <img src={`https://fm387.com/api/images/players/${item.image}`} alt="" />
              </div>
              <div className="info">
                {item.name + ' / ' + item.age}
              </div>
            </div>
          )
        }
      }      
    })
  }

  const renderMf = () => {
    return players.map((item, index) => {
      if(item.category == 2 && typeof team !== 'undefined') {
        if(item.club == team.id) {
          return(
            <div className="item">
              <div className="image">
                <img src={`https://fm387.com/api/images/players/${item.image}`} alt="" />
              </div>
              <div className="info">
                {item.name + ' / ' + item.age}
              </div>
            </div>
          )
        }
      }      
    })
  }

  const renderAt = () => {
    return players.map((item, index) => {
      if(item.category == 3 && typeof team !== 'undefined') {
        if(item.club == team.id) {
          return(
            <div className="item">
              <div className="image">
                <img src={`https://fm387.com/api/images/players/${item.image}`} alt="" />
              </div>
              <div className="info">
                {item.name + ' / ' + item.age}
              </div>
            </div>
          )
        }
      }      
    })
  }

  return(
    <div className="main">
      {renderPageTitle()}
      <div className="main-flex">
        <main>
          <div className="team">
            <div className="image">
              <img src={typeof team !== 'undefined' ? `https://fm387.com/api/images/teams/${team.image}` : ""} alt="" />
            </div>
            <div className="info">
              <span>Osnovan: {typeof team !== 'undefined' ? team.founded : ''}. godine</span>
              <span>Stadion: {typeof team !== 'undefined' ? team.stadium : ''}</span>
              <span>Transfer budget: {typeof team !== 'undefined' ? team.transfer : ''}</span>
              <span>Wage budget: {typeof team !== 'undefined' ? team.wage : ''}</span>
            </div>
          </div>
          <div className="group">
            <div className="group-title">
              Golmani
            </div>
            <div className="group-items">
              {renderGk()}
            </div>
          </div>
          <div className="group">
            <div className="group-title">
              Odbrana
            </div>
            <div className="group-items">
              {renderDf()}
            </div>
          </div>
          <div className="group">
            <div className="group-title">
              Vezni red
            </div>
            <div className="group-items">
              {renderMf()}
            </div>
          </div>
          <div className="group">
            <div className="group-title">
              Napad
            </div>
            <div className="group-items">
              {renderAt()}
            </div>
          </div>
        </main>
        <Widget />
      </div>      
    </div>
  )
}

export default Tim