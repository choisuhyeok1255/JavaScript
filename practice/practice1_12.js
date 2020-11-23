// var x = '******';
// var y = '';

// for (var i = 0; i < 5; i++) {
//   x = x.replace('*', '');
//   y += ' ';
//   console.log(y + x);
// }

var star = '*';
var space = ' ';
var enter = '\n';
var tree = '';
var line = 0;

for (var i = 5; i > 0; i--) {
  for (var j = 0; j < i; j++) {
    tree += star;
  }
  tree = tree + enter;
  line++;
}
console.log(tree);