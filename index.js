// Your code here
const mapToNegativize = (sourceArray) => {
    let arr = [];
    for(let i = 0; i < sourceArray.length; i++){
        arr.push(sourceArray[i] * -1);
    }
    return arr;
}
const mapToNoChange = (sourceArray) => {
    let arr = [];
    for(let i = 0; i < sourceArray.length; i++){
        arr.push(sourceArray[i]);
    }
    return arr;
}
const mapToDouble = (sourceArray) =>{
    let arr = [];
    for(let i = 0; i < sourceArray.length; i++){
        arr.push(sourceArray[i] * 2);
    }
    return arr;
}
const mapToSquare = (sourceArray) =>{
    let arr = [];
    for(let i = 0; i < sourceArray.length; i++){
        arr.push(sourceArray[i] ** 2);
    }
    return arr;
}

const reduceToTotal = (sourceArray, startingPoint) => {
    let v = startingPoint ? startingPoint : 0;
    for(let i = 0; i < sourceArray.length; i++){
        v += sourceArray[i];
    }
    return v;
}
const reduceToAllTrue = (sourceArray) => {
    let v = true;
    for(let i = 0; i < sourceArray.length; i++){
        if(sourceArray[i]){
            v = true;
        }else{
            v = false;
            break;
        }
    }
        return v;
}
const reduceToAnyTrue = (sourceArray) => {
    let v = true;
    for(let i = 0; i < sourceArray.length; i++){
        if(!sourceArray[i]){
            v = false;
        }else{
            v = true;
            break;
        }
    }
        return v;
}
