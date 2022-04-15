const simpleMath = require("./simple_math");
describe("simpleMath", () => {
  test("add: given 1 and 1 should return 2", () => {
    //Arrange
    const firstInput = "1";
    const secondInput = "1";
    //Act
    const result = simpleMath.add(firstInput, secondInput);
    //Assert
    expect(result).toBe(2);
  });
  test("substract: given 1 and 1 should return 0", () => {
    //Arrange
    const firstInput = "1";
    const secondInput = "1";
    //Act
    const result = simpleMath.substract(firstInput, secondInput);
    //Assert
    expect(result).toBe(0);
  });
  test("multiply: given 1 and 1 should return 1", () => {
    //Arrange
    const firstInput = "1";
    const secondInput = "1";
    //Act
    const result = simpleMath.multiply(firstInput, secondInput);
    //Assert
    expect(result).toBe(1);
  });
  test("divide: given 1 and 1 should return 1", () => {
    //Arrange
    const firstInput = "1";
    const secondInput = "1";
    //Act
    const result = simpleMath.divide(firstInput, secondInput);
    //Assert
    expect(result).toBe(1);
  });
});
