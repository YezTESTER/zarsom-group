import { useState } from "react";
import { Droplet, ShieldCheck, Home, Waves, ShoppingBag, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import ParallaxHero from "@/components/ParallaxHero";
import AnimatedFeature from "@/components/AnimatedFeature";
import CounterCard from "@/components/CounterCard";
import ScrollReveal from "@/components/ScrollReveal";

const Zarfuel = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <ParallaxHero 
        imageSrc="/public/lovable-uploads/dea71d14-a0f0-4a83-9bef-cd6ce0e40dd0.png"
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
      
      {/* Overview */}
      <section className="py-20 bg-gradient-to-b from-zarsom-navy to-zarsom-navy/90">
        <div className="container mx-auto px-4">
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
              description="100+ truck bays under 24/7 monitoring and security."
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
      
      {/* Phased Development */}
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
      
      {/* Economic & Social Impact */}
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
              value={70} 
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
      
      {/* Why Truck Stops Matter */}
      <section className="py-20 bg-gradient-to-b from-zarsom-navy/70 to-zarsom-navy/80">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Why Truck Stops Matter
            </h2>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollReveal delay={100}>
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover-lift h-full">
                <h3 className="text-2xl font-bold text-zarsom-teal mb-4">National Context</h3>
                <ul className="list-disc pl-5 space-y-3 text-gray-300">
                  <li>80% of SA freight moves by road—truck stops are critical nodes Focus on Transport and Logistics.</li>
                  <li>Logistics sector contributes 6.5% of GDP, with 9.3% from transport/storage/communication combined Labour Research Service.</li>
                  <li>Premium truck stops enhance driver welfare, reducing accidents (54 accidents on KZN's N2 in 12 months) IOL.</li>
                </ul>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={300}>
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover-lift h-full">
                <h3 className="text-2xl font-bold text-zarsom-teal mb-4">Market Opportunity</h3>
                <ul className="list-disc pl-5 space-y-3 text-gray-300">
                  <li>1,000+ trucks use the N2 corridor daily; demand for high-end rest facilities is underserved Arrive Alive.</li>
                  <li>Projected 10–15% annual freight growth ensures rising throughput.</li>
                  <li>Truck stop industry primed for billion-rand expansions in SA's expanding logistics network.</li>
                </ul>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={500}>
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover-lift h-full flex items-center justify-center">
                <Button className="hero-button bg-zarsom-teal text-white hover:bg-zarsom-teal/80 py-8 px-8 text-lg">
                  Learn More
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
      
      {/* Strategic Partnerships */}
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
              <Button className="hero-button bg-zarsom-teal text-white hover:bg-zarsom-teal/80">
                Contact Us About ZARFUEL
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

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

export default Zarfuel;
