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
