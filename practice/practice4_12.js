const count = [];
const res = [];

function uniq(array) {
  array.forEach(() => count.push(0));

  array.forEach(i => count[i] += +1);

  console.log(count);

  count.forEach((i, j) => {
    if (i > 0) res.push(j)
  });

  return res;
}

console.log(uniq([2, 1, 2, 3, 4, 3, 4])); // [ 2, 1, 3, 4 ]