function sumDivisor(num) {

  let temp = 0;

  for (let i = 1; i < num+1; i++) {
    if (num % i === 0) temp += i;
  }
  return temp;
}

console.log(sumDivisor(100)); // 28