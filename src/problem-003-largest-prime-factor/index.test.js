const largestPrimeFactor = require("./index");

describe("Problem 3: Largest prime factor", () => {
  test("returns a number", () => {
    expect(largestPrimeFactor(2)).toEqual(expect.any(Number));
  });

  test("2 returns 2", () => {
    expect(largestPrimeFactor(2)).toEqual(2);
  });

  test("3 returns 3", () => {
    expect(largestPrimeFactor(3)).toEqual(3);
  });

  test("5 returns 5", () => {
    expect(largestPrimeFactor(5)).toEqual(5);
  });

  test("7 returns 7", () => {
    expect(largestPrimeFactor(7)).toEqual(7);
  });

  test("13195 returns 29", () => {
    expect(largestPrimeFactor(13195)).toEqual(29);
  });

  test("600851475143 returns 6857", () => {
    expect(largestPrimeFactor(600851475143)).toEqual(6857);
  });
});
