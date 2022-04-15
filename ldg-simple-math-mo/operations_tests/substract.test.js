const substract = require(".//substract");
describe("substract", () => {
  test("given 5 and 4 expect 1", () => {
    //Arrange
    const firstInput = "5";
    const secondInput = "4";
    //Act
    const result = substract(firstInput, secondInput);
    //Assert
    expect(result).toBe(1);
  });
});
