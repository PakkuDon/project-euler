module.exports = (number) => {
  let sumOfSquares = 0;
  let sumOfNumbers = 0;

  for (let i = 1; i <= number; i++) {
    sumOfSquares += Math.pow(i, 2);
    sumOfNumbers += i;
  }

  return Math.abs(sumOfSquares - Math.pow(sumOfNumbers, 2));
};
