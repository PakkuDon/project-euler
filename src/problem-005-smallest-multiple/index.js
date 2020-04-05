module.exports = (n) => {
  let smallestMultiple = 0;
  let isDivisibleBy1ToN = false;
  let factors = Array(n);

  for (let i = 0; i < n; i++) {
    factors[i] = i + 1;
  }

  while (!isDivisibleBy1ToN) {
    smallestMultiple++;
    isDivisibleBy1ToN = factors.every(
      (value) => smallestMultiple % value === 0
    );
  }

  return smallestMultiple;
};
