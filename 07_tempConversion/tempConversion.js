const convertToCelsius = function(temperature) {
  /// (0 °F − 32) × 5/9 = -17,78 °C
  return Math.round(((temperature - 32) * 5/9) * 10) / 10;
};

const convertToFahrenheit = function(temperature) {
 //  (0°C × 9/5) + 32 = 32 °F
 return Math.round(((temperature * 9/5) + 32)* 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
