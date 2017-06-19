import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router} from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import configureStore from './store/configureStore'
import AppContainer from './containers/App/AppContainer'
import './styles/index.css'

const store = configureStore()

render(
  <Provider store={store}>
    <MuiThemeProvider>
      <Router>
        <AppContainer />
      </Router>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
)
