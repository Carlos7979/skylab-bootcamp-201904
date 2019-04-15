'use strict';
/**
 * Removes the first element of the array and returns that element. This method modifies the length of the array.
 * 
 * @param {Array} array Array to be removed its first element.
 *
 * @returns {Array} The array with its lengh modified.
 */

function shift(array){
    if (!(array instanceof Array)) throw TypeError(array + ' is not an array');
    if (!array.length) return undefined
    var newArray = [];
    (function shift(index) {
        newArray[newArray.length] = array[index];
 		if (++index < array.length) shift(index);
    })(1);
    value = array[0];
    array.length--;
    (function equalArray(index){
        array[index]=newArray[index]
        if(++index < newArray.length) equalArray(index);
    })(0);
    return value;
};