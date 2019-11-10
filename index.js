function mapToNegativize(arr) {
  let a = [];
  for (let el of arr) {
    a.push(-(el))
  }
  return a;
}

function mapToNoChange(arr) {
  let a = [];
  for (let el of arr) {
    a.push(-(el))
  }
  return arr;
}

function mapToDouble(arr) {
  let a = [];
  for (let el of arr) {
    a.push(el * 2)
  }
  return a;
}

function mapToSquare(arr) {
  let a = [];
  for (let el of arr) {
    a.push(el ** 2)
  }
  return a;
}

function reduceToTotal(arr, start = 0) {
  for (let el of arr) {
    start += el
  }
  return start
}

function reduceToAllTrue(arr) {
  for (let el of arr) {
    if (!el) return false
  }
  return true
}


function reduceToAnyTrue(arr) {
  for (let el of arr) {
    if (el) return true
  }
  return false
}



