const specialPythagoreanTriplet = require("./index");

describe("Problem 9: Special Pythagorean triplet", () => {
  test("returns a number", () => {
    expect(specialPythagoreanTriplet(24)).toEqual(expect.any(Number));
  });

  test("24 returns 480", () => {
    expect(specialPythagoreanTriplet(24)).toEqual(480);
  });

  test("120 returns 49920, 55080 or 60000", () => {
    expect([49920, 55080, 60000]).toContain(specialPythagoreanTriplet(120));
  });

  test("1000 returns 31875000", () => {
    expect(specialPythagoreanTriplet(1000)).toEqual(31875000);
  });
});
