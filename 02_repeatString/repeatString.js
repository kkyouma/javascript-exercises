const repeatString = function(word, times) {
    let concatWords = "";

    if(times < 0) return "ERROR";
    for (let i = 0; i < times; i++) {
    concatWords += word;
    }
    return concatWords
};

// Do not edit below this line
module.exports = repeatString;
