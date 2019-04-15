'use strict';

describe('lastIndex', function(){
    true && it('should shows the last index of an element within an array', function(){
        var array = [4, 'B', 3, 'B'];
        var element = array[1];
        var result = lastIndex(array, element);

        expect(result, 3);
    });

    true && it('should shows the last index of an element within an array from the indicated index', function(){
        var array = [4, 'B', 3, 'B'];
        var element = array[3];
        var result = lastIndex(array, element, 2);

        expect(result, 1);
    });

    true && it('should get the parse integer index', function(){
        var array = [4, 'B', 3, 'B'];
        var element = array[3];
        var result = lastIndex(array, element, 2.9);

        expect(result, 1);
    });

    true && it('should shows the last index of an array element set equal to undefined if element to be compared is undefined', function(){
        var array = [undefined];
        var result = lastIndex(array);

        expect(result, 0);
    });

    true && it('should shows -1 on an empty array if element is undefined', function(){
        var array = [];
        var result = lastIndex(array);

        expect(result, -1);
    });
    
    true && it('should break on undefined array', function() {
        try {
            lastIndex();

            throw Error('should not arrive here');
        } catch(error) {
            expect(error.message, `Cannot read property 'length' of undefined`);
        }
    });

    true && it('should break if array set equal to null due its length is undefined', function() {
        try {
            var array = null;
            lastIndex(array);

            throw Error('should not arrive here');
        } catch(error) {
            expect(error.message, `Cannot read property 'length' of null`);
        }
    });

    true && it('should break if the first element is not an array', function() {
        try {
            var array = 1;
            lastIndex(array);

            throw Error('should not arrive here');
        } catch(error) {
            expect(error.message, `${array} is not an array`);
        }
    });

});