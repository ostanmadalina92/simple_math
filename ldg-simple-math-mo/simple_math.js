const simpleMath = {
  add: function add(firstInput, secondInput) {
    return Number(firstInput) + Number(secondInput);
  },
  substract: function substract(firstInput, secondInput) {
    return Number(firstInput) - Number(secondInput);
  },
  multiply: function multiply(firstInput, secondInput) {
    return Number(firstInput) * Number(secondInput);
  },
  divide: function divide(firstInput, secondInput) {
    return Number(firstInput) / Number(secondInput);
  },
};

module.exports = simpleMath;