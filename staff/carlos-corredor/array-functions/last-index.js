'use strict';
/**
 * Shows the last index of an element within an array.
 * 
 * @param  {*} element The element to be compared.
 * @param  {Array} array Array in wich the element will be searched.
 * @param  {Number} index Optional index from which the item will be searched within the array.
 * 
 * @returns {Number} Index of an element within an array. If the element is not inside the array, the function returns -1.
 */

function lastIndex(array, element, index = array.length-1){
    if (!(array instanceof Array)) throw TypeError(array + ' is not an array');
    index = parseInt(index);
    if(index < 0 && Math.abs(index) < array.length) index = index + array.length;
    if(index < 0 && Math.abs(index) >= array.length && array.length > 0) index = 0;
    for(var j = index; j >= 0; j--){
        if(element === array[j]) return j;
    }
    return -1;
}

// var a = ['a', 'b', 'carlos', 'b'];

// var b = lastIndex('carlos', a)
// console.log(b);

// var c = lastIndex('b', a)
// console.log(c);

// var d = lastIndex('b', a, 2)
// console.log(d);

// var e = lastIndex(1, a)
// console.log(e);