console.log('DEMO', 'last index');

var a = ['a', 'b', 'carlos', 'b'];

console.log('case 1');
var b = lastIndex('carlos', a)
console.log(b);
// 2

console.log('case 2');
var c = lastIndex('b', a)
console.log(c);
// 3

console.log('case 3');
var d = lastIndex('b', a, 2)
console.log(d);
// 1

console.log('case 4');
var e = lastIndex(1, a)
console.log(e);
// -1