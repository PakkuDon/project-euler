module.exports = (number) => {
  const factorial = calculateFactorial(number);
  const digits = factorial
    .toString()
    .split("")
    .map((value) => parseInt(value, 10));

  return digits.reduce((total, current) => total + current, 0);
};

const calculateFactorial = (n) => {
  if (n === 1) {
    return BigInt(n);
  } else {
    return BigInt(n) * calculateFactorial(n - 1);
  }
};
