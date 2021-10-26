export const setLeagues = leagues => ({
  type: 'BAZA.SET_LEAGUES', 
  payload: leagues
})

export const setTeams = teams => ({
  type: 'BAZA.SET_TEAMS',
  payload: teams
})

export const setPlayers = teams => ({
  type: 'BAZA.SET_PLAYERS',
  payload: teams
})

const initialState = {
  leagues: [],
  teams: [],
  players: []
}

const bazaReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'BAZA.SET_LEAGUES':
      return {
        ...state,
        leagues: action.payload
      }
    case 'BAZA.SET_TEAMS':
      return {
        ...state,
        teams: action.payload
      }
    case 'BAZA.SET_PLAYERS':
      return {
        ...state,
        players: action.payload
      }
    default:
      return state
  }
}

export default bazaReducer