import { combineReducers } from "redux"

import bazaReducer from './reducers/baza-reducer'

const rootReducer = combineReducers({
  baza: bazaReducer
})

export default rootReducer