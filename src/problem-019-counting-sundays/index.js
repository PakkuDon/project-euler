module.exports = (firstYear, lastYear) => {
  let numberOfSundays = 0;
  let currentDate = new Date(firstYear, 0, 1);

  while (currentDate.getFullYear() <= lastYear) {
    if (currentDate.getDay() === 0) {
      numberOfSundays++;
    }
    currentDate.setMonth(currentDate.getMonth() + 1);
  }

  return numberOfSundays;
};
