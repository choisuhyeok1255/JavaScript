function getMaxValueFromArray(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] > array[array.length - 1]) {
      let temp = 0;
      temp = array[i];
      array[i] = array[array.length - 1];
      array[array.length - 1] = temp;
    }
  }
  return array[array.length - 1];
}
console.log(getMaxValueFromArray([3, 6, -2, -5, 7, 3])); // 7

function getMinValueFromArray(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] < array[array.length - 1]) {
      let temp = 0;
      temp = array[i];
      array[i] = array[array.length - 1];
      array[array.length - 1] = temp;
    }
  }
  return array[array.length - 1];
}
console.log(getMinValueFromArray([3, 6, -2, -5, 7, 3])); // -5