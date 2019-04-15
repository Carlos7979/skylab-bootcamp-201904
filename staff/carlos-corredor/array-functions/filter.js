'use strict';
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
    var newArray = [];
    for (var i = 0; i < array.length; i++)
        if (callback(array[i])) {
            newArray[newArray.length] = array[i]
        } 
    return newArray;
}

// var a = [4, 'B'];

// var result = filter(a, function(p){return typeof p === 'string'});
// console.log(a);