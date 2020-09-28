const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  backyard = backyard.join().split(',');
  let sum = 0;
  for (let x of backyard) {
    if (x === '^^') {
      sum++
    }
  }
  return sum;
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
};
