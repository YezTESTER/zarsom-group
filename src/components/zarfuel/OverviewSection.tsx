
import React from 'react';
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedFeature from "@/components/AnimatedFeature";
import { Droplet, ShieldCheck, Home, Waves, ShoppingBag } from "lucide-react";

const OverviewSection = () => {
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
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-6">
            Overview
          </h2>
          <p className="text-xl text-gray-300 text-center mb-12 max-w-4xl mx-auto">
            ZARFUEL is a state-of-the-art truck stop strategically located on the N2 at Umkomaas—designed to serve 360+ trucks daily.
          </p>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          <AnimatedFeature 
            icon={<Droplet className="h-12 w-12" />}
            title="Fuel Services"
            description="High-capacity, rapid-dispense pumps for efficient refueling."
            delay={100}
          />
          
          <AnimatedFeature 
            icon={<ShieldCheck className="h-12 w-12" />}
            title="Secure Parking"
            description="40+ truck bays under 24/7 monitoring and security."
            delay={200}
          />
          
          <AnimatedFeature 
            icon={<Home className="h-12 w-12" />}
            title="Driver Amenities"
            description="Showers, rest lounges, free Wi-Fi for driver comfort."
            delay={300}
          />
          
          <AnimatedFeature 
            icon={<Waves className="h-12 w-12" />}
            title="Truck Wash"
            description="Automated, eco-friendly cleaning systems."
            delay={400}
          />
          
          <AnimatedFeature 
            icon={<ShoppingBag className="h-12 w-12" />}
            title="Future Retail"
            description="Convenience store, food court, hardware, logistics storage."
            delay={500}
          />
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;
