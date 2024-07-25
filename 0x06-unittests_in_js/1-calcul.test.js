const calculateNumber = require("./1-calcul");
const assert = require('assert');

describe('calculateNumber', () => {
    describe('SUM', () => {
        it('adds positive numbers', () => {
            assert.strictEqual(calculateNumber('SUM', 1.0, 3.0), 4);
        });

        it('adds int and float numbers', () => {
            assert.strictEqual(calculateNumber('SUM', 2, 3.1), 5);
        });

        it('adds zero', () => {
            assert.strictEqual(calculateNumber('SUM', 0, 0), 0);
        });

        it('adds negative numbers', () => {
            assert.strictEqual(calculateNumber('SUM', -2, -3.2), -5);
        });

        it('adds a positive and a negative number', () => {
            assert.strictEqual(calculateNumber('SUM', 4.0, -2.0), 2);
        });

        it('returns 0 for 0 fraction numbers', () => {
            assert.strictEqual(calculateNumber('SUM', 0.4, 0.1), 0);
        });
    });

    describe('SUBTRACT', () => {
        it('subtracts positive numbers', () => {
            assert.strictEqual(calculateNumber('SUBTRACT', 5.0, 2.1), 3);
        });

        it('subtract int and float numbers', () => {
            assert.strictEqual(calculateNumber('SUBTRACT', 4, 1.2), 3);
        });

        it('subtracts zeros', () => {
            assert.strictEqual(calculateNumber('SUBTRACT', 0, 0), 0);
        });

        it('subtracts negative numbers', () => {
            assert.strictEqual(calculateNumber('SUBTRACT', -2.7, -2), -1);
        });

        it('subtracts a positive and a negative number', () => {
            assert.strictEqual(calculateNumber('SUBTRACT', -4.0, 1.5), -6);
        });

        it('returns 0 for 0 fraction numbers', () => {
            assert.strictEqual(calculateNumber('SUBTRACT', 0.4, 0.1), 0);
        });
    });

    describe('DIVIDE', () => {
        it('divides positive numbers', () => {
            assert.strictEqual(calculateNumber('DIVIDE', 6.1, 2.4), 3);
        });

        it('divides negative numbers', () => {
            assert.strictEqual(calculateNumber('DIVIDE', -2.0, -2.0), 1);
        });

        it('divides a positive and negative numbers', () => {
            assert.strictEqual(calculateNumber('DIVIDE', 4.0, -1.2), -4);
        });

        it('divides int and float numbers', () => {
            assert.strictEqual(calculateNumber('DIVIDE', 6, 3.2), 2);
        });

        it('returns 1 for 0 fraction numbers', () => {
            assert.strictEqual(calculateNumber('DIVIDE', 0.8, 0.5), 1);
        });

        it('returns 0 for 0 numbers', () => {
            assert.strictEqual(calculateNumber('DIVIDE', 0.1, 0), 'Error');
        });
    });
});
