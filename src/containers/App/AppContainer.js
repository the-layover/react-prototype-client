import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../../actions';
// import { loginSuccess, loginError } from '../../actions'
import { withRouter } from 'react-router-dom'

import AppView from './AppView'

// const mapDispatchToProps = (dispatch) => {
//   return {
//     loginSuccess: (profile) => dispatch(loginSuccess(profile)),
//     loginError: (error) => dispatch(loginError(error))
//   }
// }

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
};

const AppContainer = withRouter(connect(
  null, // no mapStateToProps
  mapDispatchToProps
)(AppView));

export default AppContainer
