// Your code here
function mapToNegativize(sourceArray){
  return sourceArray.map(element =>  element * -1)
}

function mapToNoChange(sourceArray){
  return sourceArray.map(element => element)
}


function mapToDouble(sourceArray){
  return sourceArray.map(element => element * 2)
}

function mapToSquare(sourceArray){
  return sourceArray.map(element => element * element)
}

function reduceToTotal(sourceArray, startingPoint){
  if (startingPoint){
  return sourceArray.reduce(function(total,currentValue){
     return total + currentValue
   },startingPoint
 )}
 else{
   return sourceArray.reduce(function(total,currentValue){
     return total + currentValue
   })
 }
}

function reduceToAllTrue(sourceArray){
  return sourceArray.reduce(function(total,currentValue){
    if (currentValue){
      return true
    }
    else{
    return false
  }
})
}

function reduceToAnyTrue(sourceArray){
  return sourceArray.reduce(function(total,currentValue){
    if (currentValue){
      return true
    }
    else{
      return false
    }
  })

}
