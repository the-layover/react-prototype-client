import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import * as moment from 'moment'

import AutoComplete from 'material-ui/AutoComplete';
import DatePicker from 'material-ui/DatePicker';
import RaisedButton from 'material-ui/RaisedButton';

import AuthService from '../../utils/AuthService'
import './Header.css'

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      localFlightOrigin: '',
      localFlightDestination: '',
      localFlightDate: '',
      dataSource: []
    }
    this.handleDate = this.handleDate.bind(this);
  }

  handleFlightOrigin(value) {
    this.setState({localFlightOrigin: value}, () => console.log(`localFlightOrigin: ${this.state.localFlightOrigin}; localFlightDestination: ${this.state.localFlightDestination}; localFlightDate: ${this.state.localFlightDate}`));
  }

  handleFlightDestination(value) {
    this.setState({localFlightDestination: value});
  }

  handleDate(event, date){
    let formatDate = moment(date).format('YYYY-MM-DD');
    this.setState({localFlightDate: formatDate});
  }

  // handleFlightDate(value) {
  //   this.setState({localFlightDate: value});
  // }

  handleSubmit(event) {
    //TODO: create action to query flight info using this local state data
    alert(`localFlightOrigin: ${this.state.localFlightOrigin}; localFlightDestination: ${this.state.localFlightDestination}; localFlightDate: ${this.state.localFlightDate}`);
    event.preventDefault();
  }
  // <input type="text" value={this.props.flightOrigin} onBlur={this.handleFlightOrigin.bind(this)} />
  // <input type="text" value={this.props.flightDestination} onBlur={this.handleFlightDestination.bind(this)} />
  // <input type="text" value={this.props.flightDate} onBlur={this.handleFlightDate.bind(this)} />

  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <ul className="list-inline">
            <li>
              <AutoComplete
                hintText="Origin"
                dataSource={this.state.dataSource}
                onUpdateInput={this.handleFlightOrigin.bind(this)}
              />
            </li>
            <li>
              <AutoComplete
                hintText="Destination"
                dataSource={this.state.dataSource}
                onUpdateInput={this.handleFlightDestination.bind(this)}
              />
            </li>
            <li>
              <DatePicker onChange={(event, date) => this.handleDate(event, date)} value={this.props.flightDate} hintText="Date to be completed by" container="inline" />
            </li>
            <li>
              <RaisedButton label="Login" onClick={this.handleSubmit.bind(this)}
              />
            </li>
          </ul>
        </form>
        <ul className="list-inline">
          <li><Link to='/'>The Layover</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/map'>Map</Link></li>
          {
            AuthService.loggedIn() ? <li><Link to='/test'>Test</Link></li> : ''
          }
        </ul>
        { !this.props.isAuthenticated ? (
          <RaisedButton label="Login" onClick={() => {
              this.props.authService.login()
              this.props.loginRequest()
            }}
            />
        ) : (
          <div>
            <img src={this.props.profile.picture} height="40px" alt="profile" />
            <span>Welcome, {this.props.profile.nickname}</span>
            <button
              onClick={() => {
                this.props.logoutSuccess()
                AuthService.logout() // careful, this is a static method
                this.props.history.push({ pathname: '/' })
              }}
              >
              Logout
            </button>
          </div>
        )}
        { this.props.error &&
          <p>{this.props.error}</p>
        }
      </div>
    )
  }
}

// const Header = ({ authService, history, isAuthenticated, profile, error, loginRequest, logoutSuccess }) =>
//   <div>
//     <ul className="list-inline">
//       <li><Link to='/'>The Layover</Link></li>
//       <li><Link to='/about'>About</Link></li>
//       <li><Link to='/map'>Map</Link></li>
//       {
//         AuthService.loggedIn() ? <li><Link to='/test'>Test</Link></li> : ''
//       }
//     </ul>
//     { !isAuthenticated ? (
//       <RaisedButton label="Login" onClick={() => {
//           authService.login()
//           loginRequest()
//         }}
//         />
//     ) : (
//       <div>
//         <img src={profile.picture} height="40px" alt="profile" />
//         <span>Welcome, {profile.nickname}</span>
//         <button
//           onClick={() => {
//             logoutSuccess()
//             AuthService.logout() // careful, this is a static method
//             history.push({ pathname: '/' })
//           }}
//           >
//           Logout
//         </button>
//       </div>
//     )}
//     { error &&
//       <p>{error}</p>
//     }
//
//   </div>

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
