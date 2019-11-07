// Your code here
function mapToNegativize(arr) {
    let newArr = []
    for(let i =0; i< arr.length; i++) {
        newArr.push(arr[i]*-1)
    }
    return newArr
}

function mapToNoChange(arr) {
    return arr
}

function mapToDouble(arr) {
    let newArr = []
    for(let i = 0; i<arr.length; i++) {
        newArr.push(arr[i]*2)
    }
    return newArr
}

function mapToSquare(arr) {
    let newArr = []
    for(let i = 0; i<arr.length; i++) {
        newArr.push(arr[i] * arr[i])
    }
    return newArr;
}



function reduceToTotal(arr, start = 0) {
    
    for(let i = 0; i< arr.length; i++) {
        start += arr[i]
    }
    return start
}
function reduceToAllTrue(arr) {
    
    for(let i = 0; i< arr.length; i++) {
        if(arr[i] === false || arr[i] === undefined) {
            return false
        }
    }
    return true
}

function reduceToAnyTrue(arr) {
    for(let i = 0; i< arr.length; i++) {
        if(arr[i] === true) {
            return true
        }
    }
    return false;
}