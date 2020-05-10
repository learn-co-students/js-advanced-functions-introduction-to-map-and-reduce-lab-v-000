// Your code here
function mapToNegativize(sourceArray) {
    let negatized = []
    for(let i = 0; i < sourceArray.length; i++){
       negatized.push(sourceArray[i] * -1)
    }
    return negatized
}

function mapToNoChange(sourceArray) {
    let noChange = []
    for(let i = 0; i < sourceArray.length; i++){
      noChange.push(sourceArray[i])
    }
    return noChange
}

function mapToDouble(sourceArray) {
    let doubled = []
    for(let i = 0; i < sourceArray.length; i++){
       doubled.push(sourceArray[i] * 2)
    }
    return doubled
}

function mapToSquare(sourceArray) {
    let squared = []
    for(let i = 0; i < sourceArray.length; i++){
       squared.push(sourceArray[i] ** 2)
    }
    return squared
}

function reduceToTotal(sourceArray, startingPoint = 0) {
    let total = startingPoint
    for(let i = 0; i < sourceArray.length; i++){
      total = (total + sourceArray[i])
    }
    return total
}

function reduceToAllTrue(sourceArray){
    let b = true
    for(let i = 0; i < sourceArray.length; i++){
        if (!!sourceArray[i] === false)
        b = false
      }
    return b
}

function reduceToAnyTrue(sourceArray){
    let b = false
    for(let i = 0; i < sourceArray.length; i++){
        if (!!sourceArray[i] === true)
        b = true
      }
    return b
}