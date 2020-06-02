const mapToNegativize = function(sourceArray){
    let newArray = sourceArray.map(x => x * -1 );
    return newArray;
}

const mapToNoChange = function(sourceArray){
    let newArray = sourceArray.map(x => x );
    return newArray;
}

const mapToDouble = function(sourceArray){
    let newArray = sourceArray.map(x => x * 2 );
    return newArray;
}

const mapToSquare = function(sourceArray){
    let newArray = sourceArray.map(x => x ** 2 );
    return newArray;
}

const reducer = (accumulator, currentValue) => accumulator + currentValue;
let reduceToTotal = function(sourceArray, startingPoint = 0){
    let totalValue = sourceArray.reduce(reducer, startingPoint)
    return totalValue;   
}

function reduceToAllTrue(sourceArray) {
    for (let i = 0; i < sourceArray.length; i++ ) {
      if (!sourceArray[i]) return false
    }
    return true
  }
  
  function reduceToAnyTrue(sourceArray) {
    for (let i = 0; i < sourceArray.length; i++ ) {
      if (sourceArray[i]) return true
    }
    return false
  }




