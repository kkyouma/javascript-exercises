const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const sum = function(array) {
  return array.reduce((total, num) => total + num, 0)
}

const multiply = function(array) {
  return array.reduce((product, num) => product * num, 1)
}

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
