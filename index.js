// Your code here

function mapToNegativize(array) {
    let result = []
    for (let index = 0; index < array.length; index++) {
        result.push(-1 * array[index])
    }
    return result
}

function mapToNoChange(array) {
    let result = []
    for (let index = 0; index < array.length; index++) {
        result.push(array[index])
    }
    return result
}

function mapToDouble(array) {
    let result = []
    for (let index = 0; index < array.length; index++) {
        result.push(2 * array[index])
    }
    return result
}

function mapToSquare(array) {
    let result = []
    for (let index = 0; index < array.length; index++) {
        result.push(array[index] * array[index])
    }
    return result
}

function reduceToTotal(array, startingPoint=0) {
    let result = startingPoint
    for (let index = 0; index < array.length; index++) {
        result = result + array[index]
    }
    return result
}

function reduceToAllTrue(array) {
    for (let index = 0; index < array.length; index++) {
        if (!array[index]) return false
    }
    return true
}

function reduceToAnyTrue(array) {
    for (let index = 0; index < array.length; index++) {
        if (array[index]) return true
    }
    return false
}