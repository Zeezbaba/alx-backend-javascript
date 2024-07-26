const request = require('request');
const { expect } = require('chai');

describe('Index page', () => {
  const URL = 'http://localhost:7865';

  it('returns correct response', (done) => {
    request.get(`${URL}/`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome to the payment system');
      done();
    });
  });
});
