'use strict';
console.log('DEMO', 'concat');

var a = [1, 2, 3];
var b = ['a', 'b', 'c'];
var c = [4, 'B'];

console.log('case 1');

var d = concatF(a, b);
console.log(d);
a = [1, 2, 3];
// [ 1, 2, 3, 'a', 'b', 'c' ]


console.log('case 2');

var e = concatF(a, b, c);
console.log(e);
a = [1, 2, 3];
// [ 1, 2, 3, 'a', 'b', 'c', 4, 'B' ]

console.log('case 3');

try {
    concatF(a, 1);
} catch(error) {
    console.error(error.message);
}
// 1 is not an array
