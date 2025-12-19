const express = require("express");
const menuController = require("./../Controllers/MenuController");

let menuRoutes = express.Router();
menuRoutes.route("/").get(menuController.getAllMenuItems).post(menuController.createMenuItem);
menuRoutes.route("/:id").get(menuController.getMenuItem).put(menuController.updateMenuItem).delete(menuController.deleteMenuItem);

module.exports = menuRoutes;