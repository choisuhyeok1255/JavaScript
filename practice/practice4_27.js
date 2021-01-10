function specialSort(array) {
  const tempPlus = [];
  const tempMinus = [];
  const tempZero = [];
  let res = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      tempPlus.push(array[i]);
    } else if (array[i] < 0) {
      tempMinus.push(array[i]);
    } else {
      tempZero.push(array[i]);
    }
  }

  tempPlus.sort();
  tempMinus.reverse().sort();
  res = [tempMinus, tempZero, tempPlus].flat();

  return res;
}

const testArray = [-1, 1, 3, -2, 2, 0];

console.log(testArray); // [ -1, 1, 3, -2, 2, 0 ]
console.log(specialSort(testArray)); // [ -1, -2, 0, 1, 2, 3 ]