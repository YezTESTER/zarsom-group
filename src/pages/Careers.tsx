
import React from 'react';
import ParallaxHero from "@/components/ParallaxHero";

const Careers = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <ParallaxHero 
        imageSrc="/lovable-uploads/6b626058-2a08-4161-8f11-754bda7f0cbd.png" 
        height="h-[40vh]"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            <span className="text-zarsom-teal">Careers</span> at ZARSOM
          </h1>
        </div>
      </ParallaxHero>
      
      {/* Content Section */}
      <section className="py-20 bg-gradient-to-b from-zarsom-navy to-zarsom-navy/90">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-8">No Jobs yet, but keep those fingers crossed</h2>
            <p className="text-xl text-gray-300">
              We're growing rapidly and will be posting job opportunities soon. 
              Check back later for exciting career opportunities with ZARSOM Group!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
