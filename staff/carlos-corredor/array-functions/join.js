/**
 * Join all the elements within an array.
 * 
 * @param  {Array} arr Array in wich the element will be searched.
 * @param  {Element} separator The element to be separator.
 * 
 * @returns {String} Returns a string as a result of the union of the elements of the array separated by a comma or another indicated element.
 */

function join(arr, separator = ',') {
    var output = '';
    for (var i = 0; i < arr.length; i++){
        if(i === 0) {
            output += arr[i];
        } else {
            output += separator + arr[i];
        }
    }
    return output;
}

// var a = [1, 2, 3];
// var b = ['a', 'b', 'c'];
// var c = [4, 'B'];

// console.log(join(a));
// console.log(join(b, ''));
// console.log(join(c, '-'));
