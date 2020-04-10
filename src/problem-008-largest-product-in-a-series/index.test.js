const largestProductinaSeries = require("./index");

describe("Problem 8: Largest product in a series", () => {
  test("returns a number", () => {
    expect(largestProductinaSeries(4)).toEqual(expect.any(Number));
  });

  test("4 returns 5832", () => {
    expect(largestProductinaSeries(4)).toEqual(5832);
  });

  test("13 returns 23514624000", () => {
    expect(largestProductinaSeries(13)).toEqual(23514624000);
  });
});
