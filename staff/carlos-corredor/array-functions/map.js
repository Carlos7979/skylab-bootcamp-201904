'use strict';
/**
 * Shows the last index of an element within an array.
 * 
 * @param {Array} array The array to iterate.
 * @param {Function} callback The expression to evaluate.
 * 
 * @returns {Array} New array with results of the call to the indicated function applied to each of array elements
 */

function map(array, callback){
    if (!(array instanceof Array)) throw TypeError(array + ' is not an array');
    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function');
    var newArray = [];
    array.length && (function map(index) {
		newArray[index] = callback(array[index], index);
		if (++index < array.length)
			map(index);
    })(0);
    return newArray;
}

