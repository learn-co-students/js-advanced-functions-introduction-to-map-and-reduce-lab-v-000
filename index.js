// Your code here

//let arr = [1,2,3]

function mapToNegativize(arr){
  return arr.map(x => x * -1)

}


function mapToNoChange (arr){
  return arr.map(x => x)
}


function mapToDouble(arr){
  return arr.map(x => x * 2)
}


function mapToSquare(arr){
  return arr.map(x => Math.pow(x ,2))
}

// function reduceToTotal(arr) {
//   return arr.reduce((start, current) => {
//     return start + current;
//   }, 0)
// }


function reduceToTotal(arr, start = 0){
  return arr.reduce(function(start, current){
    return start + current
  }, start)
  //if you don't include the passed-in starting value as the second argument as above - it will use the first value of the array as the starting point In this case, that would be 1
}



function reduceToAllTrue(arr){
  return arr.reduce(function(start, current){
   return Boolean(current) == false ? false : true;
  }, 0)
}

//reduce returns a single value from the array it is operating on
function reduceToAnyTrue(arr){
  return arr.reduce(function(start, current){
   return Boolean(current) == true ? true : false;
  }, 0)
}
