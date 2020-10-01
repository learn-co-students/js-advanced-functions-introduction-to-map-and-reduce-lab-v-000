// Your code here
function mapToNegativize(src) {
    let r = []
    for (let i = 0; i < src.length; i++) {
        r.push(-1 * src[i]) // Unique work
    }
    return r
}

function mapToNoChange(src) {
    let r = []
    for (let i = 0; i < src.length; i++) {
        r.push(src[i]) // Unique work
    }
    return r
}

function mapToDouble(src) {
    let r = []
    for (let i = 0; i < src.length; i++) {
        r.push(2 * src[i]) // Unique work
    }
    return r
}

function mapToSquare(src) {
    let r = []
    for (let i = 0; i < src.length; i++) {
        r.push(src[i] * src[i]) // Unique work
    }
    return r
}

function reduceToTotal(memo, currentValue=0) {
    // let t = []
    for (let i = 0; i< src.length; i++) {
    return currentValue + memo[i]
    }
}

// Reduce
// 10 + 20 = 30 + 30 = 60 + 40 = 100
// [10, 20, 30, 40].reduce(function (memo, i) { return memo + i }) //=> 100

// callback(accumulator, currentValue) => accumulator + currentValue;