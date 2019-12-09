// Your code here
function mapToNegativize(sourceArray) {
  let newArray = []
  sourceArray.forEach(x => newArray.push(-x))
  return newArray
}

function mapToNoChange(sourceArray) {
  let newArray = []
  sourceArray.forEach(x => newArray.push(x))
  return newArray
}

function mapToDouble(sourceArray) {
  let newArray = []
  sourceArray.forEach(x => newArray.push(x*2))
  return newArray
}

function mapToSquare(sourceArray) {
  let newArray = []
  sourceArray.forEach(x => newArray.push(x**2))
  return newArray
}

function reduceToTotal(sourceArray, startingPoint = 0) {
  let num = startingPoint
  for (let i = 0; i < sourceArray.length; i++) {
    num = num + sourceArray[i]
  }
  return num
}

function reduceToAllTrue(sourceArray) {
  let response = true
  for (let i = 0; i < sourceArray.length; i++) {
    if (!!sourceArray[i] === false) {
      response = false
      return response
    }
  }
  return response
}

function reduceToAnyTrue(sourceArray) {
  let response = false
  for (let i = 0; i < sourceArray.length; i++) {
    if (!!sourceArray[i] === true) {
      response = true
      return response
    }
  }
  return response
}
