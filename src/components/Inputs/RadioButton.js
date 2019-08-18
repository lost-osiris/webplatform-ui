import React, { Component } from 'react'

/**
  Props:
    - value
    - label
    - id (required so that Form component can find this component and set the onChange handler properly)
*/
export default class RadioButton extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {
      name,
      label,
      value,
      selectedValue,
      inline,
      id,
    } = this.props

    let className = 'radio'
    if (inline) {
      className += ' radio--inline'
    }

    return (
      <div className={className}>
        <input
          type="radio"
          id={id}
          name={name}
          value={value}
        />
        <label className="radio__label"
          data-checked={value === selectedValue}
          onClick={() => this.props.onChange(this.props.value)}>
          {label}
        </label>
      </div>
    )
  }
}