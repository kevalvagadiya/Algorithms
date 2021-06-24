// const array = [-4, 3, -9, 0, 4, 1];
let array;
function main() {
  const arr = "1 2 3 -1 -2 -3 0 0"
    .split(" ")
    .map((arrTemp) => parseInt(arrTemp, 10));

  array = arr;
}
main();
const plusMinus = (arr) => {
  const possitive = [];
  const negative = [];
  const zero = [];
  const decimalArray = [];
  arr.map((item) => {
    if (item > 0) {
      possitive.push(item);
    } else if (item < 0) {
      negative.push(item);
    } else {
      zero.push(item);
    }
  });

  const reduce = (data) => {
    decimalArray.push((data.length / arr.length).toFixed(6));
  };

  reduce(possitive);
  reduce(negative);
  reduce(zero);

  return decimalArray;
};

console.log(plusMinus(array));
