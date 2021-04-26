// Your code here
function mapToNegativize(sourceArray) {
  const mappedArray = [];
  for (const element of sourceArray) {
    mappedArray.push(element * -1)
  }
  return mappedArray;
}

function mapToNoChange(sourceArray) {
  const mappedArray = [];
  for (const element of sourceArray) {
    mappedArray.push(element)
  }
  return mappedArray;
}

function mapToDouble(sourceArray) {
  const mappedArray = [];
  for (const element of sourceArray) {
    mappedArray.push(element * 2)
  }
  return mappedArray;
}

function mapToSquare(sourceArray) {
  const mappedArray = [];
  for (const element of sourceArray) {
    mappedArray.push(element ** 2)
  }
  return mappedArray;
}

function reduceToTotal(sourceArray, startingPoint = 0) {
  let total = startingPoint;
  for (const element of sourceArray) {
    total += element
  }
  return total;
}

function reduceToAllTrue(sourceArray) {
  let verdict = true;
  for (const element of sourceArray) {
    if (element === false) {
      verdict = false;
    }
  }
  return verdict;
}

function reduceToAnyTrue(sourceArray) {
  let verdict = false
  for (const element of sourceArray) {
    if (element === true) {
      verdict = true;
    }
  }
  return verdict;
}

