import * as ActionTypes from '../actions/types'
import * as moment from 'moment'

//TODO: Add action.date back into state. the problem is the fact that the Datepicker wants an object but we converted it to a string YYYY-MM-DD for easy querying

export default function flightReducer(state = {
  origin: null,
  destination: null,
  date: null,
  flights: null,
  layovers: null, //array with objects
  error: null,
  content: null
}, action) {
  switch (action.type) {
  case ActionTypes.FLIGHT_INFO_SUCCESS:
    return {...state, origin: action.origin, destination: action.destination, date: action.date, flights: action.flights, layovers: action.layovers}
  case ActionTypes.FLIGHT_INFO_ERROR:
    return {...state, error: `there is something wrong with the flight info - make this error message more robust later`}
    default:
    return state
  }
}
