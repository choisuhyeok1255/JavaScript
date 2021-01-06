function isHarshad(n) {
  const temp = n + '';
  let num = 0;

  for (let i = 0; i < temp.length; i++) {
    num += +temp[i];
  }

  // console.log(num);
  return (n % num === 0) ? true : false;
}

console.log(isHarshad(10)); // true
console.log(isHarshad(12)); // true
console.log(isHarshad(18)); // true
console.log(isHarshad(11)); // false
console.log(isHarshad(13)); // false