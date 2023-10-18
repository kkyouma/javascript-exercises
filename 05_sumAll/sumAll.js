const sumAll = function(start, end) {
  let num = 0;

  if(typeof start !== 'number'|| 
    typeof end !== 'number'
    ) {
    return "ERROR"

  } else if (start < end) {
    for(i = start; i <= end; i++) {
      num += i
    }   

  } else if (start > end) {
    for (i = end; i <=start; i++) {
      num += i
    }
  }
  return num;
};
// Do not edit below this line
module.exports = sumAll;
