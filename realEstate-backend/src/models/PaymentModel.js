const mongoose = require("mongoose")

const paymentSchema = new mongoose.Schema({

    propertyId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Property",
        required: true
    },

    buyerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    ownerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    amount: {
        type: Number,
        required: true
    },

    paymentMethod: {
        type: String,
        required: true
    },

    transactionId: {
        type: String,
        required: true,
        unique: true
    },

    status: {
        type: String,
        enum: ["Pending", "Completed", "Failed"],
        default: "Pending"
    },

    paymentDate: {
        type: Date,
        default: Date.now
    }

})

module.exports = mongoose.model("Payment", paymentSchema)