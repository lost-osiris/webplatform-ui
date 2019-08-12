// import React from 'react'

import Loader from './Loader'

export { 
  Layout as Layout, 
  TopNavSearch as TopNavSearch, 
  NavSubMenu as NavSubMenu 
} from './Layout'

// const Inputs = import('./Inputs')
import * as Inputs from './Inputs'

import Button from './Button'
// const Pagination = import('./Pagination')
// const Button = import('./Button')
// const Link = import('./Link')
// const WithScroll = import('./WithScroll')
// const DataField = import('./DataField')
// const Label = import('./Label')
// const DropDown = import('./DropDown')
// const CommentBox = import('./CommentBox')
// const Comment = import('./Comment')
// const Form = import('./Form')
// const FormatDate = import('./FormatDate')
// const Debug = import('./Debug')

// const Card = import('./Card').then(({Card}) => Card)
// const Tabs = import('./Tabs').then(({Tabs}) => Tabs)
// const Attachment = import('./Attachment').then(({Attachment}) => Attachment)
// const Collapse = import('./Collapse').then(({Collapse}) => Collapse)
// const ToolsWidget = import('./Widgets').then(({Tools}) => Tools)

// const Inputs = <Loader resolve={() => import('./Inputs')} />
const Pagination = () => import('./Pagination')
// const Button = () => import('./Button')
const Link = () => import('./Link')
const WithScroll = () => import('./WithScroll')
const DataField = () => import('./DataField')
const Label = () => import('./Label')
const DropDown = () => import('./DropDown')
const CommentBox = () => import('./CommentBox')
const Comment = () => import('./Comment')
const Form = () => import('./Form')
const FormatDate = () => import('./FormatDate')
const Debug = () => import('./Debug')

const Card = () => import('./Card').then(({Card}) => Card)
const Tabs = () => import('./Tabs').then(({Tabs}) => Tabs)
const Attachment = () => import('./Attachment').then(({Attachment}) => Attachment)
const Collapse = () => import('./Collapse').then(({Collapse}) => Collapse)
const ToolsWidget = () => import('./Widgets').then(({Tools}) => Tools)

export { 
  Inputs,
  Pagination,
  Button,
  Label,
  Link,
  WithScroll,
  DataField,
  DropDown,
  CommentBox,
  Comment,
  Form,
  FormatDate,
  Debug,
  Card,
  Tabs,
  Attachment,
  Collapse,
  ToolsWidget
}

export * from './Core'
