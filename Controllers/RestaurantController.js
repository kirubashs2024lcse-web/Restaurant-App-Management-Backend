const Restaurants = require("./../Model/RestaurantModel");

exports.getAllRestaurants = async (req, res) => {
  try {
    const restaurants = await Restaurants.find().select('-password');
    res.status(200).json({
      status: "Success",
      data: restaurants,
    });
  } catch (error) {
    res.status(404).json({
      status: "Failed",
      msg: error,
    });
  }
};

exports.getRestaurant = async (req, res) => {
  try {
    const restaurant = await Restaurants.findById(req.params.id).select('-password');
    res.status(200).json({
      status: "Success",
      data: restaurant,
    });
  } catch (error) {
    res.status(404).json({
      status: "Failed",
      msg: error,
    });
  }
};

exports.createRestaurant = async (req, res) => {
  try {
    const restaurant = await Restaurants.create(req.body);
    const { password, ...restaurantWithoutPassword } = restaurant.toObject();
    res.status(201).json({
      status: "Success",
      data: restaurantWithoutPassword,
    });
  } catch (error) {
    res.status(400).json({
      status: "Failed",
      message: error,
    });
  }
};

exports.loginRestaurant = async (req, res) => {
  try {
    const { email, password } = req.body;
    const restaurant = await Restaurants.findOne({ email });
    
    if (!restaurant || restaurant.password !== password) {
      return res.status(401).json({
        status: "Failed",
        message: "Invalid credentials"
      });
    }
    
    if (restaurant.status === "Blocked") {
      return res.status(403).json({
        status: "Failed",
        message: "Account is blocked"
      });
    }
    
    const { password: pwd, ...restaurantWithoutPassword } = restaurant.toObject();
    res.status(200).json({
      status: "Success",
      data: restaurantWithoutPassword,
    });
  } catch (error) {
    res.status(400).json({
      status: "Failed",
      message: error,
    });
  }
};

exports.updateRestaurant = async (req, res) => {
  try {
    const restaurant = await Restaurants.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    }).select('-password');
    res.status(200).json({
      status: "Success",
      data: restaurant,
    });
  } catch (error) {
    res.status(400).json({
      status: "Failed",
      message: error,
    });
  }
};

exports.deleteRestaurant = async (req, res) => {
  try {
    await Restaurants.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: "Deleted",
      data: null,
    });
  } catch (error) {
    res.status(400).json({
      status: "Failed",
      message: error,
    });
  }
};

exports.toggleRestaurantStatus = async (req, res) => {
  try {
    const restaurant = await Restaurants.findById(req.params.id);
    restaurant.status = restaurant.status === "Active" ? "Blocked" : "Active";
    await restaurant.save();
    
    const { password, ...restaurantWithoutPassword } = restaurant.toObject();
    res.status(200).json({
      status: "Success",
      data: restaurantWithoutPassword,
    });
  } catch (error) {
    res.status(400).json({
      status: "Failed",
      message: error,
    });
  }
};