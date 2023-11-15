const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
    name: String,
    items: [
        {
            name: String,
            price: Number,
            method: String,
        },
    ],
    TotalAmount: {
        type: Number,
        default: 0.0,
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
    },
});

module.exports = mongoose.model("category", categorySchema);