// Your code here
function mapToNegativize(sourceArray) {
    let negativize = [];
    for (let i = 0; i < sourceArray.length; i++) {
        negativize.push(sourceArray[i] * -1);
    }
    return negativize
}


function mapToNoChange(sourceArray) {
    let originally = [];
    for (let i = 0; i < sourceArray.length; i++) {
        originally.push(sourceArray[i]);
    }
    return originally
}

function mapToDouble(sourceArray) {
    let double = [];
    for (let i = 0; i < sourceArray.length; i++) {
        double.push(sourceArray[i] * 2);
    }
    return double
}

function mapToSquare(sourceArray) {
    let square = [];
    for (let i = 0; i < sourceArray.length; i++) {
        square.push(sourceArray[i] ** 2);
    }
    return square
}

function reduceToTotal(sourceArray, startingPoint) {
    console.log(sourceArray)
    console.log(startingPoint)


}

function reduceToAllTrue(sourceArray) {

}

function reduceToAnyTrue(sourceArray) {

}