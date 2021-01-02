function waterMelon(n) {

  let res = '';
  for (let i = 0; i < n; i++) {
    if (i % 2 === 0) {
      res += '수';
    } else {
      res += '박';
    }
  }
  return res;
}

console.log('n이 3인 경우: ' + waterMelon(3));
console.log('n이 4인 경우: ' + waterMelon(4));