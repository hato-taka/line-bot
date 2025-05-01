const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post("/webhook", (req, res) => {
  console.log("LINE Webhook Received:", JSON.stringify(req.body, null, 2));
  res.status(200).send("OK");
});

app.get("/", (req, res) => {
  res.send("LINE Webhook Server Running");
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
