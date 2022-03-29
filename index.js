const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config;

const userRoute = require("./routes/user");

const port = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("connected to mongo");
  })
  .catch((err) => console.log(err));

app.use("/api/user", userRoute);

app.listen(port, () => {
  console.log("server running");
});
