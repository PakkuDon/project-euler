module.exports = (number) => {
  let sumOfPrimes = 0;

  for (let i = 2; i < number; i++) {
    let isPrime = true;
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      sumOfPrimes += i;
    }
  }

  return sumOfPrimes;
};
