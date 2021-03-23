// function mapToNegativize(ary){
//   return ary.map(cur=>-Number(cur));
// }
function mapToNegativize(ary){
  const new_ary = []
  ary.forEach(elem=>new_ary.push(-Number(elem)));
  return new_ary;
}

// function mapToNoChange(ary){
//   return ary.map(cur=>cur);
// }
function mapToNoChange(ary){
  const new_ary = []
  ary.forEach(elem=>new_ary.push(elem));
  return new_ary;
}

// function mapToDouble(ary){
//   return ary.map(cur=>2*Number(cur));
// }
function mapToDouble(ary){
  const new_ary = []
  ary.forEach(elem=>new_ary.push(2*Number(elem)));
  return new_ary;
}

// function mapToSquare(ary){
//   return ary.map(cur=>Math.pow(Number(cur),2));
// }
function mapToSquare(ary){
  const new_ary = []
  ary.forEach(elem=>new_ary.push(Math.pow(Number(elem),2)));
  return new_ary;
}

// function reduceToTotal(ary, initialValue){
//   return ary.reduce( (acc, cur)=> acc+cur, !!initialValue?initialValue:0 );
// }
function reduceToTotal(ary,initialValue){
  let accu =!!initialValue?initialValue:0;
  ary.forEach(elem=>accu+=elem);
  return accu;
}

// function reduceToAllTrue(ary){
//   return ary.reduce((acc, cur)=>!!acc&&!!cur)
// }
function reduceToAllTrue(ary){
  console.log(ary);
  let accu=true;
   ary.forEach(elem=> accu= accu&&Boolean(elem));
  return accu;
}

// function reduceToAnyTrue(ary){
//   return ary.reduce((acc, cur)=>!!acc||!!cur)
// }
function reduceToAnyTrue(ary){
  let accu=false;
   ary.forEach(elem=> accu= accu||Boolean(elem));
  return accu;
}
