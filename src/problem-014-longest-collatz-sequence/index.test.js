const longestCollatzSequence = require("./index");

describe("Problem 14: Longest Collatz sequence", () => {
  test("returns a number", () => {
    expect(longestCollatzSequence(14)).toEqual(expect.any(Number));
  });

  test("14 returns 9", () => {
    expect(longestCollatzSequence(14)).toEqual(9);
  });

  test("5847 returns 3711", () => {
    expect(longestCollatzSequence(5847)).toEqual(3711);
  });

  test("46500 returns 35655", () => {
    expect(longestCollatzSequence(46500)).toEqual(35655);
  });

  test("54512 returns 52527", () => {
    expect(longestCollatzSequence(54512)).toEqual(52527);
  });

  test("100000 returns 77031", () => {
    expect(longestCollatzSequence(100000)).toEqual(77031);
  });
});
