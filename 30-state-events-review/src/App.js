import React, { Component } from "react";
import BeyContainer from './BeyContainer'
import Favorites from './Favorites'
import logo from "./logo.svg";
import "./App.css";

// 1. Functions will need to pass in props
// ***2. They can't have state
// ***3. NO LIFECYCLE METHODS

class App extends Component {

  state = {
    beys: []
  }

  // This is an arrow function to make sure
  // that the value of this function found at APP
  // gets executed
  // Lexical Binds to this scope
  addBey = (id) => {
    // console.log('This is the id we received:', id)

    // THE GOAL
    // find out which bey was clicked and change its favorite status to true
    //*** 1. We need to get the id from the clicked bey
    // 1.5 Let's make a copy of state
    // 2. We will go through state and find it
    const stateCopy = [...this.state.beys]
    const foundBey = stateCopy.find(bey => bey.id === id)
    // 3. And then update the attribute appropriately
    foundBey.favorite = true
    console.log('This is the state after clicking', this.state)
    // 4. Set State
    this.setState({
      beys: stateCopy
    })

  }

  removeBey = (id) => {
    // console.log('This is the id we received:', id)

    // THE GOAL
    // find out which bey was clicked and change its favorite status to true
    //*** 1. We need to get the id from the clicked bey
    // 1.5 Let's make a copy of state
    // 2. We will go through state and find it
    const stateCopy = [...this.state.beys]
    const foundBey = stateCopy.find(bey => bey.id === id)
    // 3. And then update the attribute appropriately
    foundBey.favorite = false
    console.log('This is the state after clicking', this.state)
    // 4. Set State
    this.setState({
      beys: stateCopy
    })

  }


  componentDidMount(){
    // Making my fetch request
    fetch("http://localhost:4000/beys")
    .then(res => res.json())
    .then(beyJSON => {
      // beyJSON => [...]
      this.setState({
        beys: beyJSON
      }, () => console.log("This is after setState:", this.state))

      // Don't try to check state after it, use the callback
      // console.log("This is after setState:", this.state)
    })
  }

  favoritedBeys = () => {
    return this.state.beys.filter(bey => bey.favorite)
  }


  render() {
    return (
      <div className="container">
        <BeyContainer beys={this.state.beys} handleClick={this.addBey}/>
        <Favorites beys={this.favoritedBeys()} handleClick={this.removeBey  }/>
      </div>
    );
  }
}

// const App = (props) => {
//   return (
//     <div className="container">
//       <BeyContainer />
//       <Favorites />
//     </div>
//   );
// };

export default App;
