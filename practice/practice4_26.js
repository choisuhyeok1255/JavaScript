function findMinDistance(array) {

  const temp = [];

  for (let i = 0; i < array.length - 1; i++) {
    temp.push(array[i + 1] - array[i]);
  }

  const minTemp = [];

  
  // minTemp.push(temp[0]);

  

  return Math;
}

// 1차원 점의 배열
var array = [1, 3, 4, 8, 13, 17, 20, 23, 24];
console.log(findMinDistance(array)); // [[3, 4], [23, 24]]