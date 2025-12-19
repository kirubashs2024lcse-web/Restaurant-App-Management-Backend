const Menu = require("./../Model/MenuModel");

exports.getAllMenuItems = async (req, res) => {
  try {
    const items = await Menu.find({ available: true });
    res.status(200).json({
      status: "Success",
      data: items,
    });
  } catch (error) {
    res.status(404).json({
      status: "Failed",
      msg: error,
    });
  }
};

exports.getMenuItem = async (req, res) => {
  try {
    const item = await Menu.findById(req.params.id);
    res.status(200).json({
      status: "Success",
      data: item,
    });
  } catch (error) {
    res.status(404).json({
      status: "Failed",
      msg: error,
    });
  }
};

exports.createMenuItem = async (req, res) => {
  try {
    const item = await Menu.create(req.body);
    res.status(201).json({
      status: "Success",
      data: item,
    });
  } catch (error) {
    res.status(400).json({
      status: "Failed",
      message: error,
    });
  }
};

exports.updateMenuItem = async (req, res) => {
  try {
    const item = await Menu.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: "Success",
      data: item,
    });
  } catch (error) {
    res.status(400).json({
      status: "Failed",
      message: error,
    });
  }
};

exports.deleteMenuItem = async (req, res) => {
  try {
    await Menu.findByIdAndDelete(req.params.id);
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