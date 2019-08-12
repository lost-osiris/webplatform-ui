import React, { Component } from 'react'

export default class Loader extends Component {
  constructor(props) {
    super(props)
  }

  async componentDidMount() {
    const { resolve } = this.props
    const { default: module } = await resolve()
    this.setState({ module })    
  }

  render() {
    const { module } = this.state;
    console.log(module)
    if (!module) return <div>Loading module...</div>;
    if (module.view) return React.createElement(module.view);
  }
}