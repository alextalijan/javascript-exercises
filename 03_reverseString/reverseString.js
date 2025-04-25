const reverseString = function(string) {
    let reversedString = '';

    let i = string.length - 1;

    while(i >= 0) {
        reversedString += string[i];
        i--;
    }

    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
