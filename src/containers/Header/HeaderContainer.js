import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../../actions';
// import { loginRequest, logoutSuccess } from '../../actions'
import { withRouter } from 'react-router-dom'

import HeaderView from './HeaderView'

const mapStateToProps = (state) => {
  // reducer functions
  // const { isAuthenticated, profile, error } = state.auth
  // return {
  //   isAuthenticated,
  //   profile,
  //   error
  // }
  return {
    isAuthenticated: state.auth.isAuthenticated,
    profile: state.auth.profile,
    error: state.auth.error,
    content: state.flight.content,
    flightOrigin: state.flight.origin,
    flightDestination: state.flight.destination,
    flightDate: state.flight.date,
    flights: state.flight.flights,
    flightLayovers: state.flight.layovers,
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     loginRequest: () => dispatch(loginRequest()),
//     logoutSuccess: () => dispatch(logoutSuccess())
//   }
// }

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
};

const HeaderContainer = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderView))

export default HeaderContainer
