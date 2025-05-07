
import React from 'react';
import ScrollReveal from "@/components/ScrollReveal";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const FoundersSection = () => {
  return (
    <section className="bg-gradient-to-b from-zarsom-navy/90 to-zarsom-navy/80 py-[29px]">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            The Founders
          </h2>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ScrollReveal delay={200}>
            <div className="bg-gradient-to-br from-[#0EA5E9]/50 to-[#1A1F2C]/70 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:border-zarsom-teal/50 transition-all duration-300 hover-lift h-full px-[50px] mx-[21px] overflow-hidden relative">
              <div className="absolute inset-0 bg-[url('/lovable-uploads/d3716b6f-c7cc-4162-a638-aecb894fb691.png')] bg-cover opacity-10"></div>
              <div className="relative z-10">
                <div className="flex items-start gap-4 mb-4">
                  <Avatar className="h-20 w-20 border-2 border-zarsom-teal">
                    <AvatarImage src="/public/lovable-uploads/0d4fdd2d-1279-4df3-99fa-9191ecdab99c.png" alt="Bathuthukile Mchunu" />
                    <AvatarFallback>BM</AvatarFallback>
                  </Avatar>
                  <h3 className="text-2xl font-bold text-white">Bathuthukile Mchunu • Co-Founder & CEO</h3>
                </div>
                <ul className="list-disc pl-5 space-y-3 text-gray-300">
                  <li>Built service excellence—from SAMA mobile canteens to Rosebank College catering.</li>
                  <li>Champions brand growth for HerCakes® and curated delivery initiatives.</li>
                  <li>Leads operations, staff development, and quality assurance.</li>
                </ul>
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={400}>
            <div className="bg-gradient-to-br from-[#0EA5E9]/50 to-[#1A1F2C]/70 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:border-zarsom-teal/50 transition-all duration-300 hover-lift h-full mx-[21px] px-[51px] overflow-hidden relative">
              <div className="absolute inset-0 bg-[url('/lovable-uploads/d3716b6f-c7cc-4162-a638-aecb894fb691.png')] bg-cover opacity-10"></div>
              <div className="relative z-10">
                <div className="flex items-start gap-4 mb-4">
                  <Avatar className="h-20 w-20 border-2 border-zarsom-teal">
                    <AvatarImage src="/public/lovable-uploads/e3c665d7-bff3-480b-9cb8-f30ed0558799.png" alt="Azande Mchunu" />
                    <AvatarFallback>AM</AvatarFallback>
                  </Avatar>
                  <h3 className="text-2xl font-bold text-white">Azande Mchunu • Co-Founder & Director</h3>
                </div>
                <ul className="list-disc pl-5 space-y-3 text-gray-300">
                  <li>Created the ZARFUEL initiative to solve SAPPI Saiccor's logistical difficulty in 2021, securing 3.4 – 5 ha for ZARFUEL in 2025.</li>
                  <li>Secured critical funds from NYDA, SAFA & SEDA, enabling venture scaling.</li>
                  <li>Drives strategic vision across infrastructure, retail, and community projects.</li>
                </ul>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default FoundersSection;
