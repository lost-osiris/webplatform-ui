// import loadable from '@loadable/component'

import Text from './Text'
import Radio from './Radio'
import RadioButton from './RadioButton'
import Switch from './Switch'
import DateTime from './Flatpickr'
import Check from './Check'
import Autocomplete from './Autocomplete'

// const Text = loadable(() => import('./Text'))
// const Radio = loadable(() => import('./Radio'))
// const RadioButton = loadable(() => import('./RadioButton'))
// const Switch = loadable(() => import('./Switch'))
// const DateTime = loadable(() => import('./Flatpickr'))
// const Check = loadable(() => import('./Check'))
// const Select = loadable(() => import('./Select'))
// const Autocomplete = loadable(() => import('./Autocomplete'))

export default {
  Radio: Radio, 
  Switch: Switch,
  DateTime: DateTime,
  Select: Select,
  Check: Check,
  Autocomplete: Autocomplete,
  RadioButton: RadioButton,
  Text: Text,
}
