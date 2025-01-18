import React from 'react';
import { Search } from 'lucide-react';
import Navbar from '../components/Navbar';
import coverImage from '../assets/cover4.jpg'; 
import SplitSection from './SplitSection';
import CakeList from '../components/CakeList';
import BakeryWebsite from './BakeryWebsite ';
import AboutUs from './AboutUsHome';
import Footer from '../components/Footer';

const HeroSection = () => {
  return (
    <div>
      <Navbar />
    <div className="relative h-[90vh]">
    
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full  "
        style={{
          backgroundImage:  `url(${coverImage})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          
         
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20" />
      
      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-4">
        {/* Made with love text */}
        <div className="text-sm tracking-[0.3em] uppercase mb-6">
          Made with love
        </div>
        
        {/* Main Title */}
        <h1 className="text-6xl md:text-7xl font-serif tracking-wider mb-8">
          SWEET CREAM
        </h1>
        
        {/* Shop Now Button */}
        <button className="bg-[#8B7355] hover:bg-[#7A6548] transition-colors duration-300 px-12 py-3 uppercase tracking-widest text-sm">
          Shop Now
        </button>
      </div>
    </div>
    <SplitSection/>

    <CakeList/>
    <BakeryWebsite/>
    <AboutUs/>
    <Footer/>
   
 
    </div>
  );
};

export default HeroSection;