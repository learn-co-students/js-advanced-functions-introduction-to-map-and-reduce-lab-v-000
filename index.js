// Your code here

	function mapToNegativize(sourceArray) {
	
		let newArray = []
		for (let i = 0; i < sourceArray.length; i++ ) {
			newArray.push(-1 * sourceArray[i])
		}
		return newArray
	}


	function mapToNoChange(sourceArray) {
		let newArray = []
		for (let i = 0; i < sourceArray.length; i++ ) {
			newArray.push(sourceArray[i])
		}
		return newArray
	}

	function mapToDouble(sourceArray) {
		let newArray = []
		for (let i = 0; i < sourceArray.length; i++ ) {
			newArray.push(sourceArray[i] * 2)
		}
		return newArray
	}

	function mapToSquare(sourceArray){
		let newArray = []
		for (let i = 0; i < sourceArray.length; i++ ) {
			newArray.push(sourceArray[i] * sourceArray[i])
		}
		return newArray
	}

	function reduceToTotal(sourceArray, startingPoint=0) {
		let val = startingPoint
		for (let i = 0; i < sourceArray.length; i++ ) {
			val = val + sourceArray[i];
		}
		return val
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
// 	function reduceToAllTrue(sourceArray) {
// 		let truthyVals = []
// 		for (let i = 0; i < sourceArray.length; i++ ) {
// 			if !sourceArray[i] return false
// 			}
// 		return true
// 	}
// 	function reduceToAnyTrue(sourceArray) {
// 		let truthyVals = []
// 		for (let i = 0; i < sourceArray.length; i++ ) {
// 			if sourceArray[i] return true
// 			}
// 		return false

	// }