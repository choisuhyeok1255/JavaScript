function checkPalindrom(str) {
  let reverse = '';

  for (let i = str.length; i > 0; i--) {
    reverse += str[i - 1];
  }

  return reverse === str ? true : false;
}

console.log(checkPalindrom('dad')); // true
console.log(checkPalindrom('mom')); // true
console.log(checkPalindrom('palindrom')); // false
console.log(checkPalindrom('s')); // true