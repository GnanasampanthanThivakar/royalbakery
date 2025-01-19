import React from 'react';
import coverImage from '../assets/bake2.jpg'; 

const SplitSection = () => {
  return (
    <div className="bg-[#171718] text-white py-12 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center">
          {/* Left Section - FLAVOUR */}
          <div className="text-center px-4 sm:px-6">
            <div className="mb-4">
              <span className="text-xs tracking-[0.3em] text-[#8B7355]">SWEET</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl mb-6 tracking-wider">
              FLAVOUR
            </h2>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-8 max-w-sm mx-auto">
              It Is A Long Established Fact That A Reader Will 
              Be Distracted By The Readable Content Of A 
              Page When Looking At You. The Point Of Using 
              Lorem Ipsum Is That It Has Making It Look Like 
              Readable English Dummy.
            </p>
            <button className="border border-[#8B7355]  hover:border-[#7A6548] px-6 py-2 sm:px-8 sm:py-3 text-xs sm:text-sm tracking-widest transition-colors duration-300">
              READ MORE
            </button>
          </div>

          {/* Center Image */}
          <div className="relative px-4 sm:px-6">
            <img 
              src={coverImage}
              alt="Chocolate dripping on cookies" 
              className="w-full max-w-full object-cover  shadow-md"
            />
          </div>

          {/* Right Section - PROCESS */}
          <div className="text-center px-4 sm:px-6">
            <div className="mb-4">
              <span className="text-xs tracking-[0.3em] text-[#8B7355] ">SWEET</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl mb-6 tracking-wider">
              PROCESS
            </h2>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-8 max-w-sm mx-auto">
              It Is A Long Established Fact That A Reader Will 
              Be Distracted By The Readable Content Of A 
              Page When Looking At You. The Point Of Using 
              Lorem Ipsum Is That It Has Making It Look Like 
              Readable English Dummy.
            </p>
            <button className="border border-[#8B7355]  hover:border-[#7A6548] px-6 py-2 sm:px-8 sm:py-3 text-xs sm:text-sm tracking-widest transition-colors duration-300">
              READ MORE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SplitSection;
