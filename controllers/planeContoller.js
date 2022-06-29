const Planes = require("../models/planeModel");
const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

require("dotenv").config();

/**
 * It gets all the planes from the database and sends them to the client
 * @param req - The request object.
 * @param res - The response object.
 */
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

/**
 * It gets a plane by its id
 * @param req - The request object.
 * @param res - The response object.
 */
const getPlane = async (req, res) => {
  try {
    const plane = await Planes.find({ _id: req.params.id });

    res.status(200).json(plane);
  } catch (error) {
    res.status(400).json({
      message:
        "Возникла ошибка. Такого самолета не существует.",
    });
  }
};

/**
 * It creates a new plane in the database
 * @param req - The request object. This contains information about the HTTP request that raised the
 * event.
 * @param res - The response object.
 */

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
    const { filename: image } = req.file;

    await sharp(req.file.path)
      .resize(500)
      .jpeg({ quality: 50 })
      .toFile(
        path.resolve(
          req.file.destination,
          "resized",
          image,
        ),
      );
    fs.unlinkSync(req.file.path);

    const plane = await Planes.create({
      name,
      price,
      description,
      capacity,
      planeImage: `${process.env.HOST}:${process.env.PORT}/static/resized/${image}`,
    });

    res.status(201).json(plane);
  } catch (err) {
    res.status(500).json({
      message:
        "Не удалось создать самолет, повторите попытку познее",
    });
  }
};

module.exports = { getPlanes, getPlane, createPlane };
