'use strict';
/**
 * Sorts the elements of an array in place and returns the array. The default sort order is built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.
 * 
 * @param  {Array} array Array to be ordered.
 * @param {Function} callback The optional function to be evaluate in order to compare.
 * 
 * @returns {Array} Array ordered.
 */

 function sort (array, callback){
    if (!(array instanceof Array)) throw TypeError(array + ' is not an array');
    if(!callback) callback = (a,b) => String(a) > String (b);
    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function');
    if(!array.length) return [];
        for(var i = array.length-1; i > -1; i--){
        for(var j = 0; j < i; j++){
            var b = callback(array[j], array[j+1]);
            if (typeof b !== 'boolean'){
                b = false;
                if(callback(array[j], array[j+1]) > 0) b = true;
            }    
            if(b){
                var auxiliar = array[j+1];
                array[j+1] = array[j];
                array[j] = auxiliar;
            }
        }
    }
    return array;
 }

    // (function sort(length){
    //     (function sort(index) {
    //         if(callback(array[index], array[index+1])){
    //             auxiliaryArray = array[index +1];
    //             array[index +1] = array[index];
    //             array[index] = auxiliaryArray;
    //             if (++index < length) sort(index);
    //         }
    //      })(0);
    //     if (--length > -1) sort(length);
    // })(array.length-1);