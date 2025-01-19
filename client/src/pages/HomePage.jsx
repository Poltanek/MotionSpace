import React from 'react';
import HeroSection from '../components/sections/HeroSection';  // Adjust the import path if necessary
import AboutSection from '../components/sections/AboutSection';
import Navbar from '../components/navbar/Navbar'

function Homepage() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutSection />
    </div>
  );
}

export default Homepage;
