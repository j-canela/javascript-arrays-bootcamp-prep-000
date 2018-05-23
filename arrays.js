chocolateBars= ["snickers","hundred grand","kitkat","skittles"];

function addElementToBeginningOfArray(a,b){
  return [b,...a]
}
function destructivelyAddElementToBeginningOfArray(a,b){
   a.unshift(b);
   return a;
}

function addElementToEndOfArray(a,b) {
  return [...a,b]
}

function destructivelyAddElementToEndOfArray(a,b){
  a.push(b)
  return a
}

function accessElementInArray(a,b){
  return a[b]
}

function destructivelyRemoveElementFromBeginningOfArray(a){
  a.shift()
  return a
}

function removeElementFromBeginningOfArray(a){
  a.slice(0)
  return a
}

function destructivelyRemoeELementFromEndOfArray(a){
  a.pop()
  return a
}

function removeElementFromEndOfArray(a){
  a.slice(0, a.length-1)
  return a
}
