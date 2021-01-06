function adder(x, y) {
  if (x === y) return x;

  const temp = [x, y];
  temp.sort();

  const arr = [];

  for (let i = 0; i < temp[1] - temp[0] + 1; i++) {
    arr.push(temp[0] + i);
  }

  console.log(arr);

}

console.log(adder(3, 5)); // 12
console.log(adder(3, 5)); // 12