const multiply = require("./multiply");
describe("multiply", () => {
  test("given 2 and 3 expect 6", () => {
    //Arrange
    const firstInput = "2";
    const secondInput = "3";
    //Act
    const result = multiply(firstInput, secondInput);
    //Assert
    expect(result).toBe(6);
  });
});
