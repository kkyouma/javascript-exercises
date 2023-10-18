const removeFromArray = function(array) {

  for (i = 0; i < array.length; i++) {
    element = array[i];
    if (element === 3) {
      array.splice(i,1);
    }
  }
  return array
};

// Do not edit below this line
module.exports = removeFromArray;
