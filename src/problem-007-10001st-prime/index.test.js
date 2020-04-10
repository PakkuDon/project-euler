const nthPrime = require("./index");

describe("Problem 7: 10001st prime", () => {
  test("returns a number", () => {
    expect(nthPrime(6)).toEqual(expect.any(Number));
  });

  test("6 returns 6", () => {
    expect(nthPrime(6)).toEqual(13);
  });

  test("10 returns 29", () => {
    expect(nthPrime(10)).toEqual(29);
  });

  test("100 returns 541", () => {
    expect(nthPrime(100)).toEqual(541);
  });

  test("1000 returns 7919", () => {
    expect(nthPrime(1000)).toEqual(7919);
  });

  test("10001 returns 104743", () => {
    expect(nthPrime(10001)).toEqual(104743);
  });
});
