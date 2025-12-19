const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema({
    name: {
        type : String,
        required:[true,"Name is required"],
        trim :true,
        minLength : [3,"Minimum 3 Characters is required"]
    },
    email: {
        type : String,
        required:[true,"Email is required"],
        unique: true
    },
    password: {
        type : String,
        required:[true,"Password is required"],
        minLength: [6, "Password must be at least 6 characters"]
    },
    role: {
        type: String,
        enum: ["customer", "admin"],
        default: "customer"
    },
    status: {
        type: String,
        enum: ["Active", "Blocked"],
        default: "Active"
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});


const Restaurants = mongoose.model("Restaurant",restaurantSchema);

module.exports = Restaurants;