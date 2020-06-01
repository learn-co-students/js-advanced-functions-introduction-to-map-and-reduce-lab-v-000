// Your code here
function mapToNegativize(sourceArray) {
    const negativeArray = []

    for (const num of sourceArray) {
        negativeArray.push(num * -1)
    }
    return negativeArray;
}

function mapToNoChange(sourceArray) {
    const newArray = []

    for (const item of sourceArray) {
        newArray.push(item)
    }
    return newArray;
}

function mapToDouble(sourceArray) {
    const doubleArray = []

    for (const num of sourceArray) {
        doubleArray.push(num * 2)
    }
    return doubleArray;
}

function mapToSquare(sourceArray) {
    const squareArray = []

    for (const num of sourceArray) {
        squareArray.push(num ** 2)
    }
    return squareArray;
}

function reduceToTotal(sourceArray, startingPoint = 0) {
    for (const num of sourceArray) {
        startingPoint += num; 
    }
    return startingPoint;
}

function reduceToAllTrue(sourceArray) {
    for (let i = 0; i < sourceArray.length; i++) {
        if (!sourceArray[i]) {
            return false;
        }
    }
    return true;
}

function reduceToAnyTrue(sourceArray) {
    for (const item of sourceArray) {
        if (!!item) {
            return true;
        }
    }
    return false;
}