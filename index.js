// map like ones return a new array

function mapToNegativize(blah) {
  let arr = []
  for (let i = 0; i < blah.length; i++ ) {
    arr.push(-1 * blah[i])
  }
  return arr
}

function mapToNoChange(blah) {
  let arr = []
  for (let i = 0; i < blah.length; i++ ) {
    arr.push(blah[i])
  }
  return arr
}


function mapToDouble(blah) {
  let arr = []
  for (let i = 0; i < blah.length; i++ ) {
      arr.push(2 * blah[i])
    }
  return arr
}

function mapToSquare(blah) {
  let arr = []
  for (let i = 0; i < blah.length; i++ ) {
      arr.push(blah[i] * blah[i])
    }
  return arr
}


// reduce like ones return a value
function reduceToTotal(arr, starter=0) {
  let total = starter
  for (let i = 0; i < arr.length; i++ ) {
    total = total + arr[i]
  }
  return total
}

function reduceToAllTrue(arr) {
  for (let i = 0; i < arr.length; i++ ) {
    if (!arr[i]) return false
  } 
  return true
}

function reduceToAnyTrue(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) return true
  }
  return false
}