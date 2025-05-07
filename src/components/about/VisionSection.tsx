
import React from 'react';
import ScrollReveal from "@/components/ScrollReveal";

const VisionSection = () => {
  return (
    <section className="py-20 relative">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{
          backgroundImage: "url('/lovable-uploads/56c39b0e-c4f1-4a01-9a97-5058d3223100.png')",
          zIndex: 0
        }} 
      />
      <div className="absolute inset-0 bg-zarsom-navy/85" style={{ zIndex: 1 }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img 
                alt="ZARSOM Truck on Highway" 
                src="/lovable-uploads/958b10f8-676c-48a0-8766-26b6b07faef4.jpg" 
                className="w-full h-auto rounded-xl transform hover:scale-105 transition-transform duration-500 object-scale-down" 
              />
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={300}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              The ZARSOM Vision
            </h2>
            <div className="text-gray-300 space-y-4">
              <p>
                Founded in 2018 by Azande and Bathuthukile Mchunu, ZARSOM Group began as a mobile canteen service in Amahlongwa, KwaZulu-Natal, with a mission to combat youth unemployment through innovative, community-first ventures.
              </p>
              <p>
                What started as a simple mobile canteen has evolved into a dynamic enterprise focused on transformational infrastructure and community development. Our flagship project, ZARFUEL, exemplifies our commitment to creating lasting economic impact while addressing critical infrastructure needs.
              </p>
              <p>
                ZARSOM Group is built on the principles of innovation, empowerment, and sustainable development. We believe in creating opportunities that not only generate economic growth but also uplift communities and create meaningful employment.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
