console.log('DEMO', 'join');

var a = [1, 2, 3];
var b = ['a', 'b', 'c'];
var c = [4, 'B'];

console.log('case 1');
console.log(join(a));
// 1,2,3

console.log('case 2');
console.log(join(b, ''));
// abc

console.log('case 3');
console.log(join(c, '-'));
// 4-B