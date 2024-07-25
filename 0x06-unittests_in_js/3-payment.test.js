const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');
const sinon = require('sinon');
const { expect } = require('chai');

describe('sendPaymentRequestToApi', () => {
  it('sendPaymentRequestToApi is same as UtilscalculateNumber', () => {
    const spycalculateNumber = sinon.spy(Utils, 'calculateNumber');

    sendPaymentRequestToApi(100, 20);

    expect(spycalculateNumber.calledOnceWithExactly('SUM', 100, 20)).to.be.true;

    spycalculateNumber.restore();
  });
});
