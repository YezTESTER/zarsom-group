
import React from 'react';
import ParallaxHero from "@/components/ParallaxHero";

const News = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <ParallaxHero 
        imageSrc="/lovable-uploads/6b626058-2a08-4161-8f11-754bda7f0cbd.png" 
        height="h-[40vh]"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            <span className="text-zarsom-teal">News</span> & Updates
          </h1>
        </div>
      </ParallaxHero>
      
      {/* Content Section */}
      <section className="py-20 bg-gradient-to-b from-zarsom-navy to-zarsom-navy/90">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-8">No News yet, but it's coming :)</h2>
            <p className="text-xl text-gray-300">
              Stay tuned for exciting updates and announcements from ZARSOM Group. 
              We're working on some big things behind the scenes!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;
