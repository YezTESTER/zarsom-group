
import React from "react";
import ParallaxHero from "@/components/ParallaxHero";
import VisionSection from "@/components/about/VisionSection";
import FoundersSection from "@/components/about/FoundersSection";
import PastVenturesSection from "@/components/about/PastVenturesSection";
import JourneySection from "@/components/about/JourneySection";
import MissionVisionSection from "@/components/about/MissionVisionSection";

const About = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <ParallaxHero 
        imageSrc="/lovable-uploads/6b626058-2a08-4161-8f11-754bda7f0cbd.png" 
        height="h-[60vh]"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            About <span className="text-zarsom-teal">ZARSOM Group</span>
          </h1>
          <p className="text-xl text-gray-200 mb-8 animate-fade-in" style={{
            animationDelay: "300ms"
          }}>
            Our vision, our journey, and the passion that drives us forward.
          </p>
        </div>
      </ParallaxHero>
      
      <VisionSection />
      <FoundersSection />
      <PastVenturesSection />
      <JourneySection />
      <MissionVisionSection />
    </div>
  );
};

export default About;
