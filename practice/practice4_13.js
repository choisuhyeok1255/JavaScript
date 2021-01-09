function isNotOverlapArray(array) {
  // if(array.length !== Math.max(...array)) return false;

  const count = [];

  for (let i = 1; i < array.length + 1; i++) {
    count[array[i - 1] - 1] = +1;
  }

  for (let j = 0; j < count.length; j++) {
    if (count[j] !== 1) return false;
  }

  return true;
}

console.log(isNotOverlapArray([4, 1, 3, 2])); // true
console.log(isNotOverlapArray([4, 1, 3])); // false
console.log(isNotOverlapArray([2, 1, 3])); // true