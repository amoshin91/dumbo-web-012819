import React, { Component } from 'react'

class RapCard extends Component {

  // constructor(){
  //   super()
  //   this.state = {
  //     clicked: false
  //   }
  // }


  // I need to set an initial state for
  // my application otherwise it doesn't
  // know what to render
  state = {
    clicked: false
  }

  // Click handler for changing state
  // with the button
  handleClick = () => {
    this.setState({
      clicked: !this.state.clicked
    })

    // DO NOT DO THIS
    // This will change state but not re-render state
    // this.state.clicked = !this.state.clicked
  }

  // A way to write a function to
  // make it easier to tell the app
  // what to render
  setImage() {
    if(this.state.clicked){
      return this.props.happyImg
    } else {
      return this.props.sadImg
    }
    // return this.state.clicked ? this.props.happyImg : this.props.sadImg
  }

  render(){
    console.log('This is cards\' state', this.state)
    return (
      <div>
        <h1>{this.props.name}</h1>
        <img alt={this.props.name} src={this.state.clicked ? this.props.happyImg : this.props.sadImg}/>
        <button onClick={this.handleClick}>Change</button>
      </div>
    )
  }
}

export default RapCard
