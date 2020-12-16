import React, { Component } from 'react'

class ChildComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    }
  }

  changeopen = () => {
    this.setState({ open: true })
  }

  render() {
    console.log("child values", this.state.open)
    return (
      <div>
        kk {this.state.open}
      </div>);
  }
}


export default ChildComponent;