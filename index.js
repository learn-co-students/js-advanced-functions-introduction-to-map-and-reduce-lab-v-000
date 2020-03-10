// Your code here

// map-like


function mapToSomething(x){
    return (sourceArray)=>{
    for (let i = 0; i < sourceArray.length; i++) {
        sourceArray[i] = sourceArray[i] * x;
    }
    return sourceArray
    }
}

function mapToExponent(x) {
    return (sourceArray) => {
        for (let i = 0; i < sourceArray.length; i++) {
            sourceArray[i] = sourceArray[i] ** x;
        }
        return sourceArray
    }
}


const mapToNegativize = mapToSomething(-1) 

// suppose to return the array that was passed
const mapToNoChange = mapToSomething(1)
const mapToDouble = mapToSomething(2)
const mapToSquare = mapToExponent(2)







// reduce-like


function reduceToTotal(sourceArray, startingPoint){

}
function reduceToAllTrue(sourceArray){

}
function reduceToAnyTrue(sourceArray){

}

