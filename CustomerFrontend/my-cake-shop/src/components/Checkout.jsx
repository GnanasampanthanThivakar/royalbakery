import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Loader2, ShoppingCart } from "lucide-react";

const Checkout = () => {
  const [cart, setCart] = useState([]);
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [address, setAddress] = useState("");
  const [orderDetails, setOrderDetails] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(cartData);

    const initialDetails = cartData.map((cake) => ({
      cakeId: cake._id,
      toppings: "",
      message: "",
      occasion: "",
      type: "",
    }));
    setOrderDetails(initialDetails);
  }, []);

  const handleDetailChange = (index, field, value) => {
    const updatedDetails = [...orderDetails];
    updatedDetails[index][field] = value;
    setOrderDetails(updatedDetails);
  };

  const handleSubmitOrder = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      for (let i = 0; i < cart.length; i++) {
        const cakeData = {
          cakeId: orderDetails[i].cakeId,
          name: cart[i].name,
          price: cart[i].price,
          toppings: orderDetails[i].toppings,
          message: orderDetails[i].message,
          occasion: orderDetails[i].occasion,
          type: orderDetails[i].type,
          customerName,
          customerPhone,
          address,
        };

        await axios.post("http://localhost:5000/api/customer/order", cakeData);
      }

      alert("All orders placed successfully!");
      localStorage.removeItem("cart");
      navigate("/");
    } catch (error) {
      console.error("Error placing orders:", error);
      alert("Failed to place the orders. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (cart.length === 0)
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#171718]">
        <div className="text-center text-white">
          <ShoppingCart className="w-16 h-16 mx-auto mb-4 text-[#8B7355]" />
          <h2 className="text-2xl font-serif mb-2">Your cart is empty</h2>
          <p className="text-gray-400 mb-4">Add some delicious cakes to your cart!</p>
          <button
            onClick={() => navigate("/cakes")}
            className="bg-[#8B7355] text-white px-6 py-2 rounded hover:bg-[#7A6548] transition-colors duration-300"
          >
            Browse Cakes
          </button>
        </div>
      </div>
    );

  return (
    <div className="min-h-screen bg-[#171718] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-serif text-white mb-8 text-center">Checkout</h2>

        <div className="bg-[#1C1C1D] p-6 rounded-lg shadow-lg mb-8">
          <h3 className="text-2xl font-serif text-white mb-4">Your Order</h3>
          {cart.map((cake, index) => (
            <div key={index} className="mb-6 pb-6 border-b border-[#8B7355]/20 last:border-b-0">
              <div className="flex items-start space-x-4">
                <img
                  src={cake.photo || "/placeholder.svg?height=100&width=100"}
                  alt={cake.name}
                  className="w-24 h-24 object-cover rounded"
                />
                <div className="flex-grow">
                  <h4 className="text-xl font-serif text-white mb-2">{cake.name}</h4>
                  <p className="text-[#8B7355] mb-2">${cake.price.toFixed(2)}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Toppings"
                      value={orderDetails[index]?.toppings || ""}
                      onChange={(e) => handleDetailChange(index, "toppings", e.target.value)}
                      className="bg-[#2C2C2D] text-white placeholder-gray-500 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-[#8B7355]"
                    />
                    <input
                      type="text"
                      placeholder="Message on Cake"
                      value={orderDetails[index]?.message || ""}
                      onChange={(e) => handleDetailChange(index, "message", e.target.value)}
                      className="bg-[#2C2C2D] text-white placeholder-gray-500 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-[#8B7355]"
                    />
                    <select
                      value={orderDetails[index]?.occasion || ""}
                      onChange={(e) => handleDetailChange(index, "occasion", e.target.value)}
                      className="bg-[#2C2C2D] text-white px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-[#8B7355]"
                    >
                      <option value="" disabled>
                        Select Occasion
                      </option>
                      <option value="Birthday">Birthday</option>
                      <option value="Wedding">Wedding</option>
                      <option value="Anniversary">Anniversary</option>
                      <option value="Festival">Festival</option>
                    </select>
                    <select
                      value={orderDetails[index]?.type || ""}
                      onChange={(e) => handleDetailChange(index, "type", e.target.value)}
                      className="bg-[#2C2C2D] text-white px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-[#8B7355]"
                    >
                      <option value="" disabled>
                        Select Type
                      </option>
                      <option value="Veg">Veg</option>
                      <option value="Non-Veg">Non-Veg</option>
                      
                    </select>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmitOrder} className="bg-[#1C1C1D] p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-serif text-white mb-4">Customer Details</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              placeholder="Your Name"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              required
              className="bg-[#2C2C2D] text-white placeholder-gray-500 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-[#8B7355]"
            />
            <input
              type="text"
              placeholder="Your Phone"
              value={customerPhone}
              onChange={(e) => setCustomerPhone(e.target.value)}
              required
              className="bg-[#2C2C2D] text-white placeholder-gray-500 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-[#8B7355]"
            />
          </div>
          <textarea
            placeholder="Your Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
            className="w-full bg-[#2C2C2D] text-white placeholder-gray-500 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-[#8B7355] mb-6"
            rows={4}
          ></textarea>
          <button
            type="submit"
            className="w-full bg-[#8B7355] text-white py-3 rounded flex items-center justify-center space-x-2 hover:bg-[#7A6548] transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={loading}
          >
            {loading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Processing...</span>
              </>
            ) : (
              <>
                <ShoppingCart className="w-5 h-5" />
                <span>Place Order</span>
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
