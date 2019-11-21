function mapToNegativize(sourceArray) {
    let newArr = []
    for (const element of sourceArray) {
        newArr.push(element * -1)
    }
    return newArr
}

function mapToNoChange(sourceArray) {
    let newArr = []
    for (const element of sourceArray) {
        newArr.push(element)
    }
    return newArr 
}


function mapToDouble(sourceArray) {
    let newArr = []
    for (const element of sourceArray) {
        newArr.push(element * 2)
    }
    return newArr 
}
function mapToSquare(sourceArray) {
    let newArr = []
    for (const element of sourceArray) {
        newArr.push(element * element)
    }
    return newArr 
}

function reduceToTotal(sourceArray, startingPoint = 0) {
    let total = startingPoint
    for (const element of sourceArray) {
        total = total + element
    }
    return total
}

function reduceToAllTrue(sourceArray) {
    for (const element of sourceArray) {
        if (!!element === false) {
            return false
        }
    }
    return true
}

function reduceToAnyTrue(sourceArray) {
    for (const element of sourceArray) {
        if (!!element === true) {
            return true
        }
    }
    return false
}
