module.exports = (number) => {
  let nth = 0;
  let current = 0;

  while (nth <= number) {
    current++;
    let isPrime = true;

    for (let i = 2; i <= Math.sqrt(current); i++) {
      if (current % i === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      nth++;
    }
  }

  return current;
};
