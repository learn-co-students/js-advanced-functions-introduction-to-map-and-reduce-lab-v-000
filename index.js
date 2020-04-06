// Your code here


function mapToNegativize(sourceArray){
  let arr = [];
  for(let i = 0; i < sourceArray.length; i++){
    arr.push(-1 * sourceArray[i])
  }
  return arr;
}

function mapToNoChange(sourceArray){
  console.log(sourceArray);
  let arr = []
  for(let i = 0; i < sourceArray.length; i++){
    arr.push(sourceArray[i]);
  }
  return arr
}

function mapToDouble(sourceArray){
  let arr = []
  for(let i = 0; i < sourceArray.length; i++){
    arr.push(sourceArray[i] * 2)
  }
  return arr
}

function mapToSquare(sourceArray){
  let arr = []
  for(let i = 0; i < sourceArray.length; i++){
    arr.push(sourceArray[i] * sourceArray[i])
  }
  return arr
}

function reduceToTotal(sourceArray, startingPoint=0){
  let total = startingPoint;
  for(let i = 0; i < sourceArray.length; i++){
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
  // console.log(sourceArray)

function reduceToAnyTrue(sourceArray){
  for(let i = 0; i < sourceArray.length; i++){
    if (sourceArray[i])
      return true
    }
    return false
}
