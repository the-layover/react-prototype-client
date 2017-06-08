import * as types from './types'
import config from '../utils/config.js'
import axios from 'axios'

export function flightInfoRequest(origin, destination) {
  return async dispatch => {
    try {
      const url = `${config.DEV_BASE_URL}/api/test/helloworld`;
      const content = await axios.get(url).then((response) => {
        return response.data;
      });
      const date = Date.now();
      const flightInfo = {};
      dispatch({
        type: types.FLIGHT_INFO_SUCCESS,
        content: content,
        date: date,
        flightInfo: flightInfo,
        origin,
        destination
      });
    } catch (error) {
      dispatch({
        type: types.FLIGHT_INFO_ERROR
      });
    }
  }
}
