function binarySearch(array, target) {
  var start = 0;
  var end = array.length - 1;
  var mid = Math.floor((end + start) / 2);

  while (!(target === array[mid])) {
    if (target > array[mid]) {
      start = target;
      mid = (end + start) / 2;
    }

    if (target === array[mid]) {
      break;
    }
  }
  return array[mid];
}


console.log(binarySearch([1, 2, 3, 4, 5, 6], 1)); // 0
// console.log(binarySearch([1, 2, 3, 4, 5, 6], 3)); // 2
// console.log(binarySearch([1, 2, 3, 4, 5, 6], 5)); // 4
// console.log(binarySearch([1, 2, 3, 4, 5, 6], 6)); // 5
// console.log(binarySearch([1, 2, 3, 4, 5, 6], -1)); // -1
// console.log(binarySearch([1, 2, 3, 4, 5, 6], 0)); // -1
// console.log(binarySearch([1, 2, 3, 4, 5, 6], 7)); // -1