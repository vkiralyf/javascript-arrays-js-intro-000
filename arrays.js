var chocolateBars=['snickers','hundred','grand','kitkat','skittles'];
function addElementToBeginningOfArray(x,y) {
  z=[y,...x]
  return z

}

function destructivelyAddElementToBeginningOfArray(x,y) {
  x.unshift(y)
  return x

}
function addElementToEndOfArray(x,y) {
  z=[...x,y]
  return z

}
function destructivelyAddElementToEndOfArray(x,y) {
  x.push(y)
  return x

}
