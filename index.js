// Your code here
function map(array, query) {
  const collection = []
  for (const element of array) {
    const result = query(element)
    if (Boolean(result)) {
      collection.push(result)
    }
  }
  return collection
}


function mapToNegativize(array) {
  return map(array, (item)=>{
    return -item
  })
}

function mapToNoChange(array) {
  return map(array, (item)=>{
    return item
  })
}
function mapToDouble(array) {
  return map(array, (item)=>{
    return item * 2
  })
}

function mapToSquare(array) {
  return map(array, (item) => {
    return item * item
  })
}

function reduce(array, func) {
  let lastItem = array[0];

  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    let result = func(item, lastItem, i)

    lastItem = result
  }
  return lastItem
}


function reduceToTotal(array, startNum=null) {
  (startNum) ? array.unshift(startNum) : null
  return reduce(array, (item, lastItem, i)=>{
    return (i > 0) ? item + lastItem : item
  })
}

function reduceToAllTrue(array) {
  return reduce(array, (item) => {
    return (!!item) ? true : false
  })
}

function reduceToAnyTrue(array) {
  return reduce(array, (item) => {
    return (!item) ? false : true
  })
}