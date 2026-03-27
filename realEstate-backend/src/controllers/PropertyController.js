const propertySchema = require("../models/PropertyModel");

// =======================
// GET ALL
// =======================
const getProperties = async (req, res) => {
  try {
    const properties = await propertySchema.find();

    return res.status(200).json({
      message: "property fetch successfully",
      data: properties,
    });
  } catch (err) {
    return res.status(500).json({
      message: "Error while fetching properties",
      err: err,
    });
  }
};

// =======================
// ADD (JSON)
// =======================
const addProperty = async (req, res) => {
  try {
    const saveProperty = await propertySchema.create(req.body);

    return res.status(200).json({
      message: "property added successfully",
      data: saveProperty,
    });
  } catch (err) {
    return res.status(500).json({
      message: "Error while adding property",
      err: err,
    });
  }
};

// =======================
// CREATE WITH IMAGES
// =======================
const createProperty = async (req, res) => {
  try {
    console.log("FILES:", req.files);

    let imagePaths = [];

    if (req.files && req.files.length > 0) {
      imagePaths = req.files.map((file) => {
        return `http://localhost:3000/${file.path}`;
      });
    }

    const savedProperty = await propertySchema.create({
      ...req.body,
      propertyImages: imagePaths,
    });

    return res.status(201).json({
      message: "property created",
      data: savedProperty,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "error while creating property",
      err: err,
    });
  }
};

// =======================
// UPDATE WITH IMAGES
// =======================
const updateProperty = async (req, res) => {
  try {
    console.log("FILES:", req.files);

    let updateData = { ...req.body };

    // 👉 new images aaye to update karo
    if (req.files && req.files.length > 0) {
      const imagePaths = req.files.map((file) => {
        return `http://localhost:3000/${file.path}`;
      });

      updateData.propertyImages = imagePaths;
    }

    const update = await propertySchema.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true }
    );

    if (!update) {
      return res.status(404).json({
        message: "Property not found",
      });
    }

    return res.status(200).json({
      message: "property updated successfully",
      data: update,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "property is not updated",
      err: err,
    });
  }
};

// =======================
// DELETE
// =======================
const deleteProperty = async (req, res) => {
  try {
    const deleted = await propertySchema.findByIdAndDelete(req.params.id);

    if (!deleted) {
      return res.status(404).json({
        message: "Property not found",
      });
    }

    return res.status(200).json({
      message: "property deleted successfully",
      data: deleted,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "property is not deleted",
      err: err,
    });
  }
};

// =======================
// GET WITH LIMIT
// =======================
const getAllProperties = async (req, res) => {
  try {
    const size = req.query.size;

    let property;

    if (size) {
      property = await propertySchema
        .find({})
        .sort("-createdAt")
        .limit(Number(size));
    } else {
      property = await propertySchema.find({}).sort("-createdAt");
    }

    return res.status(200).json({
      message: "properties fetched successfully",
      data: property,
    });
  } catch (err) {
    return res.status(500).json({
      message: "error fetching properties",
      err: err,
    });
  }
};

// =======================
// SEARCH
// =======================
const searchProperty = async (req, res) => {
  try {
    const {
      location,
      propertyType,
      minPrice,
      maxPrice,
      minArea,
      maxArea,
    } = req.query;

    const query = {};

    if (location) query.location = { $regex: location, $options: "i" };
    if (propertyType)
      query.propertyType = { $regex: propertyType, $options: "i" };

    if (minPrice || maxPrice) {
      query.price = {};
      if (minPrice) query.price.$gte = Number(minPrice);
      if (maxPrice) query.price.$lte = Number(maxPrice);
    }

    if (minArea || maxArea) {
      query.area = {};
      if (minArea) query.area.$gte = Number(minArea);
      if (maxArea) query.area.$lte = Number(maxArea);
    }

    const foundProperties = await propertySchema
      .find(query)
      .sort("-createdAt");

    return res.status(200).json({
      message: "properties fetched successfully",
      data: foundProperties,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "error while finding property",
      err: err,
    });
  }
};

module.exports = {
  getProperties,
  addProperty,
  createProperty,
  updateProperty,
  deleteProperty,
  getAllProperties,
  searchProperty,
};