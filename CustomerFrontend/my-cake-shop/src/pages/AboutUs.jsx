import React from 'react';
import coverImage from '../assets/cover3.jpg';
import a1 from '../assets/ab-inner-01.jpg'; 
import a2 from '../assets/ab-inner-02.jpg';  
import Navbar from '../components/Navbar';
import AboutUsHome  from '../pages/AboutUsHome';
import Footer from '../components/Footer';
const AboutUs = () => {
  return (
    <div>
       <Navbar/>
    <div className="w-full h-full bg-[#171718]">
       
      {/* Hero Section */}
      <div className="relative h-96 sm:mt-30 md:mt-40 w-full">
        <div className="absolute inset-0">
          <img
            src={coverImage}
            alt="Chocolate cake with almonds"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative h-full flex flex-col justify-center items-center text-white">
          
          <h1 className="text-4xl md:text-5xl font-serif text-center max-w-2xl mb-6">
           About Us
          </h1>
         
        </div>
      </div>

      {/* Alternating Sections */}
      <div className="container mx-auto px-4 py-16">
        {/* First Section */}
        <div className="flex flex-col md:flex-row items-center gap-12 mb-24">
          <div className="w-full md:w-1/2">
            <img
              src={a1}
              alt="Artisan cake making"
              style={{ width: "635px", height: "400px" }}
              className="w-full h-auto md:h-96 object-cover"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h3 className="text-3xl font-serif mb-4 text-white cormorant-garamond-medium ">Our Craft</h3>
            <p className="text-white leading-relaxed cormorant-garamond-medium ">
              We specialize in creating beautiful, custom-designed cakes that are as delicious as they are stunning. Each cake is handcrafted with attention to detail and made with the finest ingredients to ensure both visual appeal and exceptional taste.
            </p>
          </div>
        </div>

        {/* Second Section */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-12">
          <div className="w-full md:w-1/2">
            <img
              src={a2}
              alt="Custom cake designs"
              style={{ width: "635px", height: "400px" }}
              className=" w-full h-auto md:h-96 object-cover "
            />
          </div>
          <div className="w-full md:w-1/2">
            <h3 className="text-3xl text-white font-serif mb-4 cormorant-garamond-medium ">Custom Designs</h3>
            <p className="text-white leading-relaxed cormorant-garamond-medium ">
              Whether you're celebrating a wedding, birthday, or special occasion, our team works closely with you to bring your vision to life. We combine traditional techniques with modern design elements to create unique cakes that reflect your personal style.
            </p>
          </div>
        </div>
      </div>
      <AboutUsHome/>
      <Footer/>
    </div>
    </div>
  );
};

export default AboutUs;