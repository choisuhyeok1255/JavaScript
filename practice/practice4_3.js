function alphaString46(s = '') {
  if (s.length > 3 && s.length < 7) {
    for (let i = 0; i < s.length; i++) {
      if (s[i]+0 === 'string') {
        return false;
      }
    }
    return true;
  }
  return false;
}

console.log(alphaString46('1234')); // true
console.log(alphaString46('9014')); // true
console.log(alphaString46('723')); // false
console.log(alphaString46('a234')); // false
console.log(alphaString46('')); // false
console.log(alphaString46()); // false