// Your code here
function mapToNegativize(arr) {
  let newArr = [];
  arr.forEach(elem => {
    newArr.push(elem * -1);
  });
  return newArr;
}

function mapToNoChange(arr) {
  return arr;
}

function mapToDouble(arr) {
  let newArr = [];
  arr.forEach(elem => {
    newArr.push(elem * 2);
  });
  return newArr;
}

function mapToSquare(arr) {
  let newArr = [];
  arr.forEach(elem => {
    newArr.push(elem ** 2);
  });
  return newArr;
}

function reduceToTotal(arr, i = 0) {
  arr.forEach(elem => {
    i = elem + i
  });
  return i;
}

function reduceToAllTrue(arr) {
  let elem = true;
  let i = 0;
  while (i < arr.length && elem == true) {
    elem = !!arr[i];
    i++;
  };
  return elem;
}

function reduceToAnyTrue(arr) {
  let elem = false;
  let i = 0;
  while (i < arr.length && elem == false) {
    elem = !!arr[i];
    i++;
  };
  return elem;
}
