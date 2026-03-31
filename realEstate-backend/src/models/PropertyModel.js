const mongoose = require("mongoose");

const propertySchema = new mongoose.Schema(
  {
    propertyTitle: {
      type: String,
      required: true,
      trim: true,
    },

    propertyDescription: {
      type: String,
      required: true,
    },

    propertyType: {
      type: String,
      enum: ["House", "Apartment", "Land", "Commercial"],
      default: "House",
    },

    listingType: {
      type: String,
      enum: ["Sale", "Rent"],
      default: "Sale",
    },

    price: {
      type: Number,
      required: true,
    },

    area: {
      type: Number,
    },

    bedrooms: {
      type: Number,
      default: 0,
    },

    bathrooms: {
      type: Number,
      default: 0,
    },

    furnishing: {
      type: String,
      enum: ["Furnished", "Semi Furnished", "Unfurnished"],
      default: "Unfurnished",
    },

    parking: {
      type: Boolean,
      default: false,
    },

    // 🔥 ONLY ONE IMAGE FIELD
    propertyImages: [
      {
        type: String,
      },
    ],

    // 🔥 OWNER LINK (VERY IMPORTANT)
    ownerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },

    status: {
      type: String,
      enum: ["Available", "Sold", "Rented"],
      default: "Available",
    },

    approvalStatus: {
      type: String,
      enum: ["Pending", "Approved", "Rejected"],
      default: "Pending",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Property", propertySchema);