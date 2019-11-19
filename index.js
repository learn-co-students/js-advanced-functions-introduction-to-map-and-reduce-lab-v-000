// Your code here

//  MAP method:
//  mapToNegativize returns an array with all values made negative
function mapToNegativize(sourceArray){
    let r =[]
    for (let i = 0; i < sourceArray.length; i++ ) {
        r.push(-1 * sourceArray[i])
    }
    return r
}

// mapToNoChange returns an array with the original values
function mapToNoChange(sourceArray){
    return sourceArray
}

// mapToDouble returns an array with the original values multiplied by 2
function mapToDouble(sourceArray) {
    let r = []
        for(let i = 0; i < sourceArray.length; i++ ){
    r.push( 2 * sourceArray[i] )
    }
    return r
}

    //  mapToSquare returns an array with the original values squared
function mapToSquare(sourceArray) {
    let r = []
        for (let i = 0; i < sourceArray.length; i++ ) {
                r.push(sourceArray[i] * sourceArray[i])
        }
    return r
}

// Reduce Method:

//  reduceToTotal returns a running total when not given a starting point reduces correctly
function reduceToTotal(sourceArray, startingPoint=0){
    let sum = startingPoint
    for (let i = 0; i < sourceArray.length; i++ ) {
       sum = sourceArray[i] + sum
       }
       return sum
    }

//    reduceToAllTrue returns true when all values are truthy
  function reduceToAllTrue(sourceArray){
      for(let i = 0; i < sourceArray.length; i++ ) {
      if (!sourceArray[i])
        return false
    }
      return true
   }

  function reduceToAnyTrue(sourceArray) {
      for( let i = 0; i < sourceArray.length; i++ ) {
      if (sourceArray[i])
        return true
      }
      return false


    }

