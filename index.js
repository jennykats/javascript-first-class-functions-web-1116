function receivesAFunction(callback) {
  callback()
}

function aThing () {
  return "hi"
}

function returnsANamedFunction() {
  return aThing
}


function returnsAnAnonymousFunction() {
  return function() {
    console.log("Hi!")
  }
}
