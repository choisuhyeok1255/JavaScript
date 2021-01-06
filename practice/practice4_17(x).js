function numberOfPrime(n) {
  const temp = [];
  for (let i = 1; i < n + 1; i++) {
    temp.push(i);
  }

  function sosu(i) {

    let count = 0;

    for (let j = 1; j < i; j++) {
      if (i / j !== 0) {
        count++;
      } else {
        count++;
      }
    }

    if (count === 1) {
      return 1;
    } else {
      return 0;
    }
  }
  const res = temp.filter(i => sosu(i));

  console.log(res);
}

console.log(numberOfPrime(10)); // 4