function simpleMath  (firstInput, secondInput) {
  function add() {
    return Number(firstInput) + Number(secondInput);
  }
  function substract() {
    return Number(firstInput) - Number(secondInput);
  }
  function multiply() {
    return Number(firstInput) * Number(secondInput);
  }
  function divide() {
    return Number(firstInput) / Number(secondInput);
  }
  return([
    `${firstInput} + ${secondInput} = ${add(firstInput, secondInput)} `,
    `${firstInput} - ${secondInput} = ${substract(firstInput, secondInput)} `,
    `${firstInput} * ${secondInput} = ${multiply(firstInput, secondInput)} `,
    `${firstInput} / ${secondInput} = ${divide(firstInput, secondInput)} `,
  ]);
};

module.exports = simpleMath;