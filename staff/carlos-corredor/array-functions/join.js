'use strict';
/**
 * Join all the elements within an array.
 * 
 * @param  {Array} array Array in wich the element will be searched.
 * @param  {String} separator The string to be separator.
 * 
 * @returns {String} Returns a string as a result of the union of the elements of the array separated by a comma or another indicated element.
 */

function join(array, separator = ',') {
    if (!(array instanceof Array)) throw TypeError(array + ' is not an array');
    if (!(typeof separator === 'string')) throw TypeError(separator + ' is not an string');
    var output = '';
    for (var i = 0; i < array.length; i++){
        if(i === 0) {
            output += array[i];
        } else {
            output += separator + array[i];
        }
    };
    return output;
}

// var a = [1, 2, 3];
// var b = ['a', 'b', 'c'];
// var c = [4, 'B'];

// console.log(join(a));
// console.log(join(b, ''));
// console.log(join(c, '-'));
