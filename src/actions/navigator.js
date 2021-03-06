import * as types from './types'
import config from '../utils/config.js'
import getToken from '../utils/AuthService'
import axios from 'axios'

export function geolocationRequest(center, bounds, lat, lng, keywords) {
  return async dispatch => {
    try {
      const url = `${config.DEV_BASE_URL}/api/test/helloworld`;
      const content = await axios.get(url).then((response) => {
        return response.data;
      });
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

export function searchPlacesRequest(lat, lng, keywords) {
  return async dispatch => {
    try {
      const placesParams = [
        `latitude/${encodeURIComponent(lat)}`,
        `longitude/${encodeURIComponent(lng)}`
      ];
      const placesUrl = `${config.DEV_BASE_URL}/api/places/search/${placesParams.join('/')}?keywords=${encodeURIComponent(keywords)}`
      // const headers = { headers: { Authorization: `Bearer ${getToken()}`}};
      // console.log(placesUrl);
      const markers = await axios.get(placesUrl).then((response) => {
        return response.data;
      });
      dispatch({
        type: types.GEOLOCATION_MARKER_SUCCESS,
        markers: markers,
      });
    } catch (error) {
      dispatch({
        type: types.GEOLOCATION_MARKER_ERROR,
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
