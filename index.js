// Your code here

/* In each mapping function, I need to:
  1. Start with an empty array.
  2. Fill it with values that are the result of performing an action on each of another array's elements.
  3. Return that now-filled array.
*/

function mapToNegativize(arr) {
  const negativizedArray = [];

  for (const number of arr) {
    negativizedArray.push(-1 * number);
  }

  return negativizedArray;
}

function mapToNoChange(arr) {
  const sameArray = [];

  for (const element of arr) {
    sameArray.push(element);
  }

  return sameArray;
}

function mapToDouble(arr) {
  const doubled = [];

  for (const num of arr) {
    doubled.push(num * 2);
  }

  return doubled;
}

function mapToSquare(arr){
  const squared = [];

  for (const num of arr) {
    squared.push(num ** 2);
  }

  return squared;
}

/* I think for the reduce functions, I have to:
  1. Initialize a value/memo/aggregator ("", 0, [], {}, etc.)
  2. For each element in the array:
    a. Perform work on the memo and the element
    b. Set the memo equal to that work
  3. Return that memo

  UPDATE: That's not the case for each function.
*/

function reduceToTotal(array, aggregate = 0) {
  for(const num of array) {
    aggregate += num;
  }
  return aggregate;
}

function reduceToAllTrue(sourceArray) {
  for(let i = 0; i < sourceArray.length; i++) {
    if ( !sourceArray[i] ) { return false; }
  }
  return true;
}

function reduceToAnyTrue(sourceArray) {
  for(const elem of sourceArray) {
    if (!!elem) { return true; }
  }
  return false;
}