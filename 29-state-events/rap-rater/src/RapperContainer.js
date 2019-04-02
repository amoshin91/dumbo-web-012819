import React from 'react'
import RapCard from './RapCard'

class RapperContainer extends React.Component {

  state = {
    rappers: []
  }

  // componentDidMount
  // When we want to update the page after initial render
  componentDidMount(){
    fetch("http://localhost:3001/rapperList")
    .then(res => res.json())
    .then(rappersJSON => {

      this.setState({
        rappers: rappersJSON
      })

    })
  }

  render() {

    const rapperCards = this.state.rappers.map(rapper => {
      return <RapCard name={rapper.name}
        sadImg={rapper.sadImage}
        happyImg={rapper.happyImage}/>
    })

    return (
      <div>
      {rapperCards}
      </div>
    )
  }
}

export default RapperContainer
