'use strict';

describe('concat', function () {
    it('should cocatenate various arrays in order', function () {
        var a = [1, 2, 3];
        var b = ['a', 'b', 'c'];
        var c = 7;
        var d = [4, 'B'];

        var result = concat(a, b, c, d);
        var array = [ 1, 2, 3, 'a', 'b', 'c', 7, 4, 'B' ]

        expect(result, array, true);

    });

    it('should return the same array', function() {
        var a = [1, 2, 3];
        var result = concat(a);
        var array = [1, 2, 3]

        expect(result, array, true);
    });

    it('should break on undefined array', function() {
        try {
            var a = 1;
            concat(a);

            throw Error('should not arrive here');
        } catch(error) {
            expect(error.message, `${a} is not an array`);
        }
    });
});

    