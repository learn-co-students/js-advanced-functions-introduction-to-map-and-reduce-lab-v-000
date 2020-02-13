// Your code here

const mapMod = (arr, mod) => {
  const modArr = [];
  
  for(const elem of arr){
    modArr.push(elem * mod);
  }
  
  return modArr; 
};

const mapToNegativize = (arr) => {
  return mapMod(arr, -1);
};

const mapToNoChange = (arr) => {
  return arr;
};

const mapToDouble = (arr) => {
  return mapMod(arr, 2);
};

const mapToSquare = (arr) => {
  const modArr = [];
  
  for(const elem of arr){
    modArr.push(elem ** 2);
  }
  return modArr;
};

const reduceToTotal = (arr, initVal = 0) => {
  let total = initVal;
  
  for(const elem of arr){
    total += elem;
  }
  
  return total;
}

const reduceToAllTrue = (arr) => {
  for(const elem of arr){
    if(elem === false){
      return false;
    }
  }
  return true;
}

const reduceToAnyTrue = (arr) => {
  for(const elem of arr){
    if(elem === true){
      return true;
    }
  }
  return false;
}