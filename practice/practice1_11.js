var star = '*';
var tree = '';
var enter = '\n';

for (var i = 0; i < 5; i++) {
  for (var j = 0; j <= i; j++) {
    tree += star;
  }
  if (i < 4) {
    tree += enter;
  }
}
console.log(tree);