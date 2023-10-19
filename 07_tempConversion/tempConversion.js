const convertToCelsius = function(temperature) {
  celcius = (temperature - 32) * 5/9;
  return parseFloat(celcius.toFixed(1));
};

const convertToFahrenheit = function(temperature) {
  fahrenheit = (temperature * 9/5 + 32);
  return parseFloat(fahrenheit.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
