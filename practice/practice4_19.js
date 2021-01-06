function digitSum(n) {
  if (n > 100000000) return false;

  const temp = '' + n;
  let res = 0;

  for (let i = 0; i < temp.length; i++) {
    res += +temp[i];
  }

  return res;
}

console.log(digitSum(123)); // 6
console.log(digitSum(987)); // 24
console.log(digitSum(100000001)); // false