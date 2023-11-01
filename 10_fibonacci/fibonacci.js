const fibonacci = function(n) {

let secuence = [0, 1]
n = parseInt(n)
if (typeof n !== 'number' || n < 0) {
  return "OOPS"
} else {
  for(i = 2; i <= n; i++) {
    let next = secuence[i-1] + secuence[i-2];
    secuence.push(next)
  }
} return secuence[n]
};
// Do not edit below this line
module.exports = fibonacci;
