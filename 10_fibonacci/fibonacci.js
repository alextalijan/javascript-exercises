const fibonacci = function(numberIndex) {
    // If the index is negative, abort the function
    if (numberIndex < 0) {
        return "OOPS";
    }

    const fibonacci = [0, 1]

    // Generate a fibonacci sequence of proper length and return the last element
    for (let i = 2; i <= numberIndex; i++) {
        fibonacci.push(fibonacci[i - 2] + fibonacci[i - 1]);
    }

    return fibonacci[numberIndex];
};

// Do not edit below this line
module.exports = fibonacci;
