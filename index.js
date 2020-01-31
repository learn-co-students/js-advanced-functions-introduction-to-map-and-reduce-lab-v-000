// Your code here
function mapToNegativize(data){
    let j = [];
    for (let i=0; i < data.length; i++){
        j.push(data[i] * -1);
    }
  return j
}

function mapToNoChange(data){
    return data
}

function mapToDouble(data){
    let j = [];
    for (let i=0; i < data.length; i++){
        j.push(data[i] * 2);
    }
  return j
}

function mapToSquare(data){
    let j = [];
    for (let i=0; i < data.length; i++){
        j.push(data[i] ** 2);
    }
  return j
}

function reduceToTotal(data, start = 0){
    let j = start;
    for (let i=0; i < data.length; i++){
        j = j + data[i];
    } 
    return j
}

function reduceToAllTrue(data){
    return data.every(x => x);  
}

function reduceToAnyTrue(data){
    return data.some(x => x);  
}