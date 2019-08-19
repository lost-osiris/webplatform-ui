// import loadable from '@loadable/component'

export { 
  Layout as Layout, 
  TopNavSearch as TopNavSearch, 
  NavSubMenu as NavSubMenu 
} from './Layout'

import Inputs from './Inputs'

import Form from './Form'
import Button from './Button'
import Pagination from './Pagination'
import Link from './Link'
import WithScroll from './WithScroll'
import DataField from './DataField'
import Label from './Label'
import DropDown from './DropDown'
import Comment from './Comment'
import CommentBox from './CommentBox'
import FormatDate from './FormatDate'
import Debug from './Debug'
import { Card as Card } from './Card'
import { Tabs as Tabs } from './Tabs'
import { Attachment as Attachment } from './Attachment'
import { Collapse as Collapse} from './Collapse'
import { Tools as ToolsWidget } from './Widgets'

// const Form = loadable(() => import('./Form'))
// const Button = loadable(() => import('./Button'))
// const Pagination = loadable(() => import('./Pagination'))
// const Link = loadable(() => import('./Link'))
// const WithScroll = loadable(() => import('./WithScroll'))
// const DataField = loadable(() => import('./DataField'))
// const Label = loadable(() => import('./Label'))
// const DropDown = loadable(() => import('./DropDown'))
// const CommentBox = loadable(() => import('./CommentBox'))
// const Comment = loadable(() => import('./Comment'))
// const FormatDate = loadable(() => import('./FormatDate'))
// const Debug = loadable(() => import('./Debug'))
// const Card = loadable(() => import('./Card').then(({Card}) => Card))
// const Tabs = loadable(() => import('./Tabs').then(({Tabs}) => Tabs))
// const Attachment = loadable(() => import('./Attachment').then(({Attachment}) => Attachment))
// const Collapse = loadable(() => import('./Collapse').then(({Collapse}) => Collapse))
// const ToolsWidget = loadable(() => import('./Widgets').then(({Tools}) => Tools))

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
