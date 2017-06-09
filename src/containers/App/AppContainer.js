import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../../actions';
// import { loginSuccess, loginError } from '../../actions'
import { withRouter } from 'react-router-dom'
import injectTapEventPlugin from 'react-tap-event-plugin';

import AppView from './AppView'

// const mapStateToProps = (state) => {
//   // reducer functions
//   // const { isAuthenticated, profile, error } = state.auth
//   // return {
//   //   isAuthenticated,
//   //   profile,
//   //   error
//   // }
//   return {
//     center: state.nav.center,
//     content: state.nav.content,
//     radius: state.nav.radius,
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     loginSuccess: (profile) => dispatch(loginSuccess(profile)),
//     loginError: (error) => dispatch(loginError(error))
//   }
// }

injectTapEventPlugin();

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
};

const AppContainer = withRouter(connect(
  null, // no mapStateToProps
  // mapStateToProps,
  mapDispatchToProps
)(AppView));

export default AppContainer
