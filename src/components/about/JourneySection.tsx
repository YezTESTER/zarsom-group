
import React from 'react';
import ScrollReveal from "@/components/ScrollReveal";

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  isLeft: boolean;
}

const TimelineItem = ({
  year,
  title,
  description,
  isLeft
}: TimelineItemProps) => {
  return (
    <div className={`flex items-center ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col`}>
      <div className={`md:w-1/2 w-full ${isLeft ? 'md:pr-12 md:text-right' : 'md:pl-12'} pb-10 md:pb-0`}>
        <div className="bg-gradient-to-br from-[#0EA5E9]/50 to-[#1A1F2C]/70 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover-lift relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/lovable-uploads/d3716b6f-c7cc-4162-a638-aecb894fb691.png')] bg-cover opacity-10"></div>
          <div className="relative z-10">
            <div className="text-zarsom-teal font-bold text-xl mb-2">{year}</div>
            <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
            <p className="text-gray-300">{description}</p>
          </div>
        </div>
      </div>
      
      <div className="md:w-0 w-px h-10 md:h-0 bg-zarsom-teal/50 md:hidden"></div>
      
      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-zarsom-teal border-4 border-zarsom-navy absolute left-[-5px] md:left-1/2 md:transform md:translate-x-[-50%]"></div>
    </div>
  );
};

const JourneySection = () => {
  return (
    <section className="py-20 relative">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed" 
        style={{
          backgroundImage: "url('/lovable-uploads/60e48ba6-3dff-4956-bb83-6a1f2754d864.png')",
          zIndex: 0
        }} 
      />
      <div className="absolute inset-0 bg-zarsom-navy/85" style={{ zIndex: 1 }}></div>
      
      <div 
        className="container mx-auto px-4 relative z-10" 
      >
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Our Journey
          </h2>
        </ScrollReveal>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 transform md:translate-x-[-50%] top-0 bottom-0 w-1 bg-zarsom-teal/70"></div>
          
          {/* Timeline Items */}
          <div className="space-y-12">
            <ScrollReveal>
              <TimelineItem 
                year="2018–19" 
                title="ZARSOM Begins" 
                description="Mobile canteen launch for SAMA & catering for Classen Aurett; major enterprise funding" 
                isLeft={true} 
              />
            </ScrollReveal>
            
            <ScrollReveal delay={200}>
              <TimelineItem 
                year="2021" 
                title="Strategic Pivot" 
                description="Pivot to delivery solutions (GO Scoot!) to address logistical gaps in the market" 
                isLeft={false} 
              />
            </ScrollReveal>
            
            <ScrollReveal delay={400}>
              <TimelineItem 
                year="2022–23" 
                title="Growth & Recognition" 
                description="Media features (Competition Commission, SABC); Presidential catering contracts" 
                isLeft={true} 
              />
            </ScrollReveal>
            
            <ScrollReveal delay={600}>
              <TimelineItem 
                year="2024" 
                title="Expansion" 
                description="Win Rosebank College contract, establishing a firm foothold in the educational sector" 
                isLeft={false} 
              />
            </ScrollReveal>
            
            <ScrollReveal delay={800}>
              <TimelineItem 
                year="2025" 
                title="ZARFUEL Launch" 
                description="Secure SAPPI land lease for ZARFUEL, initiating our flagship infrastructure project" 
                isLeft={true} 
              />
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
