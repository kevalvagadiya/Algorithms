const array = [5, 5, 5, 5, 5];

function miniMaxSum(arr) {
  let min = 0;
  let max = 0;
  const output = [];
  arr.forEach((item, index) => {
    if (item < arr[min]) {
      min = index;
    } else if (item > arr[max]) {
      max = index;
    }
  });
  console.log(min, max);

  output[0] = arr
    .filter((item, index) => index !== max)
    .reduce((a, b) => a + b);
  output[1] = arr
    .filter((item, index) => index !== min)
    .reduce((a, b) => a + b);
  return output;
}

console.log(miniMaxSum(array));