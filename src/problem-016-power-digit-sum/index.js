module.exports = (exponent) => {
  let number = Math.pow(2, exponent);
  let digits = BigInt(number)
    .toString()
    .split("")
    .map((n) => parseInt(n));

  return digits.reduce((total, current) => total + current, 0);
};
