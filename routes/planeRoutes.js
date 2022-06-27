const express = require("express");
const router = express.Router();
const path = require("path");
const {
  getPlanes,
  createPlane,
} = require("../controllers/planeContoller");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: "./assets/",
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname +
        "-" +
        Date.now() +
        path.extname(file.originalname),
    );
  },
});

const upload = multer({ storage });

router
  .get("/", getPlanes)
  .get("/:id", (req, res) => {
    res.send("Get single planes");
  })
  .post("/", upload.single("planeImage"), createPlane);

module.exports = router;
