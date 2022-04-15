const divide = require("./divide");
describe("divide", () => {
  test("given 3 and 2 expect 1.5", () => {
    //Arrange
    const firstInput = "3";
    const secondInput = "2";
    //Act
    const result = divide(firstInput, secondInput);
    //Assert
    expect(result).toBe(1.5);
  });
});
