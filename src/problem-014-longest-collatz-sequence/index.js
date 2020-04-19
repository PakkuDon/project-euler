module.exports = (limit) => {
  let numberWithLongestChain = 0;
  let longestSequence = 0;

  for (let i = 0; i < limit; i++) {
    const sequenceLength = generateCollatzSequence(i).length;
    if (sequenceLength > longestSequence) {
      longestSequence = sequenceLength;
      numberWithLongestChain = i;
    }
  }

  return numberWithLongestChain;
};

const generateCollatzSequence = (number) => {
  let current = number;
  let values = [];
  values.push(current);

  while (current > 1) {
    if (current % 2 === 0) {
      current = current / 2;
    } else {
      current = current * 3 + 1;
    }

    values.push(current);
  }

  return values;
};
