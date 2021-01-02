function hideNumbers(str) {

  let res = '';

  for (let i = 0; i < str.length; i++) {
    if (str.length - i > 4) {
      res += '*';
    } else {
      res += str[i];
    }
  }

  return res;
}

console.log(hideNumbers('01033334444')); // *******4444
console.log(hideNumbers('027778888')); // *****8888