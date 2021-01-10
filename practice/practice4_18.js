function fibonacci(n) {
  const temp = [0, 1];

  for (let i = 0; i < n - 1; i++) {
    temp[i + 2] = temp[i] + temp[i + 1];
  }
  return temp[n];
}

console.log(fibonacci(2)); // 1
console.log(fibonacci(3)); // 2
console.log(fibonacci(4)); // 3
console.log(fibonacci(5)); // 5
console.log(fibonacci(6)); // 8