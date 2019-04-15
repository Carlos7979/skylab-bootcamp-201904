'use strict';
/**
 * Reverses the order of the elements of an array.
 * 
 * @param {Array} array Array to be reversed.
 *
 * @returns {Array} The array reversed.
 */

// function reverse(array){
//     if (!(array instanceof Array)) throw TypeError(array + ' is not an array');
//     var newArray = [];
//     array.length && (function reverse(index) {
//         newArray[newArray.length] = array[index];
// 		if (--index > -1) reverse(index);
//     })(array.length - 1);
//     array = newArray;
//     return array;
// }; // no cambia al array original

function reverse(array){
    if (!(array instanceof Array)) throw TypeError(array + ' is not an array');
    var newArray = [];
    array.length && (function reverse(index) {
        newArray[newArray.length] = array[index];
		if (--index > -1) reverse(index);
    })(array.length - 1);
    (function equalArray(index){
        array[index]=newArray[index]
        if(++index < newArray.length) equalArray(index);
    })(0);
    return array;
};