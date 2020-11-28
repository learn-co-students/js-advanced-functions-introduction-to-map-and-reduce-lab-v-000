function mapToNegativize(array) {
    const newValues = []
    for (let i=0; i<array.length; i++) {
        newValues.push(array[i]*(-1))
    }
    return newValues
}


function mapToNoChange(array) {
    const newArray = []
    for (let i=0; i<array.length; i++) {
        newArray.push(array[i])
    }
    return newArray
}


function mapToDouble(array) {
    const doubledValue = []
    for (let i=0; i<array.length; i++) {
        doubledValue.push(array[i]*2)
    }
    return doubledValue
}


function mapToSquare(array) {
    const squaredValue = []
    for (let i=0; i<array.length; i++) {
        squaredValue.push(array[i]*array[i])
    }
    return squaredValue
}


function reduceToTotal(array,start=0) {
    let answer = start
    for (let i=0; i<array.length; i++) {
        answer = answer+ array[i]
    }
    return answer
}


function reduceToAllTrue(array) {
    for (let i=0; i<array.length; i++) {
        if (!array[i]) {
            return false
        }
    }
    return true
}


function reduceToAnyTrue(array) {
    for (let i=0; i<array.length; i++) {
        if (array[i]) {
            return true
        }
    }
    return false
}