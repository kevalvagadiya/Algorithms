const array = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005];

// const aVeryBigSum = array.reduce((a, b) => a + b);

const aVeryBigSum = (arr) => {
  let totalSum = 0;
  for (let i = 0; i < arr.length; i++) {
    totalSum += arr[i];
  }
  return totalSum;
};
console.log(aVeryBigSum(array));
