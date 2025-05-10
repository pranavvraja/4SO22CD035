import express from "express";
import numbers from "./numbers.js";
const app = express();

const windowSize = 10;
var windowCurrState = [];

app.get("/", (req, res) => {
  res.send("Calculator Microservice!");
});

app.use("/numbers", numbers);

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
