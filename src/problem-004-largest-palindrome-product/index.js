module.exports = (digits) => {
  const maxNumber = Math.pow(10, digits);
  let largestPalindromeProduct = 0;

  for (let i = 0; i < maxNumber; i++) {
    for (let j = 0; j < maxNumber; j++) {
      const product = i * j;

      if (isPalindromeNumber(product) && product > largestPalindromeProduct) {
        largestPalindromeProduct = product;
      }
    }
  }

  return largestPalindromeProduct;
};

const isPalindromeNumber = (number) =>
  number.toString() === number.toString().split("").reverse().join("");
