function findDuplicated(array) {
  const count = [];
  const res = [];

  array.forEach(() => count.push(0));

  array.forEach(element => {
    count[element] += +1;
  });

  count.forEach((i, j) => {
    if (i > 1) res.push(j);
  });

  return res;
}

console.log(findDuplicated([1, 2, 3, 4, 1, 2, 3])); // [ 1, 2, 3 ]