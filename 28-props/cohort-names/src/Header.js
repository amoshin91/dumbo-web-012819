import React from 'react'
import Cohort from './Cohort'

class Header extends React.Component {
    render(){
      // How to render multiple things that are the same
      // An array of Strings => An array of Components
      let cohortNames = ["Tom, the coolest cohort around", "Hashed Potatoes", "'Cheese'"]

      let cohortComponents = cohortNames.map(cohortName => {
        return <Cohort name={cohortName} />
      })
      console.log(cohortComponents)
      return (
        <div>
          <Cohort name="Tom, the coolest cohort around"/>
          <Cohort name="Hashed Potatoes" />
          <Cohort name="'Cheese'" />
        </div>
      )
    }
}

export default Header
