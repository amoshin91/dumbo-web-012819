import React, { Component } from "react";
import BeyCard from './BeyCard'

export default class Favorites extends Component {
  render() {
    const beyCards = this.props.beys.map((bey, index) => <BeyCard key={index} handleClick={this.props.handleClick} bey={bey} />)
    return (
      <div className="favorites">
        <h1>Favorites</h1>
        {beyCards}
      </div>
    );
  }
}
