const CustomError = require("../extensions/custom-error");

const chainMaker = {
  finalChain : [],

  getLength: function() {
    let res = this.finalChain.length;
    return this.finalChain.length
  },
  addLink: function(value) {
    this.finalChain.push(value);
    return this;
  },
  removeLink: function(position) {
    if (typeof(position) === 'number' && position + 1 <= this.finalChain.length) {
      this.finalChain.splice(position - 1, 1)
      return this;
    } else {
      this.finalChain = []
      throw Error;
    }
  },
  reverseChain: function() {
    if(Array.isArray(this.finalChain)) {
      this.finalChain = this.finalChain.reverse();
      return this;
    } else {
      this.finalChain = [];
      throw Error;
    }
  },
  finishChain: function() {
    const result = this.finalChain.map(i => `( ${i} )`).join('~~');
    this.finalChain = []
    return result;
    
  }
};

module.exports = chainMaker;
