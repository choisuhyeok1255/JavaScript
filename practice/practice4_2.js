function getCount8() {
  let count = 0;
  let j = '';
  let k = '';

  for (let i = 1; i < 10001; i++) {
    k = j + i;
    for (let z = 0; z < k.length; z++) {
      if (k[z] === '8') count++;
    }
  }
  return count;
}

console.log(getCount8()); // 4000