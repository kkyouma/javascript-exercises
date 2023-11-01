const palindromes = function (string) {
processedString = string.toLowerCase().replace(/[^a-z0-9]/g, '')
reversedString = processedString.split('').reverse().join('')
return reversedString === processedString
};

// Do not edit below this line
module.exports = palindromes;
