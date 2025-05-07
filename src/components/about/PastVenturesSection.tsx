
import React from 'react';
import ScrollReveal from "@/components/ScrollReveal";
import { Award, Star, RotateCw, TrendingUp, Calendar } from "lucide-react";

const PastVenturesSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-zarsom-navy/80 to-zarsom-navy/70">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Past Ventures
          </h2>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <VentureCard 
            icon={<Award className="h-6 w-6 text-zarsom-teal" />}
            title="Rosebank College Canteen"
            description="Campus catering services providing quality food to students and staff."
            delay={100}
          />
          
          <VentureCard 
            icon={<Star className="h-6 w-6 text-zarsom-teal" />}
            title="HerCakes®"
            description="Designer cakes & corporate events with a focus on quality and presentation."
            delay={200}
          />
          
          <VentureCard 
            icon={<RotateCw className="h-6 w-6 text-zarsom-teal" />}
            title="GO Scoot!"
            description="Scooter delivery addressing driver shortages in KwaZulu-Natal region."
            delay={300}
          />
          
          <VentureCard 
            icon={<TrendingUp className="h-6 w-6 text-zarsom-teal" />}
            title="Mobile Canteen"
            description="Serving the South African Medical Association Office in Pretoria."
            delay={400}
          />
          
          <VentureCard 
            icon={<Calendar className="h-6 w-6 text-zarsom-teal" />}
            title="Catering Services"
            description="For major firms and Gala events, including Presidential catering."
            delay={500}
          />
          
          <VentureCard 
            icon={<Award className="h-6 w-6 text-zarsom-teal" />}
            title="Uber Partner"
            description="Serving Confectionery and Traditional African meals through the platform."
            delay={600}
          />
        </div>
      </div>
    </section>
  );
};

interface VentureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const VentureCard = ({ icon, title, description, delay }: VentureCardProps) => {
  return (
    <ScrollReveal delay={delay}>
      <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover-lift">
        <div className="flex items-center mb-4">
          <div className="bg-zarsom-teal/20 p-3 rounded-full mr-4">
            {icon}
          </div>
          <h3 className="text-xl font-semibold text-white">{title}</h3>
        </div>
        <p className="text-gray-300">{description}</p>
      </div>
    </ScrollReveal>
  );
};

export default PastVenturesSection;
