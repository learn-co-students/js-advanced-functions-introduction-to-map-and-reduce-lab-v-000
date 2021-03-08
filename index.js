// Your code here
function mapToNegativize(array){
    let new_array = []
    for(let i = 0; i < array.length; i++){
        new_array.push(array[i] * -1)
    }
    return new_array
}

function mapToNoChange(array){
    return array
}

function mapToDouble(array){
    let new_array = []
    for(let i = 0; i < array.length; i++){
        new_array.push(array[i] * 2)
    }
    return new_array
}

function mapToSquare(array){
    let new_array = []
    for(let i = 0; i < array.length; i++){
        new_array.push(array[i]**2)
    }
    return new_array
}

function reduceToTotal(array, starting=0){
    let total = starting
    for(let i=0; i<array.length; i++){
        total = total + array[i]
    }
    return total
}

function reduceToAllTrue(array){
    for(let i = 0; i < array.length; i++){
        if(!array[i]){
            return false
        }
    }
    return true
}

function reduceToAnyTrue(array){
    for(let i = 0; i < array.length; i++){
        if(array[i]){
            return true
        }
    }
    return false
}