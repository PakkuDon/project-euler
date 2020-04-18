const countingSundays = require("./index");

describe("Problem 19: Counting Sundays", () => {
  test("returns a number", () => {
    expect(countingSundays(1943, 1946)).toEqual(expect.any(Number));
  });

  test("1943, 1946 returns 6", () => {
    expect(countingSundays(1943, 1946)).toEqual(6);
  });

  test("1995, 2000 returns 10", () => {
    expect(countingSundays(1995, 2000)).toEqual(10);
  });

  test("1901, 2000 returns 171", () => {
    expect(countingSundays(1901, 2000)).toEqual(171);
  });
});
