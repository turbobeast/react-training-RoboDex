import React, { Component } from 'react';
require('../Containers/ProfileViewContainer')

class Bundle extends Component {
  componentWillMount () {
    this.load(this.props)
  }

  load (props) {
    console.log('load bundle')
    this.setState({
      mod: null
    })

    props.load((require) => {
      console.log('load returned')
      console.log(this.props.path)
      console.log(typeof require)
      console.log(arguments)
      console.dir(require)
      require(this.props.path)
      // console.log(mod(this.props.path), () => {

      // })
      // this.setState({ mod(this.) })
    })
  }

  render () {
    return <h2>bundle</h2> // this.props.children(this.state.mod)
  }
}

export default Bundle;