import * as ActionTypes from '../actions/types'

export default function navigatorReducer(state = {
  center: null,
  content: null,
  radius: 6000
}, action) {
  switch (action.type) {
  case ActionTypes.GEOLOCATION_REQUEST:
    return {...state}
  case ActionTypes.GEOLOCATION_SUCCESS:
    return {...state, center: action.center, content: `Location found using HTML5.`}
  case ActionTypes.GEOLOCATION_ERROR:
    return {...state, center: action.center, content: action.error}
  case ActionTypes.GEOLOCATION_TICK:
    return {...state, radius: action.radius}
    default:
    return state
  }
}
