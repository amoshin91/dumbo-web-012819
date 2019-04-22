import React, { Component } from 'react';
import {connect} from 'react-redux'
import {addWizard} from '../Redux/actions'

class Header extends Component {

  handleClick = () => {
      this.props.addWizard({
        name: "Tom",
        house: "Flatiron",
        redux: "Wizards"
      })
  }

  render() {
    return (
      <header className="App-header">
        <img src={"https://image.flaticon.com/icons/svg/135/135869.svg"} className="App-logo" alt="logo" />
        <p>Harry Potter of Redux</p>
        <button onClick={this.handleClick}>Press Me 2 ADD A WIZ!</button>
      </header>
    );
  }

}

export default connect(null, {addWizard})(Header);
