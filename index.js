function mapToNegativize(ary){
  return ary.map(cur=>-Number(cur));
}
function mapToNoChange(ary){
  return ary.map(cur=>cur);
}
function mapToDouble(ary){
  return ary.map(cur=>2*Number(cur));
}
function mapToSquare(ary){
  return ary.map(cur=>Math.pow(Number(cur),2));
}
function reduceToTotal(ary, initialValue){
  return ary.reduce( (acc, cur)=> acc+cur, !!initialValue?initialValue:0 );
}

function reduceToAllTrue(ary){
  return ary.reduce((acc, cur)=>!!acc&&!!cur)
}
function reduceToAnyTrue(ary){
  return ary.reduce((acc, cur)=>!!acc||!!cur)
}
