const express = require("express");

const restaurantController = require("./../Controllers/RestaurantController");

let restaurantRoutes = express.Router();
restaurantRoutes.route("/").get(restaurantController.getAllRestaurants).post(restaurantController.createRestaurant);
restaurantRoutes.route("/login").post(restaurantController.loginRestaurant);
restaurantRoutes.route("/:id").get(restaurantController.getRestaurant).put(restaurantController.updateRestaurant).delete(restaurantController.deleteRestaurant);
restaurantRoutes.route("/:id/toggle-status").patch(restaurantController.toggleRestaurantStatus);

module.exports = restaurantRoutes;