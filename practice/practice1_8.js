var result = 0;

for (var i = 1; i < 20; i++) {
  if (!((i % 2 === 0) || (i % 3 === 0))) {
    result += i;
    // console.log(i);
  }
}

console.log(result);