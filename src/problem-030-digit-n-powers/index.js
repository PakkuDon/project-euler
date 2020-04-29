// Arbitrary limit to minimise execution time
const UPPER_BOUND = 300000;

module.exports = (power) => {
  let numbersThatAreSumOfDigitPowers = [];

  for (let i = 2; i < UPPER_BOUND; i++) {
    const digits = i
      .toString()
      .split("")
      .map((value) => parseInt(value));
    const digitSum = digits.reduce(
      (total, digit) => total + Math.pow(digit, power),
      0
    );
    if (digitSum === i) {
      numbersThatAreSumOfDigitPowers.push(i);
    }
  }

  return numbersThatAreSumOfDigitPowers.reduce(
    (total, current) => total + current,
    0
  );
};
