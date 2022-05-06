const mercadopago = require("mercadopago");
const { config } = require("../../config");

async function createPixPayment(paymentData) {
  mercadopago.configurations.setAccessToken(config.access_token);

  let response = await mercadopago.payment
    .create(paymentData)
    .then(function (data) {
      return data;
    })
    .catch(function (error) {
      console.error(error);
      return error;
    });

  return response;
}

async function followPix(id) {
  mercadopago.configurations.setAccessToken(config.access_token);

  let response = await mercadopago.payment
    .findById(id)
    .then((data) => data)
    .error((e) => e);

  return response;
}

exports.pix = { createPixPayment, followPix };
