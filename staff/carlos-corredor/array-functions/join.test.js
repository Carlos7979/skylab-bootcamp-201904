'use strict';

describe('join', function(){
    true && it('should return a string of elements separated by comma', function(){
        var array = [4, 'B', 3, 'B'];
        var result = join(array);

        expect(result, '4,B,3,B');
    });

    true && it('should return a string of elements separated by a string', function(){
        var array = [4, 'B', 3, 'B'];
        var result = join(array, '');

        expect(result, '4B3B');
    });
    
    true && it('should break on undefined array', function() {
        try {
            join();

            throw Error('should not arrive here');
        } catch(error) {
            expect(error.message, `undefined is not an array`);
        }
    });

    true && it('should break if the first element is not an array', function() {
        try {
            var array = 1
            join(array);

            throw Error('should not arrive here');
        } catch(error) {
            expect(error.message, array + ' is not an array');
        }
    });

    true && it('should break if the second element is not an string', function() {
        try {
            var array = [1, 2];
            var string = 1
            join(array, string);

            throw Error('should not arrive here');
        } catch(error) {
            expect(error.message, `${string} is not an string`);
        }
    });
});