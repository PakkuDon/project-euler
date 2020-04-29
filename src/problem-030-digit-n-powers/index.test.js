const digitnPowers = require("./index");

describe("Problem 30: Digit n powers", () => {
  test("returns a number", () => {
    expect(digitnPowers(2)).toEqual(expect.any(Number));
  });

  test("2 returns 0", () => {
    expect(digitnPowers(2)).toEqual(0);
  });

  test("3 returns 1301", () => {
    expect(digitnPowers(3)).toEqual(1301);
  });

  test("4 returns 19316", () => {
    expect(digitnPowers(4)).toEqual(19316);
  });

  test("5 returns 443839", () => {
    expect(digitnPowers(5)).toEqual(443839);
  });
});
