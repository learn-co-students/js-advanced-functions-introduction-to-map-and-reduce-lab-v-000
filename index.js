// Your code here
 function mapToNegativize(value) {
     let a = []
     for (let i = 0; i < value.length; i++){
         a.push(-1 * value[i])
     }
     return a
 }

function mapToNoChange(value) {
    let a = []
    for(let i = 0; i < value.length; i++) {
        a.push(value[i])
    }
    return a
}

function mapToDouble(value) {
    let a = []
    for(let i = 0; i < value.length; i++) {
        a.push(2 * value[i])
    }
    return a
}

function mapToSquare(value) {
    let a = []
    for (let i = 0; i < value.length; i++) {
        a.push(value[i] * value[i])
    }
    return a
}

function reduceToTotal(value, startingAmount = 0) {
    let total = startingAmount
    for (let i = 0; i < value.length; i++) {
        total = total + value[i]
    }
    return total
}

function reduceToAllTrue (value) {
    for (let i = 0; i < value.length; i++) {
        if (!value[i]) return false
    }
    return true
}

function reduceToAnyTrue(value) {
    for (let i = 0; i < value.length; i++) {
        if (value[i]) return true
    }
    return false
}