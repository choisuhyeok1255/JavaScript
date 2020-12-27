// if문
function evenOrOdd(num) {
  let res = '';
  if (num % 2 === 0) {
    res += 'Even';
  } else {
    res += 'Odd';
  }
  return res;
}

console.log(evenOrOdd(2)); // Even
console.log(evenOrOdd(3)); // Odd
console.log(evenOrOdd(1000)); // Even

// 삼항 조건 연산자
function evenOrOdd(num) {
  let res = '';
  num % 2 === 0 ? res += 'Even' : res += 'Odd';
  return res;
}

console.log(evenOrOdd(2)); // Even
console.log(evenOrOdd(3)); // Odd
console.log(evenOrOdd(1000)); // Even