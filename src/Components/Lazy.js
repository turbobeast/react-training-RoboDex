import React, { Component } from 'react';

class Lazy extends Component {
  componentWillMount () {
    console.log('lazy will mount')
  }

  render () {
    // if (false) {
    const Component = require(this.props.path).default;
    // }
    return <Component {...this.props} />
  }
}

export default Lazy;