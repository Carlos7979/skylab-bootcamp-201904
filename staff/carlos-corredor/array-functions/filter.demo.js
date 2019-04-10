console.log('DEMO', 'filter');

var a = [1, 2, 3];
var b = ['abc', 'beto', 'carlos'];
var c = [4, 'B'];

console.log('case 1');
var d = filter(a, function(p){return p < 3})
console.log(d);
// [ 1, 2 ]

console.log('case 2');
var e = filter(a, function(p){return p > 2})
console.log(e);
// [ 3 ]

console.log('case 3');
var f = filter(b, function(p){return p.length > 3})
console.log(f);
// [ "beto", "carlos" ]

console.log('case 4');
var g = filter(c, function(p){return typeof p === 'string'})
console.log(g);
// [ "B" ]

console.log('case 5');
try {
    filter();
} catch(error) {
    console.error(error.message);
}
// 

console.log('case 6');
try {
    filter(a, 1);
} catch(error) {
    console.error(error.message);
}
// 