// Your code here
function mapToNegativize(arr) {
    const negativized = [];
    
    arr.forEach(el => {
        negativized.push(el * -1);
    })
    return negativized;
}

function mapToNoChange(arr) {
    return arr;
}

function mapToDouble(arr) {
    const doubled = [];

    arr.forEach(el => {
        doubled.push(el * 2);
    })
    return doubled;
}

function mapToSquare(arr) {
    const squared = [];

    arr.forEach(el => {
        squared.push(el * el);
    })
    return squared;    
}

function reduceToTotal(arr, init=0) {
    let total = init;

    arr.forEach(el => {
        total += el;
    })
    return total;
}

function reduceToAllTrue(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (!arr[i]) {
            return false;
        } 
    }
    return true;
}

function reduceToAnyTrue(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) {
            return true;
        } 
    }
    return false;

}