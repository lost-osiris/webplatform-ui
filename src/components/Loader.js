import React, { Component } from 'react'

export default class Loader extends Component {
  constructor(props) {
    super(props)
    this.state = {
      module: undefined
    }
  }

  async componentDidMount() {
    const { resolve } = this.props
    const { default: module } = await resolve()
    this.setState({ module })    
  }

  render() {
    const { module } = this.state

    if (!module) return <div>Loading module...</div>
    console.log(module)
    return React.createElement(module, module.props)
    // return module
  }
}