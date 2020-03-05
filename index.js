function mapToNegativize(sourceArray) {
    return sourceArray.map(num => num * -1) 
}

function mapToNoChange(sourceArray) {
    return sourceArray.map(num => num) 
}

function mapToDouble(sourceArray) {
    return sourceArray.map(num => num*2)
}

function mapToSquare(sourceArray) {
    return sourceArray.map(num => num**2)
}

function reduceToTotal(sourceArray, startingPoint=0){
    let  total = startingPoint
    for(let i=0; i<sourceArray.length; i++){
       total += sourceArray[i]
    }
    return total
}

function reduceToAllTrue(sourceArray){
    for(let i=0; i<sourceArray.length; i++){
        if (!sourceArray[i])
            return false
    }
    return true
}

function reduceToAnyTrue(sourceArray) {
    for(let i=0; i<sourceArray.length; i++) {
        if (sourceArray[i])
            return true 
    }
    return false 
}

