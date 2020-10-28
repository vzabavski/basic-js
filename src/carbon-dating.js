const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;
const RegEx = /[^0-9.]/g;

module.exports = function dateSample(sampleActivity) {
  if(typeof(sampleActivity) === 'string' && sampleActivity.length !== 0) {
    let found = sampleActivity.match(RegEx)
    if(found === null) {
      sampleActivity.indexOf('.') === -1? parseInt(sampleActivity) : parseFloat(sampleActivity)
      if(sampleActivity < MODERN_ACTIVITY && sampleActivity > 0) {
        return Math.ceil(Math.log(MODERN_ACTIVITY/sampleActivity) * HALF_LIFE_PERIOD / 0.69314)
      } else {
        return false
      }
      
    } else {
      return false;
    }
  } else {
    return false;
  }
};
