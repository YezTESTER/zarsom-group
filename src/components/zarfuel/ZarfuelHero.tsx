
import React from 'react';
import ParallaxHero from "@/components/ParallaxHero";

const ZarfuelHero = () => {
  return (
    <ParallaxHero 
      imageSrc="/lovable-uploads/32ce3b9c-c64c-45cd-9fcc-5dacf3308052.png"
      height="h-[60vh]"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
          The <span className="text-zarsom-teal">ZARFUEL</span> Project
        </h1>
        <p className="text-xl text-gray-200 mb-8 animate-fade-in" style={{ animationDelay: "300ms" }}>
          A state-of-the-art truck stop revolutionizing South Africa's logistics infrastructure.
        </p>
      </div>
    </ParallaxHero>
  );
};

export default ZarfuelHero;
