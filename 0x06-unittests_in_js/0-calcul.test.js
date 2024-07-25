const calculateNumber = require("./0-calcul");
const assert = require('assert');

describe('calculateNumber', () => {
    it('return rounded number for floats', () => {
        assert.strictEqual(calculateNumber(4.0, 1.0), 5);
    });

    it('round down a if fractional number', () => {
        assert.strictEqual(calculateNumber(2.4, 2), 4);
    });

    it('round down b if fractional number', () => {
        assert.strictEqual(calculateNumber(1, 3.4), 4);
    });

    it('round up a if fractional number', () => {
        assert.strictEqual(calculateNumber(2.5, 2), 5);
    });

    it('round up b if fractional number', () => {
        assert.strictEqual(calculateNumber(1, 3.5), 5);
    });

    it('round down a and b if fractional numbar', () => {
        assert.strictEqual(calculateNumber(1.3, 1.4), 2);
    });

    it('round up a and b if fractional numbers', () => {
        assert.strictEqual(calculateNumber(1.5, 1.7), 4);
    });

    it('return zero if a and b are zero', () => {
        assert.strictEqual(calculateNumber(0, 0), 0);
    });
});
