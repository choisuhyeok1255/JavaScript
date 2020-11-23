// var x = '******';
// var y = '';

// for (var i = 0; i < 5; i++) {
//   x = x.replace('*', '');
//   y += ' ';
//   console.log(x + y);
// }

var star = '*';
var enter = '\n';
var tree = '';

for (var i = 5; i > 0; i--) {
  for (var j = 0; j < i; j++) {
    tree += star;
  }
  tree = tree + enter;
}
console.log(tree);