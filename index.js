// Your code here
function mapToNegativize(src) {
  let r = []
  for (let i = 0; i < src.length; i++ ) {
    r.push(-1 * src[i])
  }
  return r
}

function mapToNoChange(src) {
  let r = []
  for (let i = 0; i < src.length; i++ ) {
    r.push(src[i])
  }
  return r
}


function mapToDouble(src) {
  let r = []
  for (let i = 0; i < src.length; i++) {
    r.push(2 * src[i])
  }
  return r
}

function mapToSquare(src) {
  let r = []
  for (let i = 0; i < src.length; i++) {
    r.push(src[i] * src[i])
  }
  return r
}

function reduceToTotal (sourceArray, startingPoint=0) {
  let total = startingPoint
  for (let i = 0; i < sourceArray.length; i++) {
    total = total + sourceArray[i]
  }
  return total
}

function reduceToAllTrue(src) {
  for (let i = 0; i < src.length; i++ ) {
    if (!src[i]) return false
  }
  return true
}


function reduceToAnyTrue (src) {
  for (let i = 0; i < src.length; i++ ) {
    if (src[i]) return true
  }
  return false
}
