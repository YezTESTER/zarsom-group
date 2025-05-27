import React, { useState } from 'react';
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
interface MissionVisionCardProps {
  title: string;
  description: string;
  bgClass: string;
}
const MissionVisionCard = ({
  title,
  description,
  bgClass
}: MissionVisionCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);
  return <div className="h-[300px] perspective-1000 cursor-pointer" onClick={() => setIsFlipped(!isFlipped)}>
      <div className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
        <div className={`absolute w-full h-full backface-hidden ${bgClass} rounded-xl p-8 flex items-center justify-center shadow-xl`}>
          <h3 className="text-3xl font-bold text-white">{title}</h3>
        </div>
        
        <div className="absolute w-full h-full backface-hidden backdrop-blur-md rounded-xl p-8 flex items-center justify-center shadow-xl rotate-y-180 bg-zarsom-navy">
          <p className="text-xl text-center text-slate-50">{description}</p>
        </div>
      </div>
    </div>;
};
const MissionVisionSection = () => {
  return <section className="bg-gradient-to-b from-zarsom-navy/60 to-zarsom-navy bg-slate-950 py-0">
      <div className="container mx-auto px-4 bg-slate-50">
        <ScrollReveal>
          <h2 className="text-3xl font-bold text-center mb-12 py-[23px] text-zarsom-navy md:text-5xl">
            Mission & Vision
          </h2>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ScrollReveal delay={200}>
            <MissionVisionCard title="Our Mission" description="Empower communities by creating jobs, developing skills, and driving sustainable growth through innovative infrastructure and service solutions." bgClass="bg-gradient-to-br from-zarsom-navy/80 to-zarsom-teal/30" />
          </ScrollReveal>
          
          <ScrollReveal delay={400}>
            <MissionVisionCard title="Our Vision" description="Lead South African development with legacy enterprises that transform regions, create sustainable employment, and build generational prosperity." bgClass="bg-gradient-to-br from-zarsom-teal/30 to-zarsom-navy/80" />
          </ScrollReveal>
        </div>
        
        <ScrollReveal delay={600}>
          <div className="mt-16 text-center">
            <Link to="/zarfuel">
              <Button className="hero-button text-white bg-zarsom-teal">
                Explore ZARFUEL Project
              </Button>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>;
};
export default MissionVisionSection;