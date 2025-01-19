import React, { useState, useEffect } from 'react';
import { Search, Menu, X, ShoppingCart } from 'lucide-react';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Adjust the scroll threshold as needed
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Simulate fetching cart count from localStorage or a backend
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartCount(savedCart.length);
  }, []);

  // Handle adding an item to the cart
  const handleAddToCart = (item) => {
    // Retrieve the current cart from localStorage
    const existingCart = JSON.parse(localStorage.getItem('cart')) || [];

    // Add the new item to the cart
    const updatedCart = [...existingCart, item];

    // Save the updated cart to localStorage
    localStorage.setItem('cart', JSON.stringify(updatedCart));

    // Update the cart count state
    setCartCount(updatedCart.length);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 text-white transition-all duration-300 ${
        isScrolled ? 'bg-[#171718] py-2' : 'bg-[#171718] py-4'
      }`}
    >
      {/* Contact Info Bar */}
      <div
        className={`border-b border-zinc-800 transition-opacity duration-300 ${
          isScrolled ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center py-2">
          <span className="text-sm hidden sm:block">
            Call Us : (+94) 77-614-6135
          </span>
          <div className="flex items-center gap-2">
            <span className="text-sm">Mon-Sun : 7am — 7pm</span>
            <Search
              className="cursor-pointer hover:text-gray-300 transition-colors"
              size={16}
            />
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center md:justify-center">
          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Mobile Logo */}
          <a href="/" className="md:hidden">
            <img
              src={logo}
              alt="Sweet Cream Logo"
              className={`h-8 transition-all duration-300 ${
                isScrolled ? 'h-6' : 'h-8'
              }`}
            />
          </a>

          {/* Desktop Navigation */}
          <div
            className={` 
            fixed md:relative top-[93px] md:top-0 left-0 w-full md:w-auto
            bg-[#171718] md:bg-transparent
            ${isMenuOpen ? 'block' : 'hidden'} md:block
            border-t md:border-t-0 border-zinc-800
          `}
          >
            <div className="flex flex-col md:flex-row md:items-center md:space-x-12 p-4 md:p-0">
              <a
                href="/"
                className="py-3 md:py-0 text-[16px] tracking-wider cormorant-garamond-semibold hover:text-gray-300 transition-colors"
              >
                HOME
              </a>
              <a
                href="/aboutus"
                className="py-3 md:py-0 cormorant-garamond-semibold text-[16px] tracking-wider hover:text-gray-300 transition-colors"
              >
                ABOUT
              </a>
              <a
                href="/shop"
                className="py-3 md:py-0 cormorant-garamond-semibold text-[16px] tracking-wider hover:text-gray-300 transition-colors"
              >
                SHOP
              </a>
              <a href="/" className="hidden md:block px-16">
                <img
                  src={logo}
                  alt="Sweet Cream Logo"
                  className={`h-28 transition-all duration-300 ${
                    isScrolled ? 'h-20' : 'h-28'
                  }`}
                />
              </a>
              <a
                href="/blog"
                className="py-3 cormorant-garamond-semibold  md:py-0 text-[16px] tracking-wider hover:text-gray-300 transition-colors"
              >
                BLOG
              </a>
              <a
                href="/contact"
                className="py-3 cormorant-garamond-semibold  md:py-0 text-[16px] tracking-wider hover:text-gray-300 transition-colors"
              >
                CONTACT
              </a>
            </div>
          </div>

          {/* Cart Button */}
          <div className="relative flex items-center ml-10">
            <a
              href="/cart"
              className="relative flex items-center justify-center"
              aria-label="View Cart"
            >
              <ShoppingCart
                className="hover:text-gray-300 transition-colors"
                size={24}
              />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 -mt-1 -mr-2 bg-red-500 text-white text-xs font-semibold rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </a>
          </div>
        </div>
      </div>

     
    </nav>
  );
};

export default Navbar;
