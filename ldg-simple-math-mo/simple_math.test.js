const simpleMath = require("./simple_math");
describe('simpleMath', () => {
    test("given 3 and 3 expect 3 + 3 = 6, 3 - 3 = 0, 3 * 3 = 9, 3 / 3 = 1 ", () => {
      //Arrange
        const firstInput = "3";
        const secondInput = "3";
      //Act
      const result = simpleMath(firstInput, secondInput);
      //Assert
      expect(result).toEqual(
        ["3 + 3 = 6 ",
        "3 - 3 = 0 ",
        "3 * 3 = 9 ",
        "3 / 3 = 1 "]
      );
    });
})