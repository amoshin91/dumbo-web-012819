import React, { Component } from 'react';
import './App.css'
import RapperContainer from './RapperContainer'
import Home from './Home'
// import
import {Route, Switch, Link} from 'react-router-dom'

class App extends Component {

  render() {
    return (
      <div className="App">
      <nav>
        <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/rappers">Rappers</Link></li>
        </ul>
      </nav>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/rappers" component={RapperContainer} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;
