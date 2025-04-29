// https://stackoverflow.com/questions/4434076/best-way-to-alphanumeric-check-in-javascript
function isAlphaNumeric(str) {
    var code, i, len;
  
    for (i = 0, len = str.length; i < len; i++) {
      code = str.charCodeAt(i);
      if (!(code > 47 && code < 58) && // numeric (0-9)
          !(code > 64 && code < 91) && // upper alpha (A-Z)
          !(code > 96 && code < 123)) { // lower alpha (a-z)
        return false;
      }
    }
    return true;
  };


const palindromes = function (string) {
    // Remove all punctuation and spaces from the string since they don't count
    string = string.toLowerCase().split('');

    for (let i = string.length - 1; i >= 0; i--) {
        if (!isAlphaNumeric(string[i])) {
            string.splice(i, 1);
        }
    }

    // Iterate over the string and compare front to back
    let endPointer = string.length - 1;
    for (let i = 0; i < string.length; i++) {
        if (string[i] !== string[endPointer]) {
            return false;
        }
        if (i >= endPointer) {
            break;
        }

        endPointer--;
    }

    return true;
};

// Do not edit below this line
module.exports = palindromes;
