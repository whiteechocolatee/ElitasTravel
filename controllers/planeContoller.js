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
  const errors = {};

  if (!req.body.name) {
    errors.name = { message: "Пожалуйста, укажите имя!" };
  }

  if (!req.body.price) {
    errors.price = { message: "Пожалуйста, укажите цену!" };
  }

  if (!req.body.description) {
    errors.description = {
      message: "Пожалуйста, укажите описание!",
    };
  }

  if (!req.body.capacity) {
    errors.capacity = {
      message: "Пожалуйста, укажите вместимость!",
    };
  }

  if (!req.file) {
    errors.planeImage = {
      message: "Добавьте фото самолета!",
    };
  }

  if (Object.keys(errors).length > 0) {
    return res.status(400).json(errors);
  }

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
