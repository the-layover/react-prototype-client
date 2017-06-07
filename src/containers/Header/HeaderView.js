import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import RaisedButton from 'material-ui/RaisedButton';

import AuthService from '../../utils/AuthService'
import './Header.css'

const Header = ({ authService, history, isAuthenticated, profile, error, loginRequest, logoutSuccess }) =>
  <div>
    <ul className="list-inline">
      <li><Link to='/'>The Layover</Link></li>
      <li><Link to='/about'>About</Link></li>
      <li><Link to='/map'>Map</Link></li>
      {
        AuthService.loggedIn() ? <li><Link to='/test'>Test</Link></li> : ''
      }
    </ul>
    { !isAuthenticated ? (
      <RaisedButton label="Login" onClick={() => {
          authService.login()
          loginRequest()
        }}
        />
    ) : (
      <div>
        <img src={profile.picture} height="40px" alt="profile" />
        <span>Welcome, {profile.nickname}</span>
        <button
          onClick={() => {
            logoutSuccess()
            AuthService.logout() // careful, this is a static method
            history.push({ pathname: '/' })
          }}
          >
          Logout
        </button>
      </div>
    )}
    { error &&
      <p>{error}</p>
    }

  </div>

Header.propTypes = {
  authService: PropTypes.object.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  profile: PropTypes.object,
  error: PropTypes.string,
  loginRequest: PropTypes.func.isRequired,
  logoutSuccess: PropTypes.func.isRequired
}

export default Header
