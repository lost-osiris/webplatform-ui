import * as Core from './Core'
import * as UI from './components'
import Actions from './actions'
import Utils from './utils'
import Reducers from './reducers'

import '../assets/scss/app.scss'
import '../assets/less/vendors/font-awesome/font-awesome.less'
import '../assets/less/vendors/material-design-iconic-font/material-design-iconic-font.css'
import '../assets/less/inc/progress-bar.less'
import '../assets/less/inc/vendor-overrides/bootstrap-grid.less'
import '../assets/less/inc/autocomplete.less'

export {
  ...UI,
  ...Core,
  Actions: Actions,
  Utils: Utils,
  Reducers: Reducers
}