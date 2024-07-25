const calculateNumber = require("./2-calcul_chai");
const { expect } = require('chai');

describe('calculateNumber', () => {
    describe('SUM', () => {
        it('adds positive numbers', () => {
            expect(calculateNumber('SUM', 1.0, 3.0)).to.equal(4);
        });

        it('adds int and float numbers', () => {
            expect(calculateNumber('SUM', 2, 3.1)).to.equal(5);
        });

        it('adds zero', () => {
            expect(calculateNumber('SUM', 0, 0)).to.equal(0);
        });

        it('adds negative numbers', () => {
            expect(calculateNumber('SUM', -2, -3.2)).to.equal(-5);
        });

        it('adds a positive and a negative number', () => {
            expect(calculateNumber('SUM', 4.0, -2.0)).to.equal(2);
        });

        it('returns 0 for 0 fraction numbers', () => {
            expect(calculateNumber('SUM', 0.4, 0.1)).to.equal(0);
        });
    });

    describe('SUBTRACT', () => {
        it('subtracts positive numbers', () => {
            expect(calculateNumber('SUBTRACT', 5.0, 2.1)).to.equal(3);
        });

        it('subtract int and float numbers', () => {
            expect(calculateNumber('SUBTRACT', 4, 1.2)).to.equal(3);
        });

        it('subtracts zeros', () => {
            expect(calculateNumber('SUBTRACT', 0, 0)).to.equal(0);
        });

        it('subtracts negative numbers', () => {
            expect(calculateNumber('SUBTRACT', -2.7, -2)).to.equal(-1);
        });

        it('subtracts a positive and a negative number', () => {
            expect(calculateNumber('SUBTRACT', -4.0, 1.5)).to.equal(-6);
        });

        it('returns 0 for 0 fraction numbers', () => {
            expect(calculateNumber('SUBTRACT', 0.4, 0.1)).to.equal(0);
        });
    });

    describe('DIVIDE', () => {
        it('divides positive numbers', () => {
            expect(calculateNumber('DIVIDE', 6.1, 2.4)).to.equal(3);
        });

        it('divides negative numbers', () => {
            expect(calculateNumber('DIVIDE', -2.0, -2.0)).to.equal(1);
        });

        it('divides a positive and negative numbers', () => {
            expect(calculateNumber('DIVIDE', 4.0, -1.2)).to.equal(-4);
        });

        it('divides int and float numbers', () => {
            expect(calculateNumber('DIVIDE', 6, 3.2)).to.equal(2);
        });

        it('returns 1 for 0 fraction numbers', () => {
            expect(calculateNumber('DIVIDE', 0.8, 0.5)).to.equal(1);
        });

        it('returns 0 for 0 numbers', () => {
            expect(calculateNumber('DIVIDE', 0.1, 0)).to.equal('Error');
        });
    });
});
