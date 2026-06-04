const mongoose = require("mongoose");

const InquirySchema = new mongoose.Schema(
{
    propertyId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "property",
        required: true
    },

    buyerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: true
    },

    message: {
        type: String,
        required: true
    },

    contactPhone: {
        type: String,
        required: true
    },

    contactEmail: {
        type: String,
        required: true
    },

    status: {
        type: String,
        enum: ["Pending", "Contacted", "Closed"],
        default: "Pending"
    },

    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Inquiry", InquirySchema);