const mongoose = require("mongoose");

const PropertyVisitSchema = new mongoose.Schema(
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

    ownerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: true
    },

    visitDate: {
        type: Date,
        required: true
    },

    visitTime: {
        type: String,
        required: true
    },

    status: {
        type: String,
        enum: ["Requested", "Approved", "Completed"],
        default: "Requested"
    }
},
{
    timestamps: true
}
);

module.exports = mongoose.model("PropertyVisit", PropertyVisitSchema);