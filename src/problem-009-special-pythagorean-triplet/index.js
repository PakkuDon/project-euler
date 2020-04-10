module.exports = (number) => {
  for (let a = 1; a < number / 2; a++) {
    for (let b = a; b < number / 2; b++) {
      for (let c = b; c < number / 2; c++) {
        if (
          Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c, 2) &&
          a + b + c === number
        ) {
          return a * b * c;
        }
      }
    }
  }
};
