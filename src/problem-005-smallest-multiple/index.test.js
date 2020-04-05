const largestPrimeFactor = require("./index");

describe("Problem 5: Smallest multiple", () => {
  test("returns a number", () => {
    expect(largestPrimeFactor(5)).toEqual(expect.any(Number));
  });

  test("5 returns 60", () => {
    expect(largestPrimeFactor(5)).toEqual(60);
  });

  test("7 returns 420", () => {
    expect(largestPrimeFactor(7)).toEqual(420);
  });

  test("10 returns 2520", () => {
    expect(largestPrimeFactor(10)).toEqual(2520);
  });

  test("13 returns 360360", () => {
    expect(largestPrimeFactor(13)).toEqual(360360);
  });

  test("20 returns 232792560", () => {
    expect(largestPrimeFactor(20)).toEqual(232792560);
  });
});
