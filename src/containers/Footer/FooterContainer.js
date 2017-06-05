import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../../actions';
import { withRouter } from 'react-router-dom'

import FooterView from './FooterView'

const mapStateToProps = (state) => {
  return {
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
};

const FooterContainer = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(FooterView))

export default FooterContainer
