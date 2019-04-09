console.log('DEMO', 'filter');

var num = [1, 2, 3, 4];

console.log('case 1');
console.log(filter(num, function(element){ return element <= 2;}));
// [1, 2]


console.log('case 2');
console.log(filter(num, function(element){ return element > 2;}));
// [3, 4]

