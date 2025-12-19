const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    items: [{
        menuId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Menu",
            required: true
        },
        name: String,
        price: Number,
        quantity: {
            type: Number,
            required: true,
            min: 1
        }
    }],
    total: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: ["pending", "confirmed", "preparing", "delivered"],
        default: "pending"
    },
    customerEmail: {
        type: String,
        required: true
    },
    orderDate: {
        type: Date,
        default: Date.now
    }
});

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;