function average(array) {
  let res = 0;
  for (let i = 0; i < array.length; i++) {
    res += array[i];
  }
  return res / array.length;
}

console.log(average([5, 3, 4])); // 4