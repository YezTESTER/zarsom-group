
import React from 'react';
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface PartnerCardProps {
  name: string;
  description: string;
}

const PartnerCard = ({ name, description }: PartnerCardProps) => {
  return (
    <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 text-center hover-lift h-full flex flex-col justify-between">
      <div>
        <div className="w-20 h-20 bg-white/10 rounded-full mx-auto mb-6 flex items-center justify-center">
          <div className="text-2xl font-bold text-zarsom-teal">{name.charAt(0)}</div>
        </div>
        <h3 className="text-xl font-semibold text-white mb-4">{name}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </div>
  );
};

const PartnersSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-zarsom-navy/70 to-zarsom-navy">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Strategic Partnerships
          </h2>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ScrollReveal delay={100}>
            <PartnerCard 
              name="SAPPI Saiccor"
              description="Logistical synergy. Ensuring smooth pulp-truck flow and seasonal cargo."
            />
          </ScrollReveal>
          
          <ScrollReveal delay={300}>
            <PartnerCard 
              name="Umkomaas Community"
              description="Building new economies and creating new opportunities for local residents."
            />
          </ScrollReveal>
          
          <ScrollReveal delay={500}>
            <PartnerCard 
              name="Afzeila Environmental Consulting"
              description="EIA & sustainability compliance to ensure environmental responsibility."
            />
          </ScrollReveal>
        </div>
        
        <ScrollReveal delay={700}>
          <div className="mt-16 text-center">
            <Link to="/contact">
              <Button className="hero-button bg-zarsom-teal text-white hover:bg-zarsom-teal/80">
                Contact Us About ZARFUEL
              </Button>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default PartnersSection;
