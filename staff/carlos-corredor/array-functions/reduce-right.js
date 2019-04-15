'use strict';
/**
 * Applies a function to an accumulator and to each value of an array (from right to left) to reduce it to a single value.
 * 
 * @param {Array} array Array wich elements will be reduced.
 * @param {Function} callback The expression to evaluate.
 * @param {*} initial Optional initial value for callback.
 * 
 * @returns {*} Return a single value.
 */

function reduceRight(array, callback, initial){
    if (!(array instanceof Array)) throw TypeError(array + ' is not an array');
    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function');
    if(array.length < 1 && initial === undefined) throw TypeError('Reduce of empty array with no initial value at Array')
    var index = array.length -1;
    var previous = initial;
    var actual = array[index];
    if(array.length < 1 && initial !== undefined) return previous;
    if(array.length === 1 && initial === undefined) return actual;
    if(initial === undefined) {
        previous = array[index--];
        actual = array[index];
    }
    array.length && (function reduceRight() {
		actual = callback(previous, actual, index);
        if (--index > -1){
            previous = actual
            actual = array[index]
            reduceRight();
        }
    })();
    return actual;
}