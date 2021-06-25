// const array = [3, 2, 1, 3];
const array = [18, 90, 90, 13, 90, 75, 90, 8, 90, 43];
const birthdayCakeCandles = (arr) => {
  let max = 0;
  arr.forEach((item) => {
    if (item > max) {
      max = item;
    }
  });

  return arr.filter((item) => item === max).length;
};
console.log(birthdayCakeCandles(array));
