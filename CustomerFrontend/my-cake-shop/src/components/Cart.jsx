import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Trash2, ArrowLeft, ArrowRight, ShoppingBag, Minus, Plus } from "lucide-react";

const Cart = () => {
  const [cart, setCart] = useState(() => {
    const cartData = JSON.parse(localStorage.getItem("cart")) || [];
    return cartData.reduce((acc, item) => {
      const existingItem = acc.find((i) => i._id === item._id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        acc.push({ ...item, quantity: 1 });
      }
      return acc;
    }, []);
  });
  const navigate = useNavigate();

  useEffect(() => {
    // Update local storage on cart changes
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const handleCheckout = () => {
    navigate("/checkout");
  };

  const updateQuantity = (index, change) => {
    const updatedCart = [...cart];
    const newQuantity = updatedCart[index].quantity + change;

    if (newQuantity < 1) {
      handleRemoveFromCart(index);
      return;
    }

    updatedCart[index].quantity = newQuantity;
    setCart(updatedCart);
  };

  const handleRemoveFromCart = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const calculateSubtotal = () => calculateTotal().toFixed(2);
  const calculateTax = () => (calculateTotal() * 0.1).toFixed(2); // 10% tax
  const calculateGrandTotal = () =>
    (parseFloat(calculateSubtotal()) + parseFloat(calculateTax())).toFixed(2);

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-[#171718] flex flex-col items-center justify-center text-white">
        <ShoppingBag className="w-16 h-16 text-[#8B7355] mb-4" />
        <h2 className="text-2xl font-serif mb-4">Your cart is empty</h2>
        <p className="text-gray-400 mb-8">Add some delicious cakes to get started</p>
        <button
          onClick={() => navigate("/")}
          className="flex items-center space-x-2 text-[#8B7355] hover:text-white transition-colors duration-300"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Continue Shopping</span>
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#171718] py-12">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-sm tracking-[0.3em] uppercase text-[#8B7355] mb-4 px-4 py-2 border border-[#8B7355]/20">
            Shopping Cart
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif tracking-wider text-white mt-6 mb-4">
            Your Selected Items
          </h2>
          <div className="w-24 h-px bg-[#8B7355] mx-auto"></div>
        </div>

        {/* Cart Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item, index) => (
              <div
                key={index}
                className="bg-[#1C1C1D] p-4 rounded-lg flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4"
              >
                <div className="w-32 h-32 overflow-hidden rounded-lg flex-shrink-0">
                  <img
                    src={item.photo}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-grow text-center sm:text-left">
                  <h3 className="text-white font-serif text-xl mb-2">{item.name}</h3>
                  <p className="text-gray-400 text-sm mb-4">{item.description}</p>
                  <div className="flex items-center justify-center sm:justify-start space-x-4">
                    <span className="text-[#8B7355] font-serif">
                      {(item.price * item.quantity).toFixed(2)}LKR
                    </span>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => updateQuantity(index, -1)}
                        className="text-gray-400 hover:text-white transition-colors duration-300"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="text-white w-8 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(index, 1)}
                        className="text-gray-400 hover:text-white transition-colors duration-300"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => handleRemoveFromCart(index)}
                  className="text-gray-400 hover:text-red-500 transition-colors duration-300"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-[#1C1C1D] p-6 rounded-lg">
              <h3 className="text-white font-serif text-xl mb-6">Order Summary</h3>
              <div className="space-y-4">
                <div className="flex justify-between text-gray-400">
                  <span>Subtotal</span>
                  <span>{calculateSubtotal()} LKR</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Tax (10%)</span>
                  <span>{calculateTax()} LKR</span>
                </div>
                <div className="h-px bg-[#8B7355]/20"></div>
                <div className="flex justify-between text-white font-serif">
                  <span>Total</span>
                  <span>{calculateGrandTotal()} LKR</span>
                </div>
                <button
                  onClick={handleCheckout}
                  className="w-full bg-[#8B7355] hover:bg-[#9B8365] text-white py-3 rounded-md transition-colors duration-300 flex items-center justify-center space-x-2 mt-6"
                >
                  <span>Proceed to Checkout</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => navigate("/")}
                  className="w-full text-[#8B7355] hover:text-white transition-colors duration-300 flex items-center justify-center space-x-2 mt-4"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Continue Shopping</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
