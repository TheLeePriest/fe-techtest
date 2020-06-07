import {numberIsMultipleOf} from '../src/modules/utils';

describe('numberIsMultipleOf', function() {
    const numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

    it('Returns all numbers that are multiple of 2 within 10', function() {
        expect(numberIsMultipleOf(2,numbersArray)).toEqual([2,4,6,8,10,12,14])
    });

    it('Type of value returned from the function is an array', function() {
        expect(Array.isArray(numberIsMultipleOf(2,numbersArray))).toBe(true);
    });
});

