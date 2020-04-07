const sumSquareDifference = require("./index");

describe("Problem 6: Sum square difference", () => {
  test("returns a number", () => {
    expect(sumSquareDifference(10)).toEqual(expect.any(Number));
  });

  test("10 returns 2640", () => {
    expect(sumSquareDifference(10)).toEqual(2640);
  });

  test("20 returns 41230", () => {
    expect(sumSquareDifference(20)).toEqual(41230);
  });

  test("100 returns 25164150", () => {
    expect(sumSquareDifference(100)).toEqual(25164150);
  });
});
