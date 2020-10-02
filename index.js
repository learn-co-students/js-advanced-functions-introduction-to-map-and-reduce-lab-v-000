// Your code here

//using map

// const mapToNegativize = collection => collection.map(x => x * -1);
// ES6 notation
// if {} must include return
// no {} = implicit return

const mapToNegativize = collection => {
  const newCollection = [];
  collection.forEach(element => {
    newCollection.push(element * -1);
  });
  return newCollection;
};

// const mapToNoChange = collection => collection.map(x => x);

const mapToNoChange = collection => {
   const newCollection = [];
   collection.forEach(element => {
     newCollection.push(element);
   });
   return newCollection;
}

// const mapToDouble = collection => collection.map(x => x * 2);

const mapToDouble = collection => {
  const newCollection = [];
  collection.forEach(element => {
    newCollection.push(element * 2);
  });
  return newCollection;
}

// const mapToSquare = collection => collection.map(x => x * x);

const mapToSquare = collection => {
  const newCollection = [];
  collection.forEach(element => {
    newCollection.push(element * element)
  });
  return newCollection;
};

//using reduce

// const reduceToTotal = (collection, startingPoint = 0) => {
//   return collection.reduce((total, value) => {
//     return total + value;
//   }, startingPoint);
// }

const reduceToTotal = (collection, startingPoint = 0) => {
  let result = startingPoint;
  collection.forEach(element => {
    result = result + element
  });
  return result;
}

// const reduceToAllTrue = (collection) => {
//   return collection.reduce((condition, element) => {
//     return condition && !!element;
//   }, true);
// }

const reduceToAllTrue = collection => {
  let condition;
  collection.forEach(element => {
    if (!!element) {
      condition = true;
    } else {
      condition = false;
    };
  });
  return condition;
}
//
// const reduceToAnyTrue = (collection) => {
//   return collection.reduce((condition, element) => {
//     return condition || !!element;
//   }, false);
// }

const reduceToAnyTrue = collection => {
  for( const element of collection) {
    if (!!element) {
      return true;
    };
  };
  return false;
}
