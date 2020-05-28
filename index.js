// Your code here

//shift + option + f to format js code

//[0, 1, 2, 3]
//[1, 2, 3, 9]
//console.log(valueArray[i]);

// mapping is affecting every element
// reducing is adding everything together



function mapToNoChange(valueArray) {
  const sameArray = valueArray;
  return sameArray;
}

function mapToNegativize(valueArray) {
    const negativeArray = [];
    for (var i = 0; i < valueArray.length; i++) {
      var doubleValue = valueArray[i] * -1;
      negativeArray.push(doubleValue);
    }
    return negativeArray;
  }

function mapToDouble(valueArray) {
  const doubleArray = [];
  for (var i = 0; i < valueArray.length; i++) {
    var doubleValue = valueArray[i] * 2;
    doubleArray.push(doubleValue);
  }
  return doubleArray;
}

function mapToSquare(valueArray) {
    const squareArray = [];
    for (var i = 0; i < valueArray.length; i++) {
        var squareValue = valueArray[i] ** 2;
        squareArray.push(squareValue);
    }
    return squareArray;
}

function reduceToTotal(sourceArray, startingpoint = 0) {
    var total = startingpoint
    for(var i=0; i < sourceArray.length; i++) {
        var total = total + sourceArray[i];
    }
    return total
}

function reduceToAllTrue(sourceArray) { //booleans can be added together
    var finalBoolean = true
    for(var i=0; i < sourceArray.length; i++) { //always remember (start at beginning of array; for as long as less than the length; iteration direction usually forward)
        if (sourceArray[i] =="true"?1:0) {
            finalBoolean = finalBoolean + true;
        }
        else if (sourceArray[i] == false) {
            return false;
        }
    }
    return finalBoolean
}

function reduceToAnyTrue(sourceArray) {
    var finalBoolean = false
    for(var i=0; i < sourceArray.length; i++){
        if(sourceArray[i] == true){
            var finalBoolean = true;
            return finalBoolean
        }
    }
    return finalBoolean
}