const express = require("express");
const router = express.Router();
const path = require("path");

router
  .get("/", (req, res) => {
    res.send("Get all planes");
  })
  .get("/:id", (req, res) => {
    res.send("Get single planes");
  })
  .post("/", (req, res) => {
    res.send("Create plane");
  });

module.exports = router;
