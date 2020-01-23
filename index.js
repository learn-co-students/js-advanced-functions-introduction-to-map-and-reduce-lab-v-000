function mapToNegativize(sourceArray) {
  let newArray = [];
  for (const el of sourceArray) {
    newArray.push(el * -1);
  }
  return newArray;
};

function mapToNoChange(sourceArray) {
  let newArray = [];
  for (const el of sourceArray) {
    newArray.push(el);
  }
  return newArray;
};

function mapToDouble(sourceArray) {
  let newArray = [];
  for (const el of sourceArray) {
    newArray.push(el * 2);
  }
  return newArray;
};

function mapToSquare(sourceArray) {
  let newArray = [];
  for (const el of sourceArray) {
    newArray.push(el ** 2);
  }
  return newArray;
};


function reduceToTotal(sourceArray, startingPoint) {
  let total;
  startingPoint ? total = startingPoint : total = 0;
  for (const el of sourceArray) {
    total += el;
  }
  return total;
};

function reduceToAllTrue(sourceArray) {
  let bool = true;
  for (const el of sourceArray) {
    Boolean(el) ? true : bool = false;
  }
  return bool;
};

function reduceToAnyTrue(sourceArray) {
  let bool = false;
  for (const el of sourceArray) {
    Boolean(el) ? bool = true : false;
  }
  return bool;
};
