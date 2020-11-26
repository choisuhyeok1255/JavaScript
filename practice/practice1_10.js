var array = [];
var ar = [];

for (var i = 0; i < 6; i++) {
  for (var j = 0; j < 6; j++) {
    if (i + j === 6) {
      array = [];
      array.push(i);
      array.push(j);
      console.log(array);
    }
  }
}

console.log(array);