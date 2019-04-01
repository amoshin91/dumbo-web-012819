import React from 'react'

class Cohort extends React.Component {
  render(){
    // Props tell us how to render "differently"
    // Our parent will always tell us what props we're receiving
    // This component is only told what it should look like
    console.log('What is this?', this)
    return (
      <h1>{this.props.name}</h1>
    )
  }
}

export default Cohort
