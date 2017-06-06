import * as types from './types'
// export const GEOLOCATION_REQUEST = 'GEOLOCATION_REQUEST'
// export const GEOLOCATION_SUCCESS = 'GEOLOCATION_SUCCESS'
// export const GEOLOCATION_ERROR = 'GEOLOCATION_ERROR'

export function geolocationRequest(center, bounds) {
  console.log('moved');
  return {
    type: types.GEOLOCATION_REQUEST,
    center,
    bounds
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
