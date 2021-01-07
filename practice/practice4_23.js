function adjacentElementsProduct(arr) {

  let temp = 0;
  let tempArr = [];

  for (let i = 0; i < arr.length - 1; i++) {
    temp = arr[i] * arr[i + 1];
    tempArr.push(temp);
  }
  tempArr.sort();

  return tempArr[arr.length - 2];
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3])); // 21