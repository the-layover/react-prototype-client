import * as ActionTypes from '../actions/types'

export default function flightReducer(state = {
  origin: null,
  destination: null,
  date: null,
  flightInfo: null,
  layover: null, //array with objects
  error: null
}, action) {
  switch (action.type) {
  case ActionTypes.FLIGHT_INFO_SUCCESS:
    return {...state, origin: action.origin, destination: action.destination, date: action.date, flightInfo: action.flightInfo, layover: action.layover}
  case ActionTypes.FLIGHT_INFO_ERROR:
    return {...state, error: `there is something wrong with the flightinfo - make this error message more robust later`}
    default:
    return state
  }
}
