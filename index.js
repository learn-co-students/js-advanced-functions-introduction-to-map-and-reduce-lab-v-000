// Your code here
function mapToNegativize(array) {
    const newArray = []
    for (let i = 0; i < array.length; i++) {
        newArray.push(array[i] * -1)

    }
    return newArray
};

function mapToNoChange(array) {
    const newArray = []
    for (let i = 0; i < array.length; i++) {
        newArray.push(array[i])
    }
    return newArray
};

function mapToDouble(array) {
    const newArray = []
    for (let i = 0; i < array.length; i++) {
        newArray.push(array[i] * 2)
    }
    return newArray
};

function mapToSquare(array) {
    const newArray = []
    for (let i = 0; i < array.length; i++) {
        newArray.push(array[i] ** 2)
    }
    return newArray
};

function reduceToTotal(sourceArray, startingPoint = 0) {
    for (let i = 0; i < sourceArray.length; i++) {
        startingPoint = startingPoint + sourceArray[i]
    }
    return startingPoint
};

function reduceToAllTrue(sourceArray) {
    let output = true
    for (let i = 0; i < sourceArray.length && output == true; i++) {   
       output = !!sourceArray[i]
    } 
    return output
};

function reduceToAnyTrue(sourceArray) {
    let output = false
    for (let i = 0; i < sourceArray.length && output == false; i++) {   
       output = !!sourceArray[i]
    } 
    return output
};