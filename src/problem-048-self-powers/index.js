module.exports = (power, lastDigits) => {
  let sum = 0n;

  for (let i = 1; i <= power; i++) {
    let exponent = BigInt(i);
    for (let j = 1; j < i; j++) {
      exponent = BigInt(exponent * BigInt(i));
    }

    sum += exponent;
  }

  const sumDigits = sum
    .toString()
    .split("")
    .map((value) => parseInt(value));
  return parseInt(sumDigits.slice(-lastDigits).join(""));
};
