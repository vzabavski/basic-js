const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr, depth = 1, maxDepth = 1) {
    for(let i = 0; i < arr.length; i++) {
      if(Array.isArray(arr[i])) {
        const newDepth = depth + 1
        maxDepth = this.calculateDepth(arr[i], newDepth, newDepth > maxDepth ? newDepth : maxDepth)
      }
    }
    return maxDepth;
  }
};