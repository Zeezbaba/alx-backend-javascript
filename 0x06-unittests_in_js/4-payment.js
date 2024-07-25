const Utils = require("./utils");

function sendPaymentRequestToApi(totalAmount, totalShipping) {
  const totalFunds = Utils.calculateNumber('SUM', totalAmount, totalShipping);
  console.log(`The total is: ${totalFunds}`);
}

module.exports = sendPaymentRequestToApi;
