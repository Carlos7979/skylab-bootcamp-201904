'use strict';

describe('filter', function () {
    it('should return another array within those elemnts that meet a condition evaluated in a function', function () {
        var a = [4, 'B'];

        var result = filter(a, function(p){return typeof p === 'string'});
        var array = ['B'];

        expect(result, array, true);

    });

    it('should break on undefined array', function() {
        try {
            filter();

            throw Error('should not arrive here');
        } catch(error) {
            expect(error.message, `undefined is not an array`);
        }
    });

    it('should break if the first element is not an array', function() {
        try {
            var a = 1;
            filter(a);

            throw Error('should not arrive here');
        } catch(error) {
            expect(error.message, `${a} is not an array`);
        }
    });

    it('should break on undefined callback', function () {
        var array = [1, 2, 3];

        try {
            filter(array);

            throw Error('should not reach this point');
        } catch (error) {
            expect(error.message, 'undefined is not a function');
        }
    });

    it('should break if the second element is not a function', function () {
        var array = [1, 2, 3];
        var a = 1;
        try {
            filter(array, a);

            throw Error('should not reach this point');
        } catch (error) {
            expect(error.message, a +' is not a function');
        }
    });
});

    