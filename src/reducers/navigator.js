import * as ActionTypes from '../actions/types'

export default function navigatorReducer(state = {
  bounds: null,
  center: null,
  content: null,
  radius: 6000,
  markers: [],
  query: ''
}, action) {
  switch (action.type) {
  case ActionTypes.GEOLOCATION_REQUEST:
    return {...state, center: action.center, bounds: action.bounds, content: action.content}
  case ActionTypes.GEOLOCATION_SUCCESS:
    return {...state, center: action.center, content: `Location found using HTML5.`}
  case ActionTypes.GEOLOCATION_ERROR:
    return {...state, center: action.center, content: action.error}
  case ActionTypes.GEOLOCATION_TICK:
    return {...state, radius: action.radius}
  case ActionTypes.GEOLOCATION_MARKER_SUCCESS:
    return {...state, markers: action.markers}
  case ActionTypes.GEOLOCATION_MARKER_ERROR:
    return {...state}
  default:
    return state
  }
}
