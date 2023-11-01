const palindromes = function (string) {
// invertir cadena
newString = string.split('').reverse().join('')
// crear comprobar si la cadena invertirda es ===  a la cadena inicial
return newString === string
};

// Do not edit below this line
module.exports = palindromes;
