const functions = require("firebase-functions");

const express = require("express");

const {pix} = require("./modules/payment/pix");

const app = express();

app.get("/", (req, res) => {
  res.status(200).send({ data: "functions ok" });
});

app.post("/pix", async (req, res) => {
  let response = await pix.createPixPayment(req.body);

  res.status(200).send({
    data: response,
  });
});

app.get("/pix", async (req, res) => {
  let response = await pix.followPix(req.header("idPix"));

  res.status(200).send({
    data: response,
  });
});

exports.app = functions.https.onRequest(app);