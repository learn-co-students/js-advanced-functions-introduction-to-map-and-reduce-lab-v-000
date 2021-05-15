//map
function mapToNegativize(arr){
  const newValues = []
  for (let i of arr){ newValues.push(i * -1) }
  return newValues
}

function mapToNoChange(arr){ return [...arr] }

function mapToDouble(arr){
  const newValues = []
  for (let i of arr){ newValues.push(2 * i) }
  return newValues
}

function mapToSquare(arr){
  const newValues = []
  for (let i of arr){ newValues.push(i * i) }
  return newValues
}


//reduce
function reduceToTotal(arr, value = 0){ 
  for (let i of arr){ value += i }
  return value
}

function reduceToAllTrue(arr){
  for (let i of arr){ if (!i){ return false } }
  return true
}

function reduceToAnyTrue(arr){
  for (let i of arr){ if (i){ return true } }
  return false
}

