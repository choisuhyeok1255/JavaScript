var x = '     ';
var y = '';

for (var i = 0; i < 5; i++) {
  x = x.replace(' ', '');
  y += '*';
  console.log(x + y);
}