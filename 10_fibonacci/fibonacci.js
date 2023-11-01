const fibonacci = function(n) {
// Crear secuencia y almacenar en una array

let secuence = [0, 1]
for(i = 2; i < n; i++) {
  let next = secuence[i-1] + secuence[i-2];
  secuence.push(next)
}

// Seleccionar el indice de la array
return secuence[i]
};

// Do not edit below this line
module.exports = fibonacci;
