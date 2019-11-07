// Your code here

function mapToNegativize(array) {
    return array.map(num => num * -1)
}

function mapToNoChange(array) {
    return array;
}

function mapToDouble(array) {
    return array.map(num => num * 2)
}

function mapToSquare(array) {
    return array.map(num => num ** 2)
}

function reduceToTotal(array, startingPoint=0) {
    return array.reduce(function (total, num) {
        return total + num;
    }, startingPoint)
}

function reduceToAllTrue(array) {
    return array.reduce(function (accumulator, currentValue) {
        if (accumulator && currentValue) {
            return true
        } else {
            return false
        }
    })
}

function reduceToAnyTrue(array) {
    return array.reduce(function (accumulator, currentValue) {
        if (accumulator || currentValue) {
            return true
        } else {
            return false
        }
    })
}