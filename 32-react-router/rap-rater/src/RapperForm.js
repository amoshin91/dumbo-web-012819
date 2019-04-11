import React from 'react'

class RapperForm extends React.Component {

  // Controlled Input
  // Using state to control what is being displayed on the page

  state = {
    name: '',
    sadImage: '',
    happyImage: ''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render(){
    return (
      <form onSubmit={(event) => { this.props.handleSubmit(event, this.state)}}>
        <input type="text" onChange={this.handleChange} name="name" placeholder="Enter your name" value={this.state.name}/>
        <input type="text" onChange={this.handleChange} name="sadImage" placeholder="Enter sadImage" value={this.state.sadImage}/>
        <input type="text" onChange={this.handleChange} name="happyImage" placeholder="Enter happyImage" value={this.state.happyImage}/>
        <input type="submit" value="Create new Artist"/>
      </form>
    )
  }
}

export default RapperForm
