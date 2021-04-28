// Your code here
function mapToNegativize(source) {
    let a = [];
    for(let i=0; i < source.length; i++) {
        a.push(source[i] * -1);
    }
    return a
}

function mapToNoChange(source) {
    let a = [];
    for(let i=0; i < source.length; i++) {
        a.push(source[i]);
    }
    return a
}

function mapToDouble(source) {
    let a = [];
    for(let i=0; i < source.length; i++) {
        a.push(source[i]*2);
    }
    return a
}

function mapToSquare(source) {
    let a = [];
    for(let i=0; i < source.length; i++) {
        a.push(source[i] * source[i]);
    }
    return a
}

function reduceToTotal(source, startingPoint=0) {
    let total = startingPoint;
    for(let i=0; i < source.length; i++) {
        total = total + source[i];
    }
    return total;
}

function reduceToAllTrue(source) {
    for(let i=0; i < source.length; i++) {
        if (!source[i]) return false;
    }
    return true;
}

function reduceToAnyTrue(source) {
    for(let i=0; i < source.length; i++) {
        if (source[i]) return true;
    }
    return false;
}