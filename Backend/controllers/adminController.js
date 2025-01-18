const Admin = require("../models/Admin");
const jwt = require("jsonwebtoken");
const Cake = require("../models/Cake");
const Order = require("../models/Order");

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1d" });
  };
  
  exports.registerAdmin = async (req, res) => {
    const { username, password } = req.body;
  
    try {
      const adminExists = await Admin.findOne({ username });
      if (adminExists) {
        return res.status(400).json({ message: "Admin already exists" });
      }
  
      const admin = await Admin.create({ username, password });
      res.status(201).json({ message: "Admin registered successfully!" });
    } catch (err) {
      res.status(500).json({ message: "Server error", error: err.message });
    }
  };
  
  exports.loginAdmin = async (req, res) => {
    const { username, password } = req.body;
  
    try {
      const admin = await Admin.findOne({ username });
      if (admin && (await admin.matchPassword(password))) {
        res.status(200).json({
          _id: admin.id,
          username: admin.username,
          token: generateToken(admin.id),
        });
      } else {
        res.status(401).json({ message: "Invalid credentials" });
      }
    } catch (err) {
      res.status(500).json({ message: "Server error", error: err.message });
    }
  };
  
  exports.getAdminProfile = async (req, res) => {
    try {
      const admin = await Admin.findById(req.admin.id).select("-password");
      res.status(200).json(admin);
    } catch (err) {
      res.status(500).json({ message: "Server error", error: err.message });
    }
  };

exports.addCake = async (req, res) => {
  try {
    const { name, description, price, photo } = req.body;
    const cake = new Cake({ name, description, price, photo });
    await cake.save();
    res.status(201).json(cake);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};


exports.getCakes = async (req, res) => {
  try {
    const cakes = await Cake.find();
    res.status(200).json(cakes);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

exports.deleteCake = async (req, res) => {
    try {
      const { id } = req.params; 
  
      const cake = await Cake.findById(id);
      if (!cake) {
        return res.status(404).json({ message: "Cake not found" });
      }
  
      await Cake.findByIdAndDelete(id);
      res.status(200).json({ message: "Cake deleted successfully!" });
    } catch (err) {
      console.error("Error deleting cake:", err.message);
      res.status(500).json({ message: "Server error", error: err.message });
    }
  };
  

exports.updateCake = async (req, res) => {
    try {
      const { id } = req.params; 
      const updatedData = req.body; 
  
      const cake = await Cake.findById(id);
      if (!cake) {
        return res.status(404).json({ message: "Cake not found" });
      }
  
      const updatedCake = await Cake.findByIdAndUpdate(id, updatedData, { new: true });
      res.status(200).json(updatedCake); 
    } catch (err) {
      console.error("Error updating cake:", err.message);
      res.status(500).json({ message: "Server error", error: err.message });
    }
  };
  
  exports.getAllOrders = async (req, res) => {
    try {
      const orders = await Order.find().populate("cakeId"); // Populating the cakeId to get cake details
      res.status(200).json(orders);
    } catch (err) {
      res.status(500).json({ message: "Server error", error: err.message });
    }
  };
  exports.deleteOrder = async (req, res) => {
    try {
      const { id } = req.params;
    
      // Check if the order exists
      const order = await Order.findById(id);
      if (!order) {
        return res.status(404).json({ message: "Order not found" });
      }
    
      // Delete the order
      await Order.findByIdAndDelete(id);
      res.status(200).json({ message: "Order deleted successfully!" });
    } catch (err) {
      res.status(500).json({ message: "Server error", error: err.message });
    }
  };
  exports.updateOrder = async (req, res) => {
    try {
      const { id } = req.params;
      const updatedData = req.body; // Data to update the order
  
      // Check if the order exists
      const order = await Order.findById(id);
      if (!order) {
        return res.status(404).json({ message: `Order with ID ${id} not found` });
      }
  
      // Update the order
      const updatedOrder = await Order.findByIdAndUpdate(id, updatedData, { new: true });
      
      // Check if update was successful
      if (!updatedOrder) {
        return res.status(500).json({ message: "Failed to update the order" });
      }
  
      res.status(200).json(updatedOrder);  // Return the updated order
    } catch (err) {
      console.error("Error updating order:", err);
      res.status(500).json({ message: "Server error", error: err.message });
    }
  };
  
  