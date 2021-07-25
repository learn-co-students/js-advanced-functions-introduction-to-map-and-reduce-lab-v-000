// Your code here
const mapToNegativize = function(array){
    let nA = []

    for (let i = 0; i < array.length; i++){
        nA.push(array[i] * -1);
    };

    return nA 
};

const mapToNoChange = function(array){
    let nA = []

    for (let i = 0; i < array.length; i++){
        nA.push(array[i])
    }

    return nA
};

const mapToDouble = function(array){
    let nA = []
        for (let i = 0; i < array.length; i++){
            nA.push(array[i] * 2)
        }
        return nA
};

function mapToSquare(array){
    let nA = []
    for (let i = 0; i < array.length; i++){
        nA.push(array[i] ** 2)
    }
    return nA
};

function reduceToTotal(srcArray, startingPoint = 0){
    let memo = startingPoint
    for (let i = 0; i < srcArray.length; i++){
        memo = memo + srcArray[i]
    };
    return memo; 
};

function reduceToAllTrue(srcArray){
    for (let i = 0; i < srcArray.length; i++){
        if (!srcArray[i]){
            return false
        }
    }
    return true 
}; 

function reduceToAnyTrue(srcArray){
    for (let i = 0; i < srcArray.length; i++){
        if (srcArray[i]){
            return true
        }
    
    }
    return false 
};