// console.log("WE GOOD")
// the keywork "this"
// Execution context

// console.log(this)

// window.console.log('test')

// Scenario 1: 'this' gets AUTOMATICALLY bound to the class/instance
class Dog {
  constructor() {
    // console.log("what 'this' is in the dog object", this)
  }
  static whatIsADog() {
    // console.log("what 'this' is in the dog class method", this)
    return 'a dog is a loving four legged animal';
  }
}

// Scenario 2: Functions

function saySup() {
  console.log("what 'this' is in a normal function", this)
  return `sup ${this.name}`
}
saySup() => this? WINDOW

let cat = {
  name: "Cuddles",
  speak: saySup
}
cat.speak() => this? CAT OBJ


// Scenario 3: Arrow Functions
// class Donkey {
//   saySup = () => {
//     console.log("what 'this' is in an arrow function", this)
//     return `sup`
//   }
// }
//

const saySup = () => {
  console.log("what 'this' is in an arrow function", this)
  return `sup`
}
saySup() => this? WINDOW

let cat = {
  name: "Cuddles",
  speak: saySup
}
cat.speak() => this? WINDOW


// Scenario 4: bind/call/apply
function saySup(name) {
  console.log("what 'this' is in a normal function", this)
  return `sup ${name}`
}

let cat = {
  name: "Cuddles",
  speak: saySup
}

let ourBoundSaySup = saySup.bind(window);

saySup.call(window, 'kevinnnnnnn', arg2, arg3)
saySup.apply(cat, ['kevinnnnnnn', arg2, arg3])
