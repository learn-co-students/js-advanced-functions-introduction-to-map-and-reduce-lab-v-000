// Your code here
function mapToNegativize(sourceArray) {
  const negArray = []
  for (const num of sourceArray) {
    negArray.push(num * -1)
  }
  return negArray
}

function mapToNoChange(sourceArray) {
  const newArray = []
  for (const num of sourceArray) {
    newArray.push(num)
  }
  return newArray
}

function mapToDouble(sourceArray) {
  const doubleArray = []
  for (const num of sourceArray) {
    doubleArray.push(num * 2)
  }
  return doubleArray
}

function mapToSquare(sourceArray) {
  const squareArray = []
  for (const num of sourceArray) {
    squareArray.push(num ** 2)
  }
  return squareArray
}

function reduceToTotal(sourceArray, startingPoint=0) {
  let total = startingPoint
  for (const item of sourceArray) {
    total = item + total
  }
  return total
}

function reduceToAllTrue(sourceArray) {
  let trueArray = []
  const isTrue = (currentValue) => currentValue === true
  for (const item of sourceArray) {
    trueArray.push(Boolean(item))
  }
  if (trueArray.every(isTrue)) {
    return true
  } else {
    return false
  }
}

function reduceToAnyTrue(sourceArray) {
  let trueArray = []
  const isTrue = (currentValue) => currentValue === true
  for (const item of sourceArray) {
    trueArray.push(Boolean(item))
  }
  if (trueArray.some(isTrue)) {
    return true
  } else {
    return false
  }
}