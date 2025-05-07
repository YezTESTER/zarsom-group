
import React from 'react';
import ScrollReveal from "@/components/ScrollReveal";

const TruckStopsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-zarsom-navy/70 to-zarsom-navy/80">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Why Truck Stops Matter
          </h2>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ScrollReveal delay={100}>
            <div className="bg-gradient-to-br from-[#0EA5E9]/50 to-[#1A1F2C]/70 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover-lift h-full overflow-hidden relative">
              <div className="absolute inset-0 bg-[url('/lovable-uploads/d3716b6f-c7cc-4162-a638-aecb894fb691.png')] bg-cover opacity-10"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-zarsom-teal mb-4">National Context</h3>
                <ul className="list-disc pl-5 space-y-3 text-gray-300">
                  <li>80% of SA freight moves by road—truck stops are critical nodes Focus on Transport and Logistics.</li>
                  <li>Logistics sector contributes 6.5% of GDP, with 9.3% from transport/storage/communication combined Labour Research Service.</li>
                  <li>Premium truck stops enhance driver welfare, reducing accidents (54 accidents on KZN's N2 in 12 months) IOL.</li>
                </ul>
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={300}>
            <div className="bg-gradient-to-br from-[#0EA5E9]/50 to-[#1A1F2C]/70 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover-lift h-full overflow-hidden relative">
              <div className="absolute inset-0 bg-[url('/lovable-uploads/d3716b6f-c7cc-4162-a638-aecb894fb691.png')] bg-cover opacity-10"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-zarsom-teal mb-4">Market Opportunity</h3>
                <ul className="list-disc pl-5 space-y-3 text-gray-300">
                  <li>1,000+ trucks use the N2 corridor daily; demand for high-end rest facilities is underserved Arrive Alive.</li>
                  <li>Projected 10–15% annual freight growth ensures rising throughput.</li>
                  <li>Truck stop industry primed for billion-rand expansions in SA's expanding logistics network.</li>
                </ul>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default TruckStopsSection;
