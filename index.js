function mapToNegativize(arr) {
  let newarr = [];
  for (const ele of arr) {
    let n = ele * -1;
    newarr.push(n);
  }
  return newarr;
}

function mapToNoChange(arr) {
  return arr;
}

function mapToDouble(arr) {
  let newarr = [];
  for (const ele of arr) {
    let n = ele * 2;
    newarr.push(n);
  }
  return newarr;
}

function mapToSquare(arr) {
  let newarr = [];
  for (const ele of arr) {
    let n = ele * ele;
    newarr.push(n);
  }
  return newarr;
}

function reduceToTotal(arr, int) {
  let newval = 0;
  if (int) {
    newval = int;
  }

  for (const ele of arr) {
    newval = newval + ele;
  }
  return newval;
}

function reduceToAllTrue(arr) {
  let logic = true;
  for (const ele of arr) {
    if (ele == false) {
      logic = false;
    }
  }
  return logic;
}

function reduceToAnyTrue(arr) {
  let logic = false;
  for (const ele of arr) {
    if (ele == true) {
      logic = true;
    }
  }
  return logic;
}
