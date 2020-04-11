const primeSummation = require("./index");

describe("Problem 10: Summation of primes", () => {
  test("returns a number", () => {
    expect(primeSummation(17)).toEqual(expect.any(Number));
  });

  test("17 returns 41", () => {
    expect(primeSummation(17)).toEqual(41);
  });

  test("2001 returns 277050", () => {
    expect(primeSummation(2001)).toEqual(277050);
  });

  test("140759 returns 873608362", () => {
    expect(primeSummation(140759)).toEqual(873608362);
  });

  test("2000000 returns 142913828922", () => {
    expect(primeSummation(2000000)).toEqual(142913828922);
  });
});
