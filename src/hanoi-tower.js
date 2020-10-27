const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let sumTurns = Math.pow(2, disksNumber) - 1;
  let sumSeconds = Math.floor(3600 / (turnsSpeed/sumTurns));
  let result = {turns: sumTurns, seconds: sumSeconds}
  return result;
};
