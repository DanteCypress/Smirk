const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_o0LPHcf7pKwZnalyMVp7ZJCA");

//API

//App Config
const app = express();

//Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

//API Routes
app.get("/", (request, response) => response.status(200).send("hello"));
app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request executed", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
//Listen Command
exports.api = functions.https.onRequest(app);

//testing endpoint
//http://localhost:5001/smirk-9248a/us-central1/api
