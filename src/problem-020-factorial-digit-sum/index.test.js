const solution = require("./index");

describe("Problem 20: Factorial digit sum", () => {
  test("returns a number", () => {
    expect(solution(10)).toEqual(expect.any(Number));
  });

  test("10 returns 27", () => {
    expect(solution(10)).toEqual(27);
  });

  test("25 returns 72", () => {
    expect(solution(25)).toEqual(72);
  });

  test("50 returns 216", () => {
    expect(solution(50)).toEqual(216);
  });

  test("75 returns 432", () => {
    expect(solution(75)).toEqual(432);
  });

  test("100 returns 648", () => {
    expect(solution(100)).toEqual(648);
  });
});
