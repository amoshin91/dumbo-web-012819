import wizards from '../wizards'

const initialState = {
  wizards: wizards,
  lizards: "lizards",
  blizzards: "blizzards"
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_WIZARD":
      let newWizard = action.payload
      let newArr = [newWizard ,...state.wizards]
      return {...state, wizards: newArr}

    case "REMOVE_WIZARD":
      let name = action.payload
      let filteredArray = state.wizards.filter(wiz => wiz.name !== name)
      return {...state, wizards: filteredArray}
      
    default:
      return state
  }
}

export default reducer
