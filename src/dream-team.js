const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(Array) {
  
    var team = '';
    let u = typeof(Array)
  if (u === 'object') {
      Array = Array.sort()
      for (let name of Array) {
      var a = typeof(name);
      
      if (a === "string" && name !== ' ' ){
        name = name.trim().slice(0, 1).toUpperCase();
        team += name
      
      } else {
        console.log(false)
        }
    }
    return team
  } else {
    return false
  }
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
};
