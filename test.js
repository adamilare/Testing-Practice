const { stringLength, reverseString, capitalize } = require("./functions.js");
const Calculator = require("./Calculator.js");

describe("stringLength", () => {
  test("returns the length of a string", () => {
    expect(stringLength("hello")).toBe(5);
  });

  // test if the string is atleast 1 character long and not more than 10 characters long
  test("returns the length of a string 0<string<11", () => {
    const testString = ["hello", "hello world is more than 10 characters"];
    expect(stringLength(testString[0])).toBeGreaterThan(0);
    expect(stringLength(testString[0])).toBeLessThan(11);
  });
});

describe("reverseString", () => {
  test("returns the reverse of a string", () => {
    expect(reverseString("hello")).toBe("olleh");
  });
});

describe("Calculator", () => {
  describe("add", () => {
    test("adds two numbers", () => {
      const calculator = new Calculator();
      expect(calculator.add(1, 2)).toBe(3);
    });
  });

  describe("subtract", () => {
    test("subtract one number from another", () => {
      const calculator = new Calculator();
      expect(calculator.subtract(5, 3)).toBe(2);
    });
  });

  describe("division", () => {
    test("Divide one number with anothe", () => {
      const calculator = new Calculator();
      expect(calculator.divide(4, 2)).toBe(2);
    });
  });

  describe("multiply", () => {
    test("multiply two numbers together", () => {
      const calculator = new Calculator();
      expect(calculator.multiply(3, 4)).toBe(12);
    });
  });
});

describe("capitalize", () => {
  test("Test if the first character of a string is capitalized", () => {
    expect(capitalize("hello")).toMatch("Hello");
  });
});
