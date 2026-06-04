const Property = require("../models/PropertyModel");

// =======================
// ADMIN - GET ALL
// =======================
const getProperties = async (req, res) => {
  try {
    const properties = await Property.find().sort("-createdAt");

    res.status(200).json({
      message: "All properties fetched ✅",
      data: properties,
    });
  } catch (err) {
    res.status(500).json({
      message: "Error ❌",
      err: err.message,
    });
  }
};

// =======================
// OWNER - CREATE PROPERTY
// =======================
const createProperty = async (req, res) => {
  try {
    let images = [];

    if (Array.isArray(req.files) && req.files.length > 0) {
      images = req.files.map(
        (file) => `http://localhost:3000/uploads/${file.filename}`
      );
    }

    const property = await Property.create({
      ...req.body,
      propertyImages: images,
      ownerId: req.user._id,
    });

    res.status(201).json({
      message: "Property Created ✅",
      data: property,
    });

  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Error creating property ❌",
      err: err.message,
    });
  }
};

// =======================
// OWNER - GET MY PROPERTIES
// =======================
const getMyProperties = async (req, res) => {
  try {
    const properties = await Property.find({
      ownerId: req.user._id,
    }).sort("-createdAt");

    res.json({
      message: "My properties ✅",
      data: properties,
    });

  } catch (err) {
    res.status(500).json({
      message: "Error ❌",
      err: err.message,
    });
  }
};

// =======================
// OWNER - DELETE
// =======================
const deleteProperty = async (req, res) => {
  try {
    const property = await Property.findById(req.params.id);

    if (!property) {
      return res.status(404).json({ message: "Not found ❌" });
    }

    if (property.ownerId.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: "Not allowed ❌" });
    }

    await Property.findByIdAndDelete(req.params.id);

    res.json({ message: "Deleted ✅" });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// =======================
// BUYER - GET ALL
// =======================
const getAllProperties = async (req, res) => {
  try {
    const properties = await Property.find().sort("-createdAt");

    res.json({
      message: "All properties ✅",
      data: properties,
    });

  } catch (err) {
    res.status(500).json({
      message: "Error ❌",
      err: err.message,
    });
  }
};

module.exports = {
  getProperties,
  createProperty,
  getMyProperties,
  deleteProperty,
  getAllProperties,
};