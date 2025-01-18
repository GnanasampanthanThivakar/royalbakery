// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";  // Use Routes for v6+
import CakeList from "./components/CakeList";
import Checkout from "./components/Checkout";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cakes" element={<CakeList />} />  {/* Use element prop for rendering */}
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/" element={<CakeList />} />
        <Route path="aboutus" element={<AboutUs />} />
        AboutUs
      </Routes>
    </Router>
  );
};

export default App;
