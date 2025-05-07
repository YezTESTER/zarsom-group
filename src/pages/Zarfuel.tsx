
import React from "react";
import ZarfuelHero from "@/components/zarfuel/ZarfuelHero";
import OverviewSection from "@/components/zarfuel/OverviewSection";
import PhaseSection from "@/components/zarfuel/PhaseSection";
import ImpactSection from "@/components/zarfuel/ImpactSection";
import TruckStopsSection from "@/components/zarfuel/TruckStopsSection";
import PartnersSection from "@/components/zarfuel/PartnersSection";

const Zarfuel = () => {
  return (
    <div className="min-h-screen pt-20">
      <ZarfuelHero />
      <OverviewSection />
      <PhaseSection />
      <ImpactSection />
      <TruckStopsSection />
      <PartnersSection />
    </div>
  );
};

export default Zarfuel;
