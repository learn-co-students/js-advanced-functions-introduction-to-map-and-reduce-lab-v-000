// Your code here
// function mapToNegativize(sourceArray) {
//         var negativize = sourceArray.map(function(num) {
//         return num * -1
//     }) 
//     return negativize
// }

function mapToNegativize(sourceArray) {
    let negativize = []
    for (let i = 0; i < sourceArray.length; i++) {
        // negativize.push(sourceArray[i] * -1)
        negativize.push(sourceArray[i] * -1)
    }
    return negativize
}


function mapToNoChange(sourceArray) {
    let originally = []
    for (let i = 0; i < sourceArray.length; i++) {
        originally.push(sourceArray[i]);
    }
    return originally
}

function mapToDouble(sourceArray) {
    let double = []
    for (let i = 0; i < sourceArray.length; i++) {
        double.push(sourceArray[i] * 2)
    }
    return double
}

function mapToSquare(sourceArray) {
    let square = []
    for (let i = 0; i < sourceArray.length; i++) {
        square.push(sourceArray[i] ** 2)        
    }
    return square
}

function reduceToTotal(sourceArray, startingPoint = 0) {
    let runningTotal = startingPoint
    for (let i = 0; i < sourceArray.length; i++) {
        runningTotal = sourceArray[i] + runningTotal;
    }
    return runningTotal
}
 
function reduceToAllTrue(sourceArray) {
    for (let i = 0; i < sourceArray.length; i++) {
        // if one value in array is NOT truthy
        if (!sourceArray[i]) {
            // return false
            return false 
        }        
    }
    // if all values in array ARE truthy
    return true
}

function reduceToAnyTrue(sourceArray) {
    for (let i = 0; i < sourceArray.length; i++) {
        if (sourceArray[i]) {
            return true
        }
        
    }
    return false
}