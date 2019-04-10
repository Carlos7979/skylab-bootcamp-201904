'use strict';
/**
 * Concatenate the arrays elements.
 * 
 * @param  {Array} array The array to be concatenated.
 * @param  {*} value Values to be pushed in order at the end of the array. If any value is an array, its elements will be pushed in order at the end of the array. 
 * 
 * @returns {Array} New array with all elements or arrays elements concatenated.
 */

function concat(array, value) {
    if (!(array instanceof Array)) throw TypeError(array + ' is not an array');
    var newArray = arguments[0];
    if (arguments.length > 1){
        for(var i = 1; i < arguments.length; i++) {
            if((arguments[i] instanceof Array)){
                for (var j = 0; j < arguments[i].length; j++){
                    newArray[newArray.length] = arguments[i][j];
                }
            } else {
                newArray[newArray.length] = arguments[i];
            }
        }
    };
    return newArray;
}
    

// var a = [1, 2, 3];
// var b = ['a', 'b', 'c'];
// var c = {};
// var d = [4, 'B'];

// console.log('case 1');

// var e = concat(a, b, c, d);
// console.log(e);
// a = [1, 2, 3];
//  [ 1, 2, 3, "a", "b", "c", {}, 4, "B" ]





