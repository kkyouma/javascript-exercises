const add = function(firstNumber, secondNumber) {
	 return firstNumber + secondNumber
};

const subtract = function(firstNumber, secondNumber) {
	return firstNumber - secondNumber
};

const sum = function(arrayNumbers) {
  let total = 0;
  for (number of arrayNumbers) {
    total += parseFloat(number);
  }
  return total
};

const multiply = function(arrayNumbers)  {
  let total = 1;
  for (number of arrayNumbers) {
    total *= parseFloat(number);
  }
  return total
};

const power = function(base, powerTo) {
  let total = 1;
  for (i = 0; i < powerTo; i++) {
    total *= parseFloat(base);
  }
  return total
};

const factorial = function(number) {
  let total = 1;
  for (i = 0; i < number; i++) {
    total *= (number - i)
  }
  return total 
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
