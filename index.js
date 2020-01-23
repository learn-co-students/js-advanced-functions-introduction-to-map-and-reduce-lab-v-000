// Map Functions

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


// Reduce Functions

function reduceToTotal(sourceArray, startingPoint = 0) {
  let total = startingPoint;
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

// Alternate Solution

// function reduceToAllTrue(sourceArray) {
//   for (const el of sourceArray) {
//     if (!el) return false;
//   }
//   return true;
// };

function reduceToAnyTrue(sourceArray) {
  let bool = false;
  for (const el of sourceArray) {
    Boolean(el) ? bool = true : false;
  }
  return bool;
};

// Alternate Solution

// function reduceToAnyTrue(sourceArray) {
//   for (const el of sourceArray) {
//     if (el) return true;
//   }
//   return false;
// };
