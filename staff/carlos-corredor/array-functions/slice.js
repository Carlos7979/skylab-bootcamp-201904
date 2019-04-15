'use strict';
/**
 * Returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included).
 * 
 * @param  {Array} array Array in wich the element will be copied.
 * @param  {Number} begin Index from which the copy will be begin within the array.
 * @param  {Number} end Index from which the copy will be stop within the array.
 * 
 * @returns {Array} New array.
 */

function slice(array, begin = 0, end = array.length){
    if (!(array instanceof Array)) throw TypeError(array + ' is not an array');
    var newArray = [];
    begin = parseInt(begin);
    end = parseInt(end);
    if(begin < 0 && Math.abs(begin) >= array.length) begin = 0;
    if(begin < 0 && Math.abs(begin) < array.length) begin = begin + array.length;
    if(end < 0 && Math.abs(end) >= array.length) end = 0;
    if(end < 0 && Math.abs(end) < array.length) end = end + array.length;
    if(!array.length || begin >= array.length || begin >= end) return newArray;
    (function slice(index) {
        newArray[newArray.length] = array[index];
		if (++index < end) slice(index);
    })(begin);
    return newArray;
};
