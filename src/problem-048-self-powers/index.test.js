const selfPowers = require("./index");

describe("Problem 48: Self powers", () => {
  test("returns a number", () => {
    expect(selfPowers(10, 3)).toEqual(expect.any(Number));
  });

  test("10, 3 returns 317", () => {
    expect(selfPowers(10, 3)).toEqual(317);
  });

  test("150, 6 returns 29045", () => {
    expect(selfPowers(150, 6)).toEqual(29045);
  });

  test("673, 7 returns 2473989", () => {
    expect(selfPowers(673, 7)).toEqual(2473989);
  });

  test("1000, 10 returns 9110846700", () => {
    expect(selfPowers(1000, 10)).toEqual(9110846700);
  });
});
