const multiplesOf3and5 = require("./index");

describe("Problem 1: Multiples of 3 and 5", () => {
  test("returns a number", () => {
    expect(multiplesOf3and5(10)).toEqual(expect.any(Number));
  });

  test("49 returns 543", () => {
    expect(multiplesOf3and5(49)).toEqual(543);
  });

  test("1000 returns 233168", () => {
    expect(multiplesOf3and5(1000)).toEqual(233168);
  });

  test("8456 returns 16687353", () => {
    expect(multiplesOf3and5(8456)).toEqual(16687353);
  });

  test("19564 returns 89301183", () => {
    expect(multiplesOf3and5(19564)).toEqual(89301183);
  });
});
