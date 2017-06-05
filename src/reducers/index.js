// reducers/index.js

import { combineReducers } from 'redux'
import auth from './auth'
import nav from './navigator'

const rootReducer = combineReducers({
  auth,
  nav
  // add your other reducers here
})

export default rootReducer
