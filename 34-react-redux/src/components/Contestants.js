import React from 'react'
import ContestantCard from './ContestantCard'

import {connect} from 'react-redux'

function Contestants(props) {
  console.log(props);
  const mapContestants = () => {
    let contestantArray = Object.values(props.contestants)
    let contestantCards = contestantArray.map(contestant => {
      return (<ContestantCard key={contestant.name}
        increaseVote={props.increaseVote}
        decreaseVote={props.decreaseVote}
        contestant={contestant}
      />
      )
    })
    return contestantCards
  }

  return (
    <div>
      <div className="container">
        {mapContestants()}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    contestants: state.contestants,
    hello: "Timothy"
  }
}

const somefunction = connect(mapStateToProps)
const someMagicComponent = somefunction(Contestants)
export default someMagicComponent
// export default connect(mapStateToProps)(Contestants)






















//
