const mongoose = require("mongoose");

const menuSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Item name is required"],
        trim: true
    },
    price: {
        type: Number,
        required: [true, "Price is required"],
        min: [0, "Price must be positive"]
    },
    category: {
        type: String,
        required: [true, "Category is required"],
        enum: ["South Indian", "Main Course", "Sides", "Non-Veg"]
    },
    image: {
        type: String,
        required: [true, "Image URL is required"]
    },
    available: {
        type: Boolean,
        default: true
    }
});

const Menu = mongoose.model("Menu", menuSchema);
module.exports = Menu;