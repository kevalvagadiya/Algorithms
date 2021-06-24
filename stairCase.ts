const n = 5;

const staircase = (n) => {
  let str = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i + j >= n - 1) {
        str = str.concat("#");
      } else {
        str = str.concat(" ");
      }
    }
    if (n - 1 !== i) {
      str = str.concat("\n");
    }
  }

  console.log(str);
};
staircase(n);
