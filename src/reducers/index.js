// reducers/index.js

import { combineReducers } from 'redux'
import auth from './auth'
import nav from './navigator'
import flight from './flight'

const rootReducer = combineReducers({
  auth,
  nav,
  flight
  // add your other reducers here
})

export default rootReducer
