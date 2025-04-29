const add = function(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
};

const subtract = function(minuend, subtrahend) {
    return minuend - subtrahend;
};

const sum = function(numbers) {
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    return sum;
};

const multiply = function(numbers) {
    let product = 1;

    for (let i = 0; i < numbers.length; i++) {
        product *= numbers[i];
    }

    return product;
};

const power = function(number, power) {
    let result = 1;

    for (let i = 0; i < power; i++) {
        result *= number;
    }

    return result;
};

const factorial = function(number) {
    let result = 1;

    for (let i = 1; i <= number; i++) {
        result *= i;
    }

    return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
