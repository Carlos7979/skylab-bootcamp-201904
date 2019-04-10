/**
 * Iterates an array and return another array within those elemnts that meet a condition evaluated in a function.
 * 
 * @param {Array} array The array to iterate.
 * @param {Function} callback The expression to evalute.
 * 
 * @returns {Array} New array.
 */


function filter(array, callback) {
    if (!(array instanceof Array)) throw TypeError(array + ' is not an array');
    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function');
    newArray = [];
    for (var i = 0; i < array.length; i++)
        if (callback(array[i])) {
            newArray[newArray.length] = array[i]
        } 

    return newArray;
}

// var a = [1, 2, 3];
// var b = ['abc', 'beto', 'carlos'];
// var c = [4, 'B'];

// var d = filter(a, function(p){return p < 3})
// console.log(d);

// var e = filter(a, function(p){return p > 2})
// console.log(e);

// var f = filter(b, function(p){return p.length > 3})
// console.log(f);

// var g = filter(c, function(p){return typeof p === 'string'})
// console.log(g);