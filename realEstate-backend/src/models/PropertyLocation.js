const mongoose = require("mongoose")
const Schema = mongoose.Schema

const PropertyLocationSchema = new Schema({

    propertyLocationId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Property",
        required: true
    },

    address: {
        type: String,
        required: true
    },

    city: {
        type: String,
        required: true
    },

    state: {
        type: String,
        required: true
    },

    country: {
        type: String,
        required: true
    },

    pincode: {
        type: String,
        required: true
    },

    // 🔥 NEW GEO FIELD
    location: {
        type: {
            type: String,
            enum: ["Point"],
            default: "Point"
        },
        coordinates: {
            type: [Number], // [longitude, latitude]
            required: true
        }
    }

}, {
    timestamps: true
})

// 🔥 GEO INDEX
PropertyLocationSchema.index({ location: "2dsphere" })

module.exports = mongoose.model("PropertyLocation", PropertyLocationSchema)