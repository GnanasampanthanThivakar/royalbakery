import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Updated import

const Checkout = () => {
  const [cake, setCake] = useState(null);
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [address, setAddress] = useState("");
  const navigate = useNavigate(); // Updated hook

  useEffect(() => {
    const fetchCake = async () => {
      const cakeId = localStorage.getItem("cakeId");
      if (cakeId) {
        try {
          const response = await axios.get(`http://localhost:5000/api/customer/cakes/${cakeId}`);
          setCake(response.data);
        } catch (error) {
          console.error("Error fetching cake details:", error);
        }
      } else {
        navigate("/cakes"); // Updated navigation
      }
    };

    fetchCake();
  }, [navigate]);

  const handleSubmitOrder = async (e) => {
    e.preventDefault();

    const orderData = {
      cakeId: cake._id,
      customerName,
      customerPhone,
      address,
    };

    try {
      await axios.post("http://localhost:5000/api/customer/order", orderData);
      alert("Order placed successfully!");
      navigate("/cakes"); // Updated navigation
    } catch (error) {
      console.error("Error placing order:", error);
      alert("Failed to place the order");
    }
  };

  if (!cake) return <div>Loading...</div>;

  return (
    <div>
      <h2>Checkout</h2>
      <div>
        <h3>{cake.name}</h3>
        <img src={cake.photo} alt={cake.name} />
        <p>{cake.description}</p>
        <p>Price: ${cake.price}</p>
      </div>

      <form onSubmit={handleSubmitOrder}>
        <input
          type="text"
          placeholder="Your Name"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Your Phone"
          value={customerPhone}
          onChange={(e) => setCustomerPhone(e.target.value)}
          required
        />
        <textarea
          placeholder="Your Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        ></textarea>
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default Checkout;
