module.exports = (number) => {
  let factor = 2;
  let max = 1;

  while (factor <= number) {
    if (number % factor === 0) {
      max = factor;
      number = number / factor;
    } else {
      factor++;
    }
  }
  return max;
};
