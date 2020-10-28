const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if(date === undefined) {
    return 'Unable to determine the time of year!'
  } else if (typeof(date) === 'object') {
    let month = this.date.getMonth()
    if(month >= 11 && month < 2) {
      return "winter"
    } else if(month >= 2 && month <5) {
      return "spring"
    } else if(month >= 5 && month < 7) {
      return "summer"
    } else if(month >= 8 && month <11) {
      return "autum"
    }
  } else {
    throw Error;
  }
  
};
