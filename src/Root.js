import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import Waves from 'node-waves'

import History from '~/components/Core/History'
import Router from '~/components/Core/Router'

import Utils from '~/utils'
import { Router, History, Utils } from './index'

const history = History.setHistory()
const utils = new Utils()


const store = utils.getStore()

Waves.attach('.btn', ['.waves-effect'])
Waves.init()

const App = () => {
  return (
    <Provider store={ store }>
      <Router history={ history } />
    </Provider>
  )
}

const rootE = document.querySelector('react')

ReactDOM.render(
  <App />,
  rootE
)
