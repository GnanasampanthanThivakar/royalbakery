import React, { useState } from 'react';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer = () => {
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = () => {
    setSubscribed(true);
  };

  return (
    <footer className="bg-[#171718] text-white">
      {/* Newsletter Section */}
      <div className="border-b border-zinc-800">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl mb-2" style={{ fontFamily: '"Dancing Script", cursive' }}>
              Subscribe to Our Newsletter
            </h3>
            <p className="text-gray-400 mb-6">
              Stay updated with our latest treats and special offers
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {!subscribed ? (
                <>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-md focus:outline-none focus:border-pink-400"
                  />
                  <button
                    onClick={handleSubscribe}
                    className="px-6 py-2 bg-[#D4AF37] hover:bg-pink-600 text-white rounded-md transition-colors"
                  >
                    Subscribe
                  </button>
                </>
              ) : (
                <p className="text-green-500 font-medium">
                  Thank you for subscribing!
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h4 className="text-xl mb-4" style={{ fontFamily: '"Dancing Script", cursive' }}>
              Sweet Cream
            </h4>
            <p className="text-gray-400 mb-4">
              Crafting moments of joy through our delicious artisanal baked goods since 1995. 
              Every creation is made with love and the finest ingredients.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#D4AF37] transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#D4AF37] transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#D4AF37] transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-[#D4AF37] transition-colors">About Us</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#D4AF37] transition-colors">Our Menu</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#D4AF37] transition-colors">Custom Orders</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#D4AF37] transition-colors">Wedding Cakes</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#D4AF37] transition-colors">FAQs</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3 text-gray-400">
                <MapPin size={18} />
                <span>123 Bakery Street, NY 10001</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <Phone size={18} />
                <span>(+1) 718-999-0779</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <Mail size={18} />
                <span>info@sweetcream.com</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <Clock size={18} />
                <span>Mon-Sun: 7am — 7pm</span>
              </li>
            </ul>
          </div>

          {/* Instagram Feed */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Instagram</h4>
            <div className="grid grid-cols-3 gap-2">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="aspect-square">
                  <img
                    src={`https://via.placeholder.com/120x120?text=Post+${i + 1}`}
                    alt={`Instagram post ${i + 1}`}
                    className="w-full h-full object-cover hover:opacity-75 transition-opacity cursor-pointer"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-zinc-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>© 2025 Sweet Cream. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-[#D4AF37] transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-[#D4AF37] transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-[#D4AF37] transition-colors">Shipping Info</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
