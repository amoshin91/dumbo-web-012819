import React, { Component } from 'react';
import {connect} from 'react-redux'
import {addWizard} from '../Redux/actions'

class WizardForm extends Component {

  state = {
    name: "",
    house: "",
    redux: ""
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    let wizardObject = this.state
    this.props.addWizard(wizardObject)
  }

  render() {
    let {name, house, redux} = this.state
    console.log(this.props);
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
        </label>
          <input type="text" name="name" onChange={this.handleChange} value={name}/>
        <label>
          House
        </label>
          <input type="text" name="house" onChange={this.handleChange} value={house}/>
        <label>
          Redux
        </label>
          <input type="text" name="redux" onChange={this.handleChange} value={redux}/>
        <input type="submit"/>
      </form>
    );
  }

}

// Should return an object that will get merged as props
// const mapDispatchToProps = (dispatch) => {
//   return {
//     addWizard: (wizardObject) => {dispatch({type: "ADD_WIZARD", payload: wizardObject})}
//   }
// }

export default connect(null, { addWizard })(WizardForm);














//
