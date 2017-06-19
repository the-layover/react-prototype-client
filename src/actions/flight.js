import * as types from './types'
import config from '../utils/config.js'
import axios from 'axios'

export function flightInfoRequest(origin, destination, date) {
  return async dispatch => {
    try {
      console.log('flightInfoRequest args: ', arguments);
      const flightSearchParams = [
        `origin/${encodeURIComponent(origin)}`,
        `destination/${encodeURIComponent(destination)}`,
        `date/${encodeURIComponent(date)}`,
      ]
      const flightSearchUrl = `${config.DEV_BASE_URL}/api/flight/search/${flightSearchParams.join('/')}`
      console.log(flightSearchUrl);
      // const flights = await axios.get(flightSearchUrl).then((response) => {
      //   return response.data;
      // });
      const content = await axios.get(flightSearchUrl).then((response) => {
        return response.data;
      });
      const flights = [];
      const layovers = [];
      dispatch({
        type: types.FLIGHT_INFO_SUCCESS,
        flights: flights, //should be array
        layovers: layovers, //should be array
        date: date, //datetime object?
        origin, //string
        destination, //string
        content: content
      });
    } catch (error) {
      dispatch({
        type: types.FLIGHT_INFO_ERROR
      });
    }
  }
}
