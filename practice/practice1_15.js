var star = '*';
var result = '';
var space = ' ';

for (var i = 0; i < 5; i++) {
  for (var j = 0; j <= i; j++) {
    result += star;
  }
  for (var k = 0; k <= i; k++) {
    result += space;
  }
  console.log(result);
}