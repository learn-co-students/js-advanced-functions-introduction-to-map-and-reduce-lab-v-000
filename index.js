// Your code here
function mapToNegativize(sourceArray) {
    for (var i = 0; sourceArray.length > i; i++) {
        sourceArray[i] *= -1
    }
    return sourceArray
}

function mapToNoChange(sourceArray) {
    return sourceArray
}

function mapToDouble(sourceArray) {
    for (var i = 0; sourceArray.length > i; i++) {
        sourceArray[i] *= 2
    }
    return sourceArray
}

function mapToSquare(sourceArray) {
    for (var i = 0; sourceArray.length > i; i++) {
        sourceArray[i] *= sourceArray[i]
    }
    return sourceArray
}


function reduceToTotal(sourceArray, startingPoint = 0) {
    var total = startingPoint
    for (var i = 0; sourceArray.length > i; i++) {
        total += sourceArray[i]
    }
    return total 

}
function reduceToAllTrue(sourceArray) {
    var truthyValue = true
    for (var i = 0; sourceArray.length > i; i++) {
        if (sourceArray[i] === false) {
            truthyValue = false
        }
    }
    return truthyValue

}
function reduceToAnyTrue(sourceArray) {
    var truthyValue = false
    for (var i = 0; sourceArray.length > i; i++) {
        if (sourceArray[i] === true) {
            truthyValue = true
        }
    }
    return truthyValue

}