const express = require("express");
const mongoose = require("mongoose");

const app = express();

require("dotenv").config();

const port = process.env.PORT || 5000;

app
  .use(express.json())
  .use(express.urlencoded({ extended: true }))
  .use("/static", express.static(__dirname + "/assets"))
  .use("/api/planes", require("./routes/planes"));

/* Connecting to the mongodb database and then starting the server. */
mongoose.connect("mongodb://127.0.0.1:27017").then(() => {
  app.listen(port, () => {
    console.log(`server was started at port ${port}`);
  });
});
