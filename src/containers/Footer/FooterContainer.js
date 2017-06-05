import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import FooterView from './FooterView'

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

const FooterContainer = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(FooterView))

export default FooterContainer
