module.exports = (n) => {
  let sum = 0;
  let a = 0;
  let b = 1;

  while (b < n) {
    let temp = a;
    a = b;
    b = temp + a;

    if (a % 2 === 0) {
      sum += a;
    }
  }

  return sum;
};
