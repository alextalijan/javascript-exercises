const repeatString = function(string, numberOfRepetitions) {
    if (numberOfRepetitions < 0) {
        return "ERROR";
    }

    let repeatedString = '';

    for (let i = 0; i < numberOfRepetitions; i++) {
        repeatedString = repeatedString.concat(string);
    }

    return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
