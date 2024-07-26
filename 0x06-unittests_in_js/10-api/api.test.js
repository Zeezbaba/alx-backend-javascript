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

  it('returns correct response for valid id', (done) => {
    request.get(`${URL}/cart/12`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Payment methods for cart : 12');
      done();
    });
  });

  it('returns status 404 if id is not a positive number', (done) => {
    request.get(`${URL}/cart/hi`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  });

  it('returns valid response', (done) => {
    request.post(`${URL}/login`, {json: {userName: 'Zeezbaba'}}, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome Zeezbaba');
      done();
    });
  });

  it('available_payments returns valid response', (done) => {
    request.get(`${URL}/available_payments`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(JSON.parse(body))
        .to.be.deep.equal({payment_methods: {credit_cards: true, paypal: false}});
      done();
    });
  });
});
