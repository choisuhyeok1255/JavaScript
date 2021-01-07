function getArray(arr) {
  let temp = arr.filter(i => (i % 2 === 0) && i > 3);
  console.log(temp);
}

console.log(getArray([1, 2, 3, 4, 5, 6])); // [ 4, 6 ]