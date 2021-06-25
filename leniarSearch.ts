const array = [10, 20, 80, 30, 60, 50, 110, 100, 130, 170];
var x = 170;

function leniarSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
}
const output = leniarSearch(array, x) || -1;
console.log(output);
