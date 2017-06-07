import * as types from './types'
import config from '../utils/config.js'
import getToken from '../utils/AuthService';
import axios from 'axios'
// export const GEOLOCATION_REQUEST = 'GEOLOCATION_REQUEST'
// export const GEOLOCATION_SUCCESS = 'GEOLOCATION_SUCCESS'
// export const GEOLOCATION_ERROR = 'GEOLOCATION_ERROR'

export function geolocationRequest(center, bounds, lat, lng, keywords) {
  return async dispatch => {
    try {
      const placesParams = [
        `latitude/${encodeURIComponent(lat)}`,
        `longitude/${encodeURIComponent(lng)}`
      ];
      const url = `${config.DEV_BASE_URL}/api/test/helloworld`;
      const placesUrl = `${config.DEV_BASE_URL}/api/places/search/${placesParams.join('/')}?keywords=${encodeURIComponent(keywords)}`
      // const headers = { headers: { Authorization: `Bearer ${getToken()}`}};
      console.log(placesUrl);
      const content = await axios.get(url).then((response) => {
        return response.data;
      });
      const markers = await axios.get(placesUrl).then((response) => {
        return response.data;
      });
      console.log(markers);
      dispatch({
        type: types.GEOLOCATION_REQUEST,
        content: content,
        center,
        bounds
      });
    } catch (error) {
      dispatch({
        type: types.GEOLOCATION_ERROR,
        error
      });
    }
  }
}

export function geolocationSuccess(center) {
  return {
    type: types.GEOLOCATION_SUCCESS,
    center
  }
}

export function geolocationError(center, error) {
  return {
    type: types.GEOLOCATION_ERROR,
    center,
    error
  }
}

export function geolocationTick(radius) {
  return {
    type: types.GEOLOCATION_TICK,
    radius
  }
}
