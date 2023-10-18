const sumAll = function(start, end) {

  const verifyInvalidNumber = (number) => typeof number !== "number" || number < 0;

  if (verifyInvalidNumber(start) || verifyInvalidNumber(end)) {
    return "ERROR"
  }

  let num = 0;
  const min = Math.min(start, end)
  const max = Math.max(start, end)

  for(min; min <= max; min++) {
    num += min
  }
  return num;
};
// Do not edit below this line
module.exports = sumAll;
