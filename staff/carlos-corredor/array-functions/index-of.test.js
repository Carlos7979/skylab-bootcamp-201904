'use strict';

describe('indexOf', function(){
    true && it('should shows the first index of an element within an array', function(){
        var array = [4, 'B', 3, 'B'];
        var element = array[3];
        var result = indexOf(array, element);

        expect(result, 1);
    });

    true && it('should shows the index of an element within an array from the indicated index', function(){
        var array = [4, 'B', 3, 'B'];
        var element = array[1];
        var result = indexOf(array, element, 2);

        expect(result, 3);
    });

    true && it('should get the parse integer index', function(){
        var array = [4, 'B', 3, 'B'];
        var element = array[1];
        var result = indexOf(array, element, 2.9);

        expect(result, 3);
    });

    true && it('should shows the index of an array element set equal to undefined if element to be compared is undefined', function(){
        var array = [undefined];
        var result = indexOf(array);

        expect(result, 0);
    });

    true && it('should shows -1 on an empty array if element is undefined', function(){
        var array = [];
        var result = indexOf(array);

        expect(result, -1);
    });
    
    true && it('should break on undefined array', function() {
        try {
            indexOf();

            throw Error('should not arrive here');
        } catch(error) {
            expect(error.message, 'undefined is not an array');
        }
    });

    true && it('should break if the first element is not an array', function() {
        try {
            var array = 1;
            indexOf(array);

            throw Error('should not arrive here');
        } catch(error) {
            expect(error.message, `${array} is not an array`);
        }
    });

});