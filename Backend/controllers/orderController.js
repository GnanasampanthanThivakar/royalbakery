const Order = require("../models/Order");

exports.createOrder = async (req, res) => {
  try {
    const {
      cakeId,
      toppings,
      message,
      occasion,
      customerName,
      customerPhone,
      address,
    } = req.body;
    const order = new Order({
      cakeId,
      toppings,
      message,
      occasion,
      customerName,
      customerPhone,
      address,
    });
    await order.save();
    res.status(201).json(order);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

exports.getOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate("cakeId");
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

exports.deleteOrder = async (req, res) => {
  try {
    const { id } = req.params;
    await Order.findByIdAndDelete(id);
    res.status(200).json({ message: "Order deleted successfully!" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};
