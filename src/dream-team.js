const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(newArray) {
  var team = [];
  let u = typeof( newArray);

  if (Array.isArray(newArray)) {
      let finalTeam = ''
      
      var team = [];

      newArray = newArray.reverse()
      for (let name of newArray) {
        var type = typeof(name);
      
        if (type === "string" && name !== ' ' ){
          let l = team.length + 1;

          name = name.trim().slice(0, 1).toUpperCase();
          team.push(name);
          team = team.sort();
          
          for (let x of team) {
            finalTeam += x;
            var i = finalTeam.slice(finalTeam.length - l,finalTeam.length)
          }
        
        } 
      }
    return i
  } else {
    return false
  }
};
