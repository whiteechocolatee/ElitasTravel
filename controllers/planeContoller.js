const Planes = require("../models/planeModel");
require("dotenv").config();

const getPlanes = async (req, res) => {
  try {
    const planes = await Planes.find();
    res.status(200).json(planes);
  } catch (error) {
    res.status(500).json({
      message:
        "Не удалось получить список самолетов. Повторите попытку позднее.",
    });
  }
};

const createPlane = async (req, res) => {
  try {
    const { name, price, description, capacity } = req.body;

    const plane = await Planes.create({
      name,
      price,
      description,
      capacity,
      planeImage: `${process.env.HOST}:${process.env.PORT}/static/${req.file.filename}`,
    });

    res.status(201).json(plane);
  } catch (err) {
    res.status(500).json({
      message:
        "Не удалось создать самолет, повторите попытку познее",
    });
  }
};

module.exports = { getPlanes, createPlane };
