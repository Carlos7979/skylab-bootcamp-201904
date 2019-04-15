'use strict';

describe('isArray', function(){
    true && it('should return true if an element is an array', function(){
        var element = [4, 'B', 3, 'B'];
        var result = isArray(element);

        expect(result, true);
    });

    true && it('should return false if element is not an array', function(){
        var element = 1;
        var result = isArray(element);

        expect(result, false);
    });
    
    true && it('should return false if element is undefined', function(){
        var element = 1;
        var result = isArray(element);

        expect(result, false);
    });
});