const largestPalindromeProduct = require("./index");

describe("Problem 4: Largest palindrome product", () => {
  test("returns a number", () => {
    expect(largestPalindromeProduct(2)).toEqual(expect.any(Number));
  });

  test("2 returns 9009", () => {
    expect(largestPalindromeProduct(2)).toEqual(9009);
  });

  test("3 returns 906609", () => {
    expect(largestPalindromeProduct(3)).toEqual(906609);
  });
});
