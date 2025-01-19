// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";  // Use Routes for v6+
import CakeList from "./components/CakeList";
import Checkout from "./components/Checkout";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import "antd/dist/reset.css"; // For Ant Design 5.x
import Cart from "./components/Cart";
import Shop from "./pages/Shop";
import BlogList from "./components/BlogList";
import BlogDetail from "./components/BlogDetail";
import ContactUs from "./pages/contactus";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cakes" element={<CakeList />} />  {/* Use element prop for rendering */}
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/" element={<CakeList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="aboutus" element={<AboutUs />} />
        <Route path="blog" element={<BlogList />} />
        <Route path="contact" element={<ContactUs />} />
       
        <Route path="/blog/:id" element={<BlogDetail />} />
        AboutUs
      </Routes>
    </Router>
  );
};

export default App;
