// Your code here

function mapToNegativize(array) {
    let array2 = []
    array.forEach((item) => {
    array2.push(item * -1)
  });
return array2
}


function mapToNoChange(array){
  return array
}


function mapToDouble(array) {
  let array2 = []
  array.forEach((item) => {
  array2.push(item * 2)
});
  return array2
}

function mapToSquare(array){
  let array2 = []
  array.forEach((item) => {
    array2.push(item ** 2)
  });
   return array2
}



// =============


//

function reduceToAllTrue(array) {
  // debugger
  for (var i = 0; i < array.length; i++) {
    if (array[i] === false) {
      return false
      break;
    }
  }
  return true
}


// function reduceToTotal(sourceArray, startingPoint) {
//   for (let i = 0; i < sourceArray.length; i++) {
//
//   }
// return startingPoint
// }
//


function reduceToTotal(sourceArray, startingPoint=0){
  let runningTotal = startingPoint
  for (var i = 0; i < sourceArray.length; i++) {
    runningTotal += sourceArray[i]
  }
  return runningTotal
}
//
// # .map was messing it up because it returns what you updated. each could
// work also
function reduceToAnyTrue(array){
  for (var i = 0; i < array.length; i++) {
    if (array[i]) {
      return true
    }
  }
  return false
};

// function reduceToAnyTrue(array){
//   array.map((item) => {
//     if item {
//       return true
//       break;
//     }
//     return false
//   });
// };


// function reduceToAnyTrue(array){
//   array.map((item) => {
//     if (Boolean(item) == true) {
//       return true
//     }
//   })
//   return false
// }
//
// function reduceToAnyTrue(array){
//   array.map((item) => {
//     if (Boolean(item) == true) {
//       return true
//     }
//   })
//   return false
// }
