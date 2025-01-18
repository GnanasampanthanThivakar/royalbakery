const express = require("express");
const { 
  loginAdmin, 
  registerAdmin, 
  getAdminProfile, 
  addCake, 
  deleteCake, 
  updateCake, 
  getAllOrders, 
  deleteOrder, 
  updateOrder 
} = require("../controllers/adminController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

// Admin Routes
router.post("/register", registerAdmin);
router.post("/login", loginAdmin);
router.get("/profile", authMiddleware, getAdminProfile);  // Ensure this is correctly imported

// Cake Routes
router.post("/cakes", authMiddleware, addCake);
router.delete("/cakes/:id", authMiddleware, deleteCake);
router.put("/cakes/:id", authMiddleware, updateCake);

// Order Routes
router.get("/orders", authMiddleware, getAllOrders); // Get all orders
router.delete("/orders/:id", authMiddleware, deleteOrder); // Delete an order
router.put("/orders/:id", updateOrder); // Update an order

module.exports = router;
