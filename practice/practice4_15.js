function getRestCoordinate(array) {
  const temp = array.flat(2);

  // console.log(temp);

  const tempX = temp.filter((_, i) => i % 2 === 0);
  // console.log(tempX);

  const tempY = temp.filter((_, i) => i % 2 !== 0);
  // console.log(tempY);

  let x = 0;
  let y = 0;
  if (tempX[0] === tempX[1]) {
    x = tempX[2];
  } else if (tempX[1] === tempX[2]) {
    x = tempX[0];
  } else if (tempX[0] === tempX[2]) {
    x = tempX[1];
  }

  if (tempY[0] === tempY[1]) {
    y = tempY[2];
  } else if (tempY[1] === tempY[2]) {
    y = tempY[0];
  } else if (tempY[0] === tempY[2]) {
    y = tempY[1];
  }

  return [x, y];
}

console.log(getRestCoordinate([
  [1, 4],
  [3, 4],
  [3, 10]
])); // [1, 10]
console.log(getRestCoordinate([
  [1, 4],
  [1, 10],
  [3, 4]
])); // [1, 10]