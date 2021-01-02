function toWeirdCase(s) {
  let res = '';
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === ' ') {
      count = -1;
    }
    count % 2 ? res += s[i].toLowerCase() : res += s[i].toUpperCase();

    count++;
  }
  return res;
}

console.log(toWeirdCase('hello world')); // 'HeLlO WoRlD'
console.log(toWeirdCase('my name is lee')); // 'My NaMe Is LeE'