// map-like methods
const naiveMap = (arr, multiplier) => {
  const mappedArr = []

  for (const e of arr) {
    mappedArr.push(e * multiplier)
  }

  return mappedArr
}

const mapToNegativize = (sourceArray) => naiveMap(sourceArray, -1)

const mapToNoChange = (sourceArray) => sourceArray

const mapToDouble = (sourceArray) => naiveMap(sourceArray, 2)

const mapToSquare = (sourceArray) => {
  const squaredArr = []

  for (const e of sourceArray) {
    squaredArr.push(e ** 2)
  }

  return squaredArr
}

// reduce-like methods
const reduceToTotal = (sourceArray, startingPoint = 0) => {
  let reducedValue = startingPoint

  for (const e of sourceArray) {
    reducedValue += e
  }

  return reducedValue
}

const reduceToAllTrue = (sourceArray) => {
  let arrBoolean = true

  for (const e of sourceArray) {
    if (e == false) {
      arrBoolean = false
    }
  }

  return arrBoolean
}

const reduceToAnyTrue = (sourceArray) => {
  let arrBoolean = false

  for (const e of sourceArray) {
    if (e == true) {
      arrBoolean = true
    }
  }

  return arrBoolean
}
