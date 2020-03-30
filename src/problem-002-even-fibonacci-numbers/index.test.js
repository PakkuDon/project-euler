const evenFibonacciNumbers = require("./index");

describe("Problem 2: Even Fibonacci Numbers", () => {
  test("returns a number", () => {
    expect(evenFibonacciNumbers(10)).toEqual(expect.any(Number));
  });

  test("10 returns 10", () => {
    expect(evenFibonacciNumbers(10)).toEqual(10);
  });

  test("60 returns 44", () => {
    expect(evenFibonacciNumbers(60)).toEqual(44);
  });

  test("1000 returns 798", () => {
    expect(evenFibonacciNumbers(1000)).toEqual(798);
  });

  test("100000 returns 60696", () => {
    expect(evenFibonacciNumbers(100000)).toEqual(60696);
  });

  test("4000000 returns 4613732", () => {
    expect(evenFibonacciNumbers(4000000)).toEqual(4613732);
  });

  test("returns an even number", () => {
    expect(evenFibonacciNumbers(10) % 2).toEqual(0);
  });
});
