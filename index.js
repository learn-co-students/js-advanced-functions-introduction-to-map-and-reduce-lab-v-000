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
  
  function reduceToTotal(src, startingPoint=0) {
    let total = startingPoint
    for (let i = 0; i < src.length; i++ ) {
      total = total + src[i]
    }
    return total
  }
  
  function reduceToAllTrue(src) {
    for (let i = 0; i < src.length; i++ ) {
      if (!src[i]) return false
    }
    return true
  }
  
  function reduceToAnyTrue(src) {
    for (let i = 0; i < src.length; i++ ) {
      if (src[i]) return true
    }
    return false
  }

  
// Tests passing:
//   my own map-like methods
//     mapToNegativize returns an array with all values made negative
//       ✓ transforms correctly
//       mapToNoChange returns an array with the original values
//         ✓ transforms correctly
//       mapToDouble returns an array with the original values multiplied by 2
//         ✓ transforms correctly
//       mapToSquare returns an array with the original values squared
//         ✓ transforms correctly

//   my own reduce-like methods
//     reduceToTotal returns a running total when not given a starting point
//       ✓ reduces correctly
//     reduceToTotal returns a running total when given a starting point
//       ✓ reduces correctly
//     reduceToAllTrue returns true when all values are truthy
//       ✓ reduces correctly
//     reduceToAllTrue returns false when any value is falsy
//       ✓ reduces correctly
//     reduceToAnyTrue returns true when a true value is present
//       ✓ reduces correctly
//     reduceToAnyTrue returns false when no true value is present
//       ✓ reduces correctly


//   10 passing (10s)