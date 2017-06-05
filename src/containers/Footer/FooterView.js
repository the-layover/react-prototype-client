import React from 'react'
import PropTypes from 'prop-types'

import './Footer.css'

const Footer = () =>
<div id="footer" className="wrapper style1-alt">
  <div className="inner">
    <ul className="menu">
      <li>&copy; Untitled. All rights reserved.</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
    </ul>
  </div>
</div>

Footer.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
}

export default Footer
