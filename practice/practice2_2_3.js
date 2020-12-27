function selectionSort(array) {
  let temp = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] > array[j]) {
        temp = array[j];
        array[j] = array[i];
        array[i] = temp;
      }
    }
  }
  return array;
}
console.log(selectionSort([3, 1, 0, -1, 4, 2]));
console.log(selectionSort([2, 4, 5, 1, 3]));
console.log(selectionSort([5, 2, 1, 3, 4, 6]));