const removeFromArray = function(array, ...toRemove) {

  // for (i = array.length - 1; i >= 0; i--) {
  //   let element = array[i];
  //   if (toRemove.includes(element)) {
  //     array.splice(i,1);
  //   }
  // }
  // return array

  // const newArray = []
  // array.forEach(element => {
  //   if(!toRemove.includes(element))
  //     newArray.push(element)
  // });
  // return newArray

  newArray = array.filter(element => (!toRemove.includes(element)))
  return newArray
};

// Do not edit below this line
module.exports = removeFromArray;
