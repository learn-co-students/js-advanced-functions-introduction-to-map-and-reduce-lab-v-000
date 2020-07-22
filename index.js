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
    for (let i = 0; i < src.length; i++ ) {
      r.push(2 * src[i]) 
    }
    return r
  }
   
  function mapToSquare(src) {
    let r = []
    for (let i = 0; i < src.length; i++ ) {
      r.push(src[i] * src[i]) 
    }
    return r
}

function reduceToTotal(sourceArray, startingPoint = 0) {

    for(let i = 0; i < sourceArray.length; i ++ ) {
        startingPoint += sourceArray[i]
    };

    return startingPoint
}

function reduceToAllTrue(sourceArray) {
    return sourceArray.every(Boolean)
}

function reduceToAnyTrue(sourceArray) {
    return sourceArray.some(Boolean)
}