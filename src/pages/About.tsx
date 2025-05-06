import { useRef, useEffect, useState } from "react";
import { Calendar, Award, Star, RotateCw, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import ParallaxHero from "@/components/ParallaxHero";
const About = () => {
  return <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <ParallaxHero imageSrc="/public/lovable-uploads/142af31d-4530-4df1-981e-e42f80a8f57b.png" height="h-[60vh]">
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
      
      {/* The ZARSOM Vision */}
      <section className="py-20 bg-gradient-to-b from-zarsom-navy to-zarsom-navy/90">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div className="grid grid-cols-1 gap-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-zarsom-teal/20 rounded-lg transform translate-x-3 translate-y-3"></div>
                  <img src="/public/lovable-uploads/2a585d01-2819-4080-b2c7-8c8fc7b53cbb.png" alt="Azande Mchunu" className="rounded-lg shadow-xl relative z-10 w-full h-auto" />
                </div>
                <div className="relative">
                  <div className="absolute inset-0 bg-zarsom-teal/20 rounded-lg transform translate-x-3 translate-y-3"></div>
                  <img src="/public/lovable-uploads/afb00cd9-80ee-4f4f-bd2d-bad0558efde7.png" alt="Bathuthukile Mchunu" className="rounded-lg shadow-xl relative z-10 w-full h-auto" />
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={300}>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                The ZARSOM Vision
              </h2>
              <div className="text-gray-300 space-y-4">
                <p>
                  Founded in 2018 by Azande and Bathuthukile Mchunu, ZARSOM Group began as a mobile canteen service in Amahlongwa, KwaZulu-Natal, with a mission to combat youth unemployment through innovative, community-first ventures.
                </p>
                <p>
                  What started as a simple mobile canteen has evolved into a dynamic enterprise focused on transformational infrastructure and community development. Our flagship project, ZARFUEL, exemplifies our commitment to creating lasting economic impact while addressing critical infrastructure needs.
                </p>
                <p>
                  ZARSOM Group is built on the principles of innovation, empowerment, and sustainable development. We believe in creating opportunities that not only generate economic growth but also uplift communities and create meaningful employment.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
      
      {/* Our Founders */}
      <section className="py-20 bg-gradient-to-b from-zarsom-navy/90 to-zarsom-navy/80">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Our Founders
            </h2>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollReveal delay={200}>
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:border-zarsom-teal/50 transition-all duration-300 hover-lift h-full">
                <h3 className="text-2xl font-bold text-white mb-4">Azande Mchunu • Co-Founder & Director</h3>
                <ul className="list-disc pl-5 space-y-3 text-gray-300">
                  <li>Created the ZARFUEL initiative to solve SAPPI Saiccor's logistical difficulty in 2021, securing 3.4 – 5 ha for ZARFUEL in 2025.</li>
                  <li>Secured critical funds from NYDA, SAFA & SEDA, enabling venture scaling.</li>
                  <li>Drives strategic vision across infrastructure, retail, and community projects.</li>
                </ul>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={400}>
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:border-zarsom-teal/50 transition-all duration-300 hover-lift h-full">
                <h3 className="text-2xl font-bold text-white mb-4">Bathuthukile Mchunu • Co-Founder & CEO</h3>
                <ul className="list-disc pl-5 space-y-3 text-gray-300">
                  <li>Built service excellence—from SAMA mobile canteens to Rosebank College catering.</li>
                  <li>Champions brand growth for HerCakes® and curated delivery initiatives.</li>
                  <li>Leads operations, staff development, and quality assurance.</li>
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
      
      {/* Past Ventures */}
      <section className="py-20 bg-gradient-to-b from-zarsom-navy/80 to-zarsom-navy/70">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Past Ventures
            </h2>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <ScrollReveal delay={100}>
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover-lift">
                <div className="flex items-center mb-4">
                  <div className="bg-zarsom-teal/20 p-3 rounded-full mr-4">
                    <Award className="h-6 w-6 text-zarsom-teal" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Rosebank College Canteen</h3>
                </div>
                <p className="text-gray-300">Campus catering services providing quality food to students and staff.</p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={200}>
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover-lift">
                <div className="flex items-center mb-4">
                  <div className="bg-zarsom-teal/20 p-3 rounded-full mr-4">
                    <Star className="h-6 w-6 text-zarsom-teal" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">HerCakes®</h3>
                </div>
                <p className="text-gray-300">Designer cakes & corporate events with a focus on quality and presentation.</p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={300}>
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover-lift">
                <div className="flex items-center mb-4">
                  <div className="bg-zarsom-teal/20 p-3 rounded-full mr-4">
                    <RotateCw className="h-6 w-6 text-zarsom-teal" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">GO Scoot!</h3>
                </div>
                <p className="text-gray-300">Scooter delivery addressing driver shortages in KwaZulu-Natal region.</p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={400}>
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover-lift">
                <div className="flex items-center mb-4">
                  <div className="bg-zarsom-teal/20 p-3 rounded-full mr-4">
                    <TrendingUp className="h-6 w-6 text-zarsom-teal" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Mobile Canteen</h3>
                </div>
                <p className="text-gray-300">Serving the South African Medical Association Office in Pretoria.</p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={500}>
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover-lift">
                <div className="flex items-center mb-4">
                  <div className="bg-zarsom-teal/20 p-3 rounded-full mr-4">
                    <Calendar className="h-6 w-6 text-zarsom-teal" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Catering Services</h3>
                </div>
                <p className="text-gray-300">For major firms and Gala events, including Presidential catering.</p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={600}>
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover-lift">
                <div className="flex items-center mb-4">
                  <div className="bg-zarsom-teal/20 p-3 rounded-full mr-4">
                    <Award className="h-6 w-6 text-zarsom-teal" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Uber Partner</h3>
                </div>
                <p className="text-gray-300">Serving Confectionery and Traditional African meals through the platform.</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
      
      {/* Our Journey Timeline */}
      <section className="py-20 bg-gradient-to-b from-zarsom-navy/70 to-zarsom-navy/60">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Our Journey
            </h2>
          </ScrollReveal>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 transform md:translate-x-[-50%] top-0 bottom-0 w-1 bg-zarsom-teal/50"></div>
            
            {/* Timeline Items */}
            <div className="space-y-12">
              <ScrollReveal>
                <TimelineItem year="2018–19" title="ZARSOM Begins" description="Mobile canteen launch for SAMA & catering for Classen Aurett; major enterprise funding" isLeft={true} />
              </ScrollReveal>
              
              <ScrollReveal delay={200}>
                <TimelineItem year="2021" title="Strategic Pivot" description="Pivot to delivery solutions (GO Scoot!) to address logistical gaps in the market" isLeft={false} />
              </ScrollReveal>
              
              <ScrollReveal delay={400}>
                <TimelineItem year="2022–23" title="Growth & Recognition" description="Media features (Competition Commission, SABC); Presidential catering contracts" isLeft={true} />
              </ScrollReveal>
              
              <ScrollReveal delay={600}>
                <TimelineItem year="2024" title="Expansion" description="Win Rosebank College contract, establishing a firm foothold in the educational sector" isLeft={false} />
              </ScrollReveal>
              
              <ScrollReveal delay={800}>
                <TimelineItem year="2025" title="ZARFUEL Launch" description="Secure SAPPI land lease for ZARFUEL, initiating our flagship infrastructure project" isLeft={true} />
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
      
      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-b from-zarsom-navy/60 to-zarsom-navy">
        <div className="container mx-auto px-4 bg-slate-50">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-center mb-12 text-slate-950 py-[23px] md:text-5xl">
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
              <Button className="hero-button bg-zarsom-teal text-white hover:bg-zarsom-teal/80">
                Explore ZARFUEL Project
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>;
};
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
  return <div className={`flex items-center ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col`}>
      <div className={`md:w-1/2 w-full ${isLeft ? 'md:pr-12 md:text-right' : 'md:pl-12'} pb-10 md:pb-0`}>
        <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover-lift">
          <div className="text-zarsom-teal font-bold text-xl mb-2">{year}</div>
          <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
          <p className="text-gray-300">{description}</p>
        </div>
      </div>
      
      <div className="md:w-0 w-px h-10 md:h-0 bg-zarsom-teal/50 md:hidden"></div>
      
      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-zarsom-teal border-4 border-zarsom-navy absolute left-[-5px] md:left-1/2 md:transform md:translate-x-[-50%]"></div>
    </div>;
};
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
        
        <div className="absolute w-full h-full backface-hidden backdrop-blur-md rounded-xl p-8 flex items-center justify-center shadow-xl rotate-y-180 bg-cyan-950">
          <p className="text-xl text-white">{description}</p>
        </div>
      </div>
    </div>;
};
export default About;