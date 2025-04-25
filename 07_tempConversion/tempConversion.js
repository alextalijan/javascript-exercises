const convertToCelsius = function(tempFahrenheit) {
    let tempCelsius = Math.round((tempFahrenheit - 32) * 5 / 9 * 10) / 10;

    return tempCelsius;
};

const convertToFahrenheit = function(tempCelsius) {
    let tempFahrenheit = Math.round((tempCelsius * 9 / 5 + 32) * 10) / 10;

    return tempFahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
