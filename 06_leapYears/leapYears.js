const leapYears = function(year) {
// divisibles por 4
  if (year % 4 === 0 && year % 100 !== 0) {
    return true
  } else if (year % 400 === 0) {
    return true
  } else 
    return false
//divisibles por 100
  // pero si son divisibles por 400 estan bien
};

// Do not edit below this line
module.exports = leapYears;
