console.log('DEMO', 'every');

var a = 1;
var b = 'a';
var c = true;
var d = [];
var e = {a: 1, b: 2};
var f = undefined
var g = null

console.log('case 1');
console.log(isArray(a));
// false

console.log('case 2');
console.log(isArray(b));
// false

console.log('case 3');
console.log(isArray(c));
// false

console.log('case 4');
console.log(isArray(d));
// true

console.log('case 5');
console.log(isArray(e));
// false

console.log('case 6');
console.log(isArray(f));
// false

console.log('case 7');
console.log(isArray(g));
// false