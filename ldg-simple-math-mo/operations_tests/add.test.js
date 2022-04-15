const add = require("./add");
describe("add", () => {
  test("given 2 and 3 expect 5", () => {
    //Arrange
    const firstInput = "2";
    const secondInput = "3";
    //Act
    const result = add(firstInput, secondInput);
    //Assert
    expect(result).toBe(5);
  });
});
