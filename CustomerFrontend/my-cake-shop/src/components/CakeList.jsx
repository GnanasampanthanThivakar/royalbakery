import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ShoppingCart, Loader2, ArrowRight } from "lucide-react";

const CakeList = () => {
  const [cakes, setCakes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCakes = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/customer/cakes");
        setCakes(response.data.slice(0, 4)); // Show 4 featured cakes
        setError(null);
      } catch (error) {
        console.error("Error fetching cakes:", error);
        setError("Failed to fetch cakes. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchCakes();
  }, []);

  const handleAddToCart = (cakeId) => {
    localStorage.setItem("cakeId", cakeId);
    navigate("/checkout");
  };

  return (
    <section className="bg-[#171718] py-24">
      <div className="container mx-auto px-6">
        {/* Elegant Header */}
        <div className="text-center mb-20">
          <span className=" cormorant-garamond-medium  inline-block text-sm tracking-[0.3em] uppercase text-[#8B7355] mb-4 px-4 py-2 border border-[#8B7355]/20">
            Featured Collection
          </span>
          <h2 className="text-5xl font-serif tracking-wider text-white mt-6 mb-4 cormorant-garamond-medium  ">
            Popular Cakes
          </h2>
          <div className="w-24 h-px bg-[#8B7355] mx-auto"></div>
        </div>

        {/* Content */}
        {loading ? (
          <div className="flex justify-center items-center h-40">
            <Loader2 className="w-6 h-6 text-[#8B7355] animate-spin" />
          </div>
        ) : error ? (
          <div className="text-center text-gray-400">{error}</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cakes.map((cake) => (
              <div
                key={cake._id}
                className="group relative bg-[#1C1C1D] p-4"
              >
                {/* Image Container */}
                <div className="relative aspect-[4/5] mb-6 overflow-hidden">
                  <img
                    src={cake.photo}
                    alt={cake.name}
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />
                  
                  {/* Price Tag */}
                  <div className="absolute top-4 right-4 bg-[#171718]/80 backdrop-blur-sm px-4 py-2">
                    <span className="text-[#8B7355] font-serif">$24.99</span>
                  </div>

                  {/* Hover Action */}
                  <button
                    onClick={() => handleAddToCart(cake._id)}
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <span className="bg-[#8B7355] text-white px-6 py-3 flex items-center space-x-3 transform -translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      <ShoppingCart className="w-4 h-4" />
                      <span className="text-sm uppercase tracking-wider">Add to Cart</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </button>
                </div>

                {/* Details */}
                <div className="text-center px-2">
                  <h3 className="font-serif text-xl mb-3 text-white group-hover:text-[#8B7355] transition-colors duration-300">
                    {cake.name}
                  </h3>
                  <p className="text-sm text-gray-400 line-clamp-2 mb-6">
                    {cake.description}
                  </p>
                  <div className="w-12 h-px bg-[#8B7355]/30 mx-auto"></div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* View All Link */}
        <div className="text-center mt-16">
          <button className="inline-flex items-center text-[#8B7355] hover:text-white transition-colors duration-300 group">
            <span className="text-sm uppercase tracking-widest">View All Cakes</span>
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CakeList;