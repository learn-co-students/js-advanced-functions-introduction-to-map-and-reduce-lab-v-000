// Your code here


function mapToNegativize(sourceArray){
  let negativeArray = [];
  sourceArray.forEach((element) => {
    // return negativeArray.push(-Math.abs(element));
    return negativeArray.push(element*(-1));
  })
  return negativeArray;
}

function mapToNoChange(sourceArray){
  let newArray = [];
  sourceArray.forEach((element) => {
    return newArray.push(element);
  });
  return newArray;
}

function mapToDouble(sourceArray){
  let doubledArray = [];
  sourceArray.forEach((element) => {
      return doubledArray.push(element*2);
  });
  return doubledArray;
}

function mapToSquare(sourceArray){
  let squaredArray = [];
  sourceArray.forEach((element) => {
      return squaredArray.push(element*element);
  });
  return squaredArray;
}

function reduceToTotal(sourceArray, startingPoint=0){
  let newValue = 0;
  sourceArray.forEach((element) => {
        return newValue = newValue + element;
      });
  return newValue = newValue + startingPoint;
}

function reduceToAllTrue(sourceArray) {
  let myBoolean;
  sourceArray.forEach((item) => {

    if (Boolean(item) === false) {
      return myBoolean = false;
    } else {
      return myBoolean = true;
    }
  });
  return myBoolean;
}

function reduceToAnyTrue(sourceArray) {
  let myBoolean;
  sourceArray.forEach((item) => {
    if (Boolean(item) === true) {
      return myBoolean = true;
    } else {
      return myBoolean = false
    }
  });
  return myBoolean;
}
