import React, { Component } from 'react';
import './App.css'
import RapperContainer from './RapperContainer'

class App extends Component {
  state = {
    currentRapper: null
  }

  handleClick = (rapper) => {
    this.setState({
      currentRapper: rapper
    })
  }
  render() {
    return (
      <div className="App">
        <RapperContainer />
      </div>
    );
  }
}

export default App;
