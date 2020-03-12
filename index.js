// Your code here

// map-like

function mapToSomething(x){
    return (sourceArray)=>{
    for (let i = 0; i < sourceArray.length; i++) {
        sourceArray[i] = sourceArray[i] * x;
    }
    return sourceArray
    }
}

function mapToExponent(x) {
    return (sourceArray) => {
        for (let i = 0; i < sourceArray.length; i++) {
            sourceArray[i] = sourceArray[i] ** x;
        }
        return sourceArray
    }
}


const mapToNegativize = mapToSomething(-1) 

// suppose to return the array that was passed
const mapToNoChange = mapToSomething(1)
const mapToDouble = mapToSomething(2)
const mapToSquare = mapToExponent(2)


// reduce-like

function reduceToFunction(){
    return (sourceArray, startingPoint = 0) => {
      let result = startingPoint; 
      for (let i = 0; i < sourceArray.length; i++) {
          result += sourceArray[i];
      }
      return result
    }
}
    

function reduceToAllTrue(sourceArray){
    let array = [];
    for (let i = 0; i < sourceArray.length; i++) {
        array.push(!!sourceArray[i])
    }

    if (array.every((value,i) => value === array[i+1])) {
        return array[0]
    }
    if (array.includes(false)) {
        return false
    } else {
        return true
    }

}

function reduceToAnyTrue(sourceArr) {

    for (let i = 0; i < sourceArr.length; ++i) {
        if (sourceArr[i] === true) {
            return true
        }
    }
    return false
}


const reduceToTotal = reduceToFunction()


