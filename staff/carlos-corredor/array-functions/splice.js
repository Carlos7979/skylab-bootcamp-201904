'use strict';
/**
 * Changes the contents of an array by removing or replacing existing elements and/or adding new elements
 * 
 * @param  {Array} array Array in wich the elements will be removed or replaced.
 * @param  {Number} start Index from which the item will be removed or replaced on the array.
 * @param  {Number} deleteCount integer value indicate the number of items will be removed within the array.
 * @param  {*} arguments The optional elements wich will be inserted within the array starting at the index.
 * 
 * @returns {Array} Array within removed elements.
 */

 function splice (array, start, deleteCount){
    if (!(array instanceof Array)) throw TypeError(array + ' is not an array');
    var newArray = [];
    array.length = array.length - newArray.length
    switch(true){
       case (deleteCount === undefined && arguments.length < 4):
         switch(true){
            case (start > -1 && start < array.length):
               for (var i = start; i < array.length; i++){
                  newArray[newArray.length] = array[i];
               };
               array.length = array.length - newArray.length;
               break;
         };
         break;
    }
    return newArray;
 };

 var a = [];
 var b = [1,2,3,'a','b'];
 console.log(splice(a));
 console.log(splice(b));
 console.log(splice(a, 2));
 console.log(splice(b,2));
//  console.log(a);
 console.log(b);