import * as types from './types'
// export const LOGIN_REQUEST = 'LOGIN_REQUEST'
// export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
// export const LOGIN_ERROR = 'LOGIN_ERROR'
// export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'

export function loginRequest() {
  return {
    type: types.LOGIN_REQUEST
  }
}

export function loginSuccess(profile) {
  return {
    type: types.LOGIN_SUCCESS,
    profile
  }
}

export function loginError(error) {
  return {
    type: types.LOGIN_ERROR,
    error
  }
}

export function logoutSuccess() {
  return {
    type: types.LOGOUT_SUCCESS
  }
}
