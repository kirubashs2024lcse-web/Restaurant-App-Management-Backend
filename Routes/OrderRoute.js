const express = require("express");
const orderController = require("./../Controllers/OrderController");

let orderRoutes = express.Router();
orderRoutes.route("/").get(orderController.getAllOrders).post(orderController.createOrder);
orderRoutes.route("/:id").get(orderController.getOrder);
orderRoutes.route("/:id/status").patch(orderController.updateOrderStatus);

module.exports = orderRoutes;