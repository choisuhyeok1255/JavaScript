function adder(x, y) {
  if (x === y) return x;

  const temp = [x, y];
  temp.sort();

  const arr = [];
  let res = 0;
  for (let i = temp[0]; i < temp[1] + 1; i++) {
    res += i;
  }

  return res;
}

console.log(adder(3, 5)); // 12
console.log(adder(1, 5)); // 12