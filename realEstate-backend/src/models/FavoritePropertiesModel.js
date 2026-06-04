const mongoose = require("mongoose");

const FavoritePropertySchema = new mongoose.Schema(
{
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: true
    },

    propertyId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "property",
        required: true
    },

    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("FavoriteProperty", FavoritePropertySchema);