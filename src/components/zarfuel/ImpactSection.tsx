
import React from 'react';
import ScrollReveal from "@/components/ScrollReveal";
import CounterCard from "@/components/CounterCard";

const ImpactSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-zarsom-navy/80 to-zarsom-navy/70">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Economic & Social Impact
          </h2>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <CounterCard 
            title="Permanent Jobs Created" 
            value={40} 
            suffix="+" 
            delayMs={0} 
          />
          
          <CounterCard 
            title="Annual N2 Truck Movements" 
            value={400000} 
            suffix="+" 
            delayMs={200} 
          />
          
          <CounterCard 
            title="Local SME Contracts" 
            value={25} 
            suffix="+" 
            delayMs={400} 
          />
          
          <CounterCard 
            title="Road Safety Improvement" 
            value={30} 
            suffix="%" 
            delayMs={600} 
          />
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
