export const GEOLOCATION_REQUEST = 'GEOLOCATION_REQUEST'
export const GEOLOCATION_SUCCESS = 'GEOLOCATION_SUCCESS'
export const GEOLOCATION_ERROR = 'GEOLOCATION_ERROR'

export function geolocationRequest() {
  return {
    type: GEOLOCATION_REQUEST
  }
}

export function geolocationSuccess(profile) {
  return {
    type: GEOLOCATION_SUCCESS,
    profile
  }
}

export function geolocationError(error) {
  return {
    type: GEOLOCATION_ERROR,
    error
  }
}
