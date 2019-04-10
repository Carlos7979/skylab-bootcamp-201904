/**
 * Shows the last index of an element within an array.
 * 
 * @param  {Element} element The element to be compared.
 * @param  {Array} arr Array in wich the element will be searched.
 * @param  {Number} i Index from which the item will be searched within the array.
 * 
 * @returns {Number} Index of an element within an array. If the element is not inside the array, the function returns -1.
 */

function lastIndex(element, arr, i = arr.length-1){
    for(var j = i; j >= 0; j--){
        if(element === arr[j]) return j;
    }
    return -1;
}

var a = ['a', 'b', 'carlos', 'b'];

var b = lastIndex('carlos', a)
console.log(b);

var c = lastIndex('b', a)
console.log(c);

var d = lastIndex('b', a, 2)
console.log(d);

var e = lastIndex(1, a)
console.log(e);