import React from 'react'
import RapCard from './RapCard'
import RapperForm from './RapperForm'
import Search from './Search'
import Home from './Home'
import {Route, Switch} from 'react-router-dom'

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
    }, (state, props) => console.log(state))

    // DO NOT DO
    // console.log('This is the value of state in handleSubmit', this.state)
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
    // console.log('This is the value of state', this.state)
    const filteredRappers = this.state.rappers.filter(rapper => rapper.name.includes(this.state.searchTerm))

    const rapperCards = filteredRappers.map(rapper => {
      return <RapCard key={rapper.name} name={rapper.name}
        sadImg={rapper.sadImage}
        happyImg={rapper.happyImage}/>
    })

    return (
      <div>
      <Switch>
        <Route path="/rappers/:name" render={(renderProps) => {
          // The goal is to render one rapper
          // We need to get the router props to find the props to send
          // for our RapCard
          if(this.state.rappers.length > 0 ){
          const urlRapperName = renderProps.match.params.name
          console.log('Here is the rapper name from the url', urlRapperName)
          console.log('This is the state of the rappers', this.state.rappers)
          const rapper= this.state.rappers.find(rapper => rapper.name.toLowerCase() === urlRapperName.toLowerCase())
          return <RapCard name={rapper.name} sadImg={rapper.sadImage} happyImg={rapper.happyImage} />
        } else {
          return null
        }
        }} />
        <Route path="/rappers" render={renderProps => {
          return (
            <div>
            <Search handleSearchChange={this.handleSearchChange} searchTerm={this.state.searchTerm}/>
            <RapperForm handleSubmit={this.handleSubmit}/>
              {rapperCards}
            </div>
          )
        }} />
      </Switch>
      </div>
    )
  }
}

export default RapperContainer
