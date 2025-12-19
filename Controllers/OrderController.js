const Order = require("./../Model/OrderModel");

exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate('items.menuId');
    res.status(200).json({
      status: "Success",
      data: orders,
    });
  } catch (error) {
    res.status(404).json({
      status: "Failed",
      msg: error,
    });
  }
};

exports.getOrder = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id).populate('items.menuId');
    res.status(200).json({
      status: "Success",
      data: order,
    });
  } catch (error) {
    res.status(404).json({
      status: "Failed",
      msg: error,
    });
  }
};

exports.createOrder = async (req, res) => {
  try {
    const order = await Order.create(req.body);
    res.status(201).json({
      status: "Success",
      data: order,
    });
  } catch (error) {
    res.status(400).json({
      status: "Failed",
      message: error,
    });
  }
};

exports.updateOrderStatus = async (req, res) => {
  try {
    const order = await Order.findByIdAndUpdate(
      req.params.id, 
      { status: req.body.status }, 
      { new: true, runValidators: true }
    );
    res.status(200).json({
      status: "Success",
      data: order,
    });
  } catch (error) {
    res.status(400).json({
      status: "Failed",
      message: error,
    });
  }
};