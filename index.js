const express = require("express");
const cors = require("cors");

const app = express();

const restaurantRoutes = require("./Routes/RestaurantRoute");
const menuRoutes = require("./Routes/MenuRoute");
const orderRoutes = require("./Routes/OrderRoute");

app.use(cors());
app.use(express.json());

app.use("/api/restaurants", restaurantRoutes);
app.use("/api/menu", menuRoutes);
app.use("/api/orders", orderRoutes);

module.exports = app;