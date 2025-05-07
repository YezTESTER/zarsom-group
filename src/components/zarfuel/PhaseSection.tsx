
import React, { useState } from 'react';
import ScrollReveal from "@/components/ScrollReveal";
import { ChevronUp, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PhaseAccordionProps {
  phase: string;
  description: string;
}

const PhaseAccordion = ({ phase, description }: PhaseAccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="rounded-xl overflow-hidden">
      <div 
        className="bg-zarsom-teal/20 p-4 flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-xl font-semibold text-white">{phase}</h3>
        <Button variant="ghost" size="sm" className="text-white">
          {isOpen ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
        </Button>
      </div>
      
      {isOpen && (
        <div className="bg-white/5 p-6 border-t border-zarsom-teal/20">
          <p className="text-gray-300">{description}</p>
        </div>
      )}
    </div>
  );
};

const PhaseSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-zarsom-navy/90 to-zarsom-navy/80">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Phased Development
          </h2>
        </ScrollReveal>
        
        <div className="max-w-3xl mx-auto space-y-6">
          <ScrollReveal delay={100}>
            <PhaseAccordion 
              phase="Phase 1 (12–18 months)"
              description="Fuel tanks (80 000 L → 180 000 L), parking, basic amenities."
            />
          </ScrollReveal>
          
          <ScrollReveal delay={300}>
            <PhaseAccordion 
              phase="Phase 2 (6–12 months)"
              description="Lounges, showers, food court, convenience store."
            />
          </ScrollReveal>
          
          <ScrollReveal delay={500}>
            <PhaseAccordion 
              phase="Phase 3 (12–24 months)"
              description="Retail outlets, warehousing, ancillary services."
            />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default PhaseSection;
