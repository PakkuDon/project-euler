const powerDigitSum = require("./index");

describe("Problem 16: Power digit sum", () => {
  test("returns a number", () => {
    expect(powerDigitSum(15)).toEqual(expect.any(Number));
  });

  test("15 returns 26", () => {
    expect(powerDigitSum(15)).toEqual(26);
  });

  test("128 returns 166", () => {
    expect(powerDigitSum(128)).toEqual(166);
  });

  test("1000 returns 1366", () => {
    expect(powerDigitSum(1000)).toEqual(1366);
  });
});
