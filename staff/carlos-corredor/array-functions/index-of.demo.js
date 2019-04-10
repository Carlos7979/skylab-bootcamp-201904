console.log('DEMO', 'index of');

var a = ['a', 'b', 'carlos', 'b'];

console.log('case 1');
var b = indexOf('carlos', a)
console.log(b);
// 2

console.log('case 2');
var c = indexOf('b', a)
console.log(c);
// 1

console.log('case 3');
var d = indexOf('b', a, 2)
console.log(d);
// 3

console.log('case 4');
var e = indexOf(1, a)
console.log(e);
// -1