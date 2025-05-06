
import { Link } from "react-router-dom";
import { ChevronRight, Truck, Users, Map, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import ParallaxHero from "@/components/ParallaxHero";
import CounterCard from "@/components/CounterCard";
import ScrollReveal from "@/components/ScrollReveal";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <ParallaxHero imageSrc="/lovable-uploads/fd2a7bba-69de-44f3-8187-d3450202933e.png">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            Fueling Progress. <span className="text-zarsom-teal">Nourishing Communities.</span>
          </h1>
          <p
            className="text-xl text-gray-200 mb-8 animate-fade-in"
            style={{
              animationDelay: "300ms"
            }}
          >
            Discover ZARFUEL, a next-generation truck stop by ZARSOM Group—designed to power South Africa's freight backbone and uplift local communities.
          </p>
          <div
            className="flex flex-wrap justify-center gap-4 animate-fade-in"
            style={{
              animationDelay: "600ms"
            }}
          >
            <Link to="/zarfuel">
              <Button className="hero-button bg-zarsom-teal text-white hover:bg-zarsom-teal/80">
                Learn About ZARFUEL <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" className="hero-button border-white text-white hover:bg-white/10">
                Meet the Founders <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="ghost" className="hero-button text-white hover:bg-white/10">
                Contact Us <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </ParallaxHero>
      
      {/* ZARSOM Group Initiative */}
      <section className="py-20 bg-gradient-to-b from-zarsom-navy to-zarsom-navy/90 bg-transparent">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  ZARSOM Group's Initiative & Flagship Project
                </h2>
                <div className="text-gray-300 space-y-4">
                  <p className="px-[2px] my-0">
                    ZARFUEL is a multi-million-rand, state-of-the-art truck stop initiative built on 3.4 – 5 ha of prime N2 land at Umkomaas, delivered through a landmark partnership with SAPPI Saiccor in 2025. Slated to serve 360+ trucks daily and create 70+ permanent jobs, it combines:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>High-speed fuel services</li>
                    <li>Secure parking (100+ bays)</li>
                    <li>Driver amenities (showers, lounges, truck wash)</li>
                    <li className="rounded-none">Future retail & warehousing</li>
                  </ul>
                  <p>
                    Founded by sisters Azande and Bathuthukile Mchunu—two black female entrepreneurs who overcame adversity to spearhead this venture—ZARFUEL exemplifies ZARSOM Group's commitment to regional growth. With truck stops powering 80% of South African freight and the logistics sector contributing ~6.5% of GDP, ZARFUEL aims to capture this opportunity, enhance road safety, and stimulate local commerce over the coming years.
                  </p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <div className="relative">
                <div className="absolute inset-0 bg-zarsom-teal/20 rounded-lg transform translate-x-4 translate-y-4"></div>
                <img alt="ZARFUEL Render" className="rounded-lg shadow-xl relative z-10 w-full h-auto" src="/lovable-uploads/2b6dfece-a7b8-4156-819c-5cc82438f853.jpg" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
      
      {/* Key Highlights */}
      <section className="bg-gradient-to-b from-zarsom-navy/90 to-zarsom-navy/80 py-[28px] bg-cyan-950">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-white text-center mb-12 md:text-5xl">
              Key Highlights
            </h2>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ScrollReveal delay={100}>
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 text-center hover-lift">
                <div className="inline-block p-4 bg-zarsom-teal/20 rounded-full mb-4">
                  <Truck className="h-10 w-10 text-zarsom-teal animate-pulse" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">360+</h3>
                <p className="text-gray-300">Trucks Daily through Umkomaas</p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={200}>
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 text-center hover-lift">
                <div className="inline-block p-4 bg-zarsom-teal/20 rounded-full mb-4">
                  <Users className="h-10 w-10 text-zarsom-teal animate-pulse" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">70+</h3>
                <p className="text-gray-300">Jobs Created in Phase 1</p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={300}>
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 text-center hover-lift">
                <div className="inline-block p-4 bg-zarsom-teal/20 rounded-full mb-4">
                  <Map className="h-10 w-10 text-zarsom-teal animate-pulse" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">3.4–5</h3>
                <p className="text-gray-300">Hectares of Prime Land Secured</p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={400}>
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 text-center hover-lift">
                <div className="inline-block p-4 bg-zarsom-teal/20 rounded-full mb-4">
                  <TrendingUp className="h-10 w-10 text-zarsom-teal animate-pulse" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Billion-Rand</h3>
                <p className="text-gray-300">Potential Project Lifecycle</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
      
      {/* Stats Bar */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <CounterCard title="Logistics on N2 Daily" value={1000} suffix="+" delayMs={0} />
            <CounterCard title="Freight Road Share" value={80} suffix="%" delayMs={200} />
            <CounterCard title="Logistics GDP Contribution" value={6.5} suffix="%" delayMs={400} />
            <CounterCard title="Projected CAGR to 2030" value={6.24} suffix="%" delayMs={600} />
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-zarsom-navy/80 to-zarsom-navy bg-yellow-600">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Learn More About ZARFUEL?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover how our state-of-the-art truck stop is set to transform logistics in South Africa while uplifting local communities.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/zarfuel">
                <Button className="hero-button bg-zarsom-teal text-white hover:bg-zarsom-teal/80">
                  Explore ZARFUEL Project <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="hero-button border-white text-white hover:bg-white/10">
                  Get in Touch <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Home;
