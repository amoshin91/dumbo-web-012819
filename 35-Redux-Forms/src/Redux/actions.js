export const addWizard = (wizardObject) => {
  return {type: "ADD_WIZARD", payload: wizardObject}
}

export const removeWizard = (name) => {
  return {type: "REMOVE_WIZARD", payload: name}
}
