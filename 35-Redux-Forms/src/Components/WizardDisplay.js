import React from 'react'
import WizardCard from './WizardCard'
import {connect} from 'react-redux'

class WizardDisplay extends React.Component{
  render(){
    let {wizards} = this.props
    // let wizards = this.props.wizards
    return(
      <div>
        <h2>Welcome to the Wizarding World of Harry Potter!</h2>
        <ul>
          {wizards.map(wizardObj => <WizardCard key={wizardObj.name} wizard={wizardObj}/>)}
        </ul>
      </div>
    )
  }
}

// Should return an object that will get merged as props
const mapStateToProps = (state) => {
  return {
    wizards: state.wizards
  }
}

export default connect(mapStateToProps)(WizardDisplay)












//
