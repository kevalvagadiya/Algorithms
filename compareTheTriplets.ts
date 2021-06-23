const y = [7, 9, 15];
const x = [6, 8, 12];

const output = [];
const CompareTheTriplets = (a, b) => {
  a.map((item, i) => {
    b.map((item2, index) => {
      if (i === index) {
        if (item > item2) {
          output[0] = output[0] ? output[0] + 1 : 1;
        } else if (item < item2) {
          output[1] = output[1] ? output[1] + 1 : 1;
        } else {
          output[1] = 0;
          output[0] = 0;
        }
      }
    });
  });
};

CompareTheTriplets(x, y);

console.log(output);
