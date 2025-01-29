const Order = require("../models/Order");

exports.createOrder = async (req, res) => {
  try {
    const { orders } = req.body;

    // const {
    //   cakeId,
    //   toppings,
    //   message,
    //   occasion,
    //   customerName,
    //   customerPhone,
    //   address,
    // } = req.body;

    if (!orders || orders.length === 0) {
      return res.status(400).json({ message: "No orders found" });
    }

    orders.forEach(async (order) => {
      const orderItem = new Order({
        cakeId: order.cakeId,
        toppings: order.toppings,
        message: order.message,
        occasion: order.occasion,
        customerName: order.customerName,
        customerPhone: order.customerPhone,
        address: order.address,
      });

      const response = await orderItem.save();

      if (!response) {
        throw new Error("Failed to create order");
      }
    });

    return res.status(200).json({ message: "Order created successfully!" });
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
