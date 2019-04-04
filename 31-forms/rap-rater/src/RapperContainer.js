import React from 'react'
import RapCard from './RapCard'
import RapperForm from './RapperForm'
import Search from './Search'

class RapperContainer extends React.Component {

  state = {
    rappers: [],
    searchTerm: ''
  }

  // Defining it in RapperContainer
  // Executed in Form
  // Effects State in RapperContainer
  handleSubmit = (event, artistObj) => {
    event.preventDefault()
    // Sending over an object from another component
    // We need to update our state with this ADDED to the
    // list of current Rappers
    // fetch('http://localhost:3005/rapperList', {
    //   method: "POST",
    //   body: JSON.stringify(artistObj)
    // }).then().then()
    console.log('From RapperCard to our handleSubmit', artistObj)
    const newSetOfRappers = [ artistObj , ...this.state.rappers]
    this.setState({
      rappers: newSetOfRappers
    })
  }

  handleSearchChange = (e) => {
    console.log('This is the value from the input field', e.target.value)
    this.setState({
      "searchTerm": e.target.value
    })
  }

  // componentDidMount
  // When we want to update the page after initial render
  componentDidMount(){
    fetch("http://localhost:3005/rapperList")
    .then(res => res.json())
    .then(rappersJSON => {

      this.setState({
        rappers: rappersJSON
      })

    })
  }

  render() {
    const filteredRappers = this.state.rappers.filter(rapper => rapper.name.includes(this.state.searchTerm))

    const rapperCards = filteredRappers.map(rapper => {
      return <RapCard key={rapper.name} name={rapper.name}
        sadImg={rapper.sadImage}
        happyImg={rapper.happyImage}/>
    })

    return (
      <div>
      <Search handleSearchChange={this.handleSearchChange} searchTerm={this.state.searchTerm}/>
      <RapperForm handleSubmit={this.handleSubmit}/>
      {rapperCards}
      </div>
    )
  }
}

export default RapperContainer
