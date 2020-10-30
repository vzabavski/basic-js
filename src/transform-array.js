const CustomError = require("../extensions/custom-error");

module.exports =  function transform(arr = []) { 
  if(Array.isArray(arr)) {
    let transformed = [];
    
    for (let i = 0; i < arr.length; i++) {
      if (arr[i-2] === '--discard-next' && arr[i+1] !== undefined) {
        transformed.pop()
       
      } else if (arr[i] === '--discard-prev' && arr[i-1] !== undefined) {
          transformed.pop()
          
      } else if (arr[i] === '--double-next' && arr[i+1] !== undefined) {
          transformed.push(arr[i+1]);
         
      } else if (arr[i] === '--double-prev' && arr[i-1] !== undefined) {
          transformed.push(arr[i-1])
          
      } else {
        if (arr[i] !== '--discard-next' && arr[i] !== '--discard-prev' ) {
           if (arr[i] !== '--double-next' && arr[i] !== '--double-prev') {
              transformed.push(arr[i]);
           }
        }
      }
    }
    return transformed
  } else {
    throw Error;
  }
  
};