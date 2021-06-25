const fib = (n) => {
  const fibbonacciArray = [];
  for (let i = 0; i <= n; i++) {
    if (i <= 1) {
      fibbonacciArray.push(i);
    } else {
      const last = fibbonacciArray.length - 1;
      fibbonacciArray.push(fibbonacciArray[i - 2] + fibbonacciArray[last]);
    }
  }
  return fibbonacciArray[fibbonacciArray.length - 1];
};
console.log(fib(100));

function fibDirect(n) {
  if (n <= 1) return n;
  return fibDirect(n - 1) + fibDirect(n - 2);
}

const output = fibDirect(10);
console.log(output);
