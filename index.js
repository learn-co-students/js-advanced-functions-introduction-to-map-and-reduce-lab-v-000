function mapToNegativize(src) {
    let r = []
    for (let i = 0; i < src.length; i++ ) {
      r.push(-1 * src[i]) // Unique work
    }
    return r
  }
   
  function mapToNoChange(src) {
    let r = []
    for (let i = 0; i < src.length; i++ ) {
      r.push(src[i]) // Unique work
    }
    return r
  }
   
  function mapToDouble(src) {
    let r = []
    for (let i = 0; i < src.length; i++ ) {
      r.push(2 * src[i]) // Unique work
    }
    return r
  }
   
  function mapToSquare(src) {
    let r = []
    for (let i = 0; i < src.length; i++ ) {
      r.push(src[i] * src[i]) // Unique work
    }
    return r
  }

// function reduceToTotal(sourceArray, startingPoint=0) {
//     const reducer = function(accumulator, startingPoint) {
//         return (accumulator + startingPoint)
//     };
//     return sourceArray.reduce(reducer, startingPoint);
// }

function reduceToTotal(sourceArray, startingPoint) {
    let startingPoint = 0

    for(src of sourceArray) {
        i += i 
    }
    return startingPoint + i
}

// function reduceToAllTrue(sourceArray) {
//     const reducer = function(accumulator, currentValue) {
//         if(!!accumulator == true && !!currentValue == true) {
//             return true
//         } 
//         else {
//             return !!false
//         }
//     }
//     return sourceArray.reduce(reducer, true)
// }

// function reduceToAnyTrue(sourceArray) {
//     const reducer = function(accumulator, currentValue) {
//         if(accumulator == true) {
//             return true
//         }
//         else {
//                 return !!currentValue
//         }
//     }
//     return sourceArray.reduce(reducer, false)
// }
