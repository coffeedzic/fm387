import React, { useEffect } from 'react'
import { Switch, Route } from 'react-router'
import axios from 'axios'
import { useDispatch } from 'react-redux'

import { setLeagues, setPlayers, setTeams } from './redux/reducers/baza-reducer'

import Header from './features/header/components/Header'
import Footer from './features/footer/components/Footer'
import Home from './features/home/components/Home'
import Baza from './features/baza/components/Baza'
import Liga from './features/baza/components/Liga'
import Tim from './features/baza/components/Tim'
import Downloads from './features/downloads/components/Downloads'
import Tools from './features/tools/components/Tools'
import Tutorials from './features/tutorials/components/Tutorials'
import Pages from './features/pages/components/Pages'

import './App.css'





const App = () => {
  const dispatch = useDispatch()

  const fetchLeagues = () => {
    axios.get('https://fm387.com/api/get-leagues.php')
    .then(response => {
      dispatch(setLeagues(response.data))
    })
  }

  const fetchTeams = () => {
    axios.get('https://fm387.com/api/get-teams.php')
    .then(response => {
      dispatch(setTeams(response.data))
    })
  }

  const fetchPlayers = () => {
    axios.get('https://fm387.com/api/get-players.php')
    .then(response => {
      dispatch(setPlayers(response.data))
    })
  }

  useEffect(() => {
    fetchLeagues()
    fetchTeams()
    fetchPlayers()
  }, [])

  return(
    <div className="app">
      <Header />
      <Switch>
        <Route exact path={["/", "/home"]}>
          <Home />
        </Route>
        <Route exact path="/baza">
          <Baza />
        </Route>
        <Route exact path="/liga/:id">
          <Liga />
        </Route>
        <Route exact path="/tim/:id">
          <Tim />
        </Route>
        <Route exact path="/downloads">
          <Downloads />
        </Route>
        <Route exact path="/alati">
          <Tools />
        </Route>
        <Route exact path="/vodic">
          <Tutorials />
        </Route>
        <Route exact path="/stranica/:page">
          <Pages />
        </Route>
      </Switch>
      <Route 
        render={({ location }) => ['/', '/home'].includes(location.pathname)
            ? null
            : <Footer />
        }
      />          
    </div>
  )
}

export default App