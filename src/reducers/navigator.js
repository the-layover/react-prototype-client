import * as ActionTypes from '../actions/types'
import AuthService from '../utils/AuthService'

export default function navigatorReducer(state = {
  center: null,
  content: null,
  radius: 6000
}, action) {
  switch (action.type) {
  case ActionTypes.GEOLOCATION_REQUEST:
    return {...state}
  case ActionTypes.GEOLOCATION_SUCCESS:
    return {...state}
  case ActionTypes.GEOLOCATION_ERROR:
    return {...state}
    default:
    return state
  }
}
