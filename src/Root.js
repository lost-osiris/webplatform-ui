import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import Waves from 'node-waves'

import { Router, History, Utils } from './index'

import AppContainer from './containers/AppContainer'

const history = History.setHistory()
const utils = new Utils()

const store = utils.getStore()

Waves.attach('.btn', ['.waves-effect'])
Waves.init()

const App = () => {
  return (
    <Provider store={ store }>
      {/* <AppContainer history={history} /> */}
      <Router history={ history } />
    </Provider>
  )
}

const rootE = document.querySelector('react')

ReactDOM.render(
  <App>Hello World</App>,
  rootE
)
