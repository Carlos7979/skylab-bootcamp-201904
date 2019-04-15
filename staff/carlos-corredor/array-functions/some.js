'use strict';
/**
 * Iterates an array and evaluates an expression on each of its values, returning true if some of them match it. Otherwise returns false.
 * 
 * @param {Array} array The array to iterate.
 * @param {Function} callback The expression to evalute.
 * 
 * @returns {boolean} True if some value match the expression, otherwise false.
 */

function some(array, callback) {
    if (!(array instanceof Array)) throw TypeError(array + ' is not an array');
    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function');

    for (var i = 0; i < array.length; i++)
        if (callback(array[i])) return true;

    return false;
}