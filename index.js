// Your code here
// function mapToNegativize(sourceArray) {
//         var negativize = sourceArray.map(function(num) {
//         return num * -1
//     }) 
//     return negativize
// }

function mapToNegativize(sourceArray) {
    let negativize = []
    for (let i = 0; i < sourceArray.length; i++) {
        // negativize.push(sourceArray[i] * -1)
        negativize.push(sourceArray[i] * -1)
    }
    return negativize
}


function mapToNoChange(sourceArray) {
    let originally = []
    for (let i = 0; i < sourceArray.length; i++) {
        originally.push(sourceArray[i]);
    }
    return originally
}

function mapToDouble(sourceArray) {
    let double = []
    for (let i = 0; i < sourceArray.length; i++) {
        double.push(sourceArray[i] * 2)
    }
    return double
}

function mapToSquare(sourceArray) {
    let square = []
    for (let i = 0; i < sourceArray.length; i++) {
        square.push(sourceArray[i] ** 2)        
    }
    return square
}

function reduceToTotal(sourceArray, startingPoint = 0) {
    let runningTotal = startingPoint
    for (let i = 0; i < sourceArray.length; i++) {
        runningTotal = sourceArray[i] + runningTotal;
    }
    return runningTotal
}
 
function reduceToAllTrue(sourceArray) {
    console.log(sourceArray, "sourceArray")
    let runningTotal = sourceArray
    console.log(runningTotal, "runningTotal")
    for (let i = 0; i < sourceArray.length; i++) {
        runningTotal = sourceArray[i]
        return true
        
    }
    

}
    // let runningTotal = []
    // for (let i = 0; i < sourceArray.length; i++) {
    //     let runningTotal = (sourceArray, runningTotal) => sourceArray + runningTotal;
    //     console.log(runningTotal, "running Total") // [Function: _runningTotal2] running Total
    //     console.log(sourceArray, "source Array") // [ 1, 2, true, 'razmatazz' ] source Array
    //     return (sourceArray.reduce(runningTotal))
    // }

    
    // console.log(sourceArray, "Original Source Array") [ 1, 2, true, 'razmatazz' ] Original Source Array
    // let runningTotal = (sourceArray, runningTotal) => sourceArray + runningTotal;
    // console.log(sourceArray, "Second Source Array") // [ 1, 2, true, 'razmatazz' ] Original Source Array
    // console.loog(runningTotal, "Running Total")
    // return (sourceArray.reduce(runningTotal))
}

function reduceToAnyTrue(sourceArray) {

}