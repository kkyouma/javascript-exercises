const palindromes = function (string) {
processedString = string.toLowerCase().replace(/[^a-z0-9]/g, '')
newString = processedString.split('').reverse().join('')
return newString === processedString
};

// Do not edit below this line
module.exports = palindromes;
