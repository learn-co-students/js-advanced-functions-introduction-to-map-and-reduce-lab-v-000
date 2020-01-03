// Your code here
// https://learn.co/tracks/full-stack-web-development-v8/module-14-front-end-web-programming-in-javascript/section-9-advanced-function-usage/js-advanced-functions-introduction-to-map-and-reduce-lab

// sourceArray = [1, 2, 3, 4, 5, 6]

// mapToNegativize returns an array with all values made negative
function mapToNegativize(sourceArray) {
  let nuArray = []

  // NOTE: this pattern is not commensurate with the Flatiron cirriculum but it
  // seems to work...it does require an extra line though, the Flatiron method
  // is shown in the 'Alternative' below and is more complicated in my view:
                                     // => Alternative: let item = []
  for (let element of sourceArray) { // => Alternative: for (let i = 0; i < sourceArray.length; i++) {
    let item = element * -1;         // => Alternative:   item.push(-1 * sourceArray[i]);
    nuArray.push(item);              // => Alternative: }
  }
  return nuArray;
}

// This one's kinda silly because it literally does nothing.
function mapToNoChange(sourceArray) {
  return sourceArray
}

// This one will multiply each item in the array by 2
function mapToDouble(sourceArray) {
  let myModifiedArray = [] // start with a new, empty array.
  for (let i = 0; i < sourceArray.length; i++) { // here's the archetypal pattern Flatiron School uses.
    myModifiedArray.push(sourceArray[i] * 2)     // multiply each one by 2 & send them to the new array
  }
  return myModifiedArray;
}

// This one is almost the same as the one above except "*" becomes "**"
function mapToSquare(sourceArray) {
  let myModifiedArray = [] // start with a new, empty array.
  for (let i = 0; i < sourceArray.length; i++) { // here's the archetypal pattern Flatiron School uses.
    myModifiedArray.push(sourceArray[i] ** 2)     // square & send them to the new array
  }
  return myModifiedArray;
}

// https://stackoverflow.com/questions/1230233/how-to-find-the-sum-of-an-array-of-numbers
// [1, 2, 3, 4].reduce((a, b) => a + b, 0) => This will equal "10"
function reduceToTotal(sourceArray, startingPoint = 0) {
  return sourceArray.reduce((a, b) => a + b, startingPoint)
}


function reduceToAllTrue(sourceArray) {
  for (let i = 0; i < sourceArray.length; i++) {
    if(!sourceArray[i]) {
      return false
      }
  }
  return true
}

function reduceToAnyTrue(sourceArray) {
  for (let i = 0; i < sourceArray.length; i++) {
    if(sourceArray[i]) {
      return true
      }
  }
  return false
}
