import {numberArrayGenerator} from '../src/modules/utils';

describe('numberGenerator', function() {
    it('Generates an array with a length of 144', function() {
        expect(numberArrayGenerator(1,144)).toHaveLength(144)
    });

    it('Generates an array with a length of 33', function() {
        expect(numberArrayGenerator(5,37)).toHaveLength(33)
    });

    it('Generates an array with only numbers', function() {
        expect(numberArrayGenerator(1,10)).toHaveLength(10)
        expect(numberArrayGenerator(1,10).every(number => typeof number === 'number')).toBe(true)
    });
});
