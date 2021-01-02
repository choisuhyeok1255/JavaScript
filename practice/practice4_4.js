function numPY(s = '') {
  let p = 0;
  let y = 0;

  let temp = s.toUpperCase();

  for (let i = 0; i < s.length; i++) {
    if (temp[i] === 'P') p++;
    if (temp[i] === 'Y') y++;
  }
  if (p === y) {
    return true;
  } else {
    return false;
  }

}

console.log(numPY('pPoooyY')); // true
console.log(numPY('Pyy')); // false
console.log(numPY('ab')); // true
console.log(numPY('')); // true
console.log(numPY()); // true