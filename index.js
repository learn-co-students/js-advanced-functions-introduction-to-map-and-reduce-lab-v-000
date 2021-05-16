// Your code here

// map-like methods
function mapToNegativize(mapArray) {
    const returnArray = [];
    for (const item of mapArray) {
        returnArray.push(item * -1);
    }
    return returnArray;
};

function mapToNoChange(mapArray) {
    return mapArray;
};

function mapToDouble(mapArray) {
    const returnArray = [];
    for (const item of mapArray) {
        returnArray.push(item * 2);
    }
    return returnArray;
};

function mapToSquare(mapArray) {
    const returnArray = [];
    for (const item of mapArray) {
        returnArray.push(item * item);
    }
    return returnArray;
};

// reduce-like methods
function reduceToTotal(reduceArray, start=0) {
    let returnValue = start;
    for (const item of reduceArray) {
        returnValue += item;
    }
    return returnValue;
};

function reduceToAllTrue(reduceArray) {
    let returnValue;
    for (const item of reduceArray) {
        !!item === true ? returnValue = true : returnValue = false;
    }
    return returnValue;
};

function reduceToAnyTrue(reduceArray) {
    let returnValue = false;
    for (const item of reduceArray) {
        if (!!item === true) {
            returnValue = true;
        }
    }
    return returnValue;
};