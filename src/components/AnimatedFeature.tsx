
import { useEffect, useRef, useState } from "react";

interface AnimatedFeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

const AnimatedFeature = ({ icon, title, description, delay = 0 }: AnimatedFeatureProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const featureRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    if (featureRef.current) {
      observer.observe(featureRef.current);
    }
    
    return () => {
      if (featureRef.current) {
        observer.unobserve(featureRef.current);
      }
    };
  }, []);
  
  return (
    <div 
      ref={featureRef}
      className={`bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 transition-all duration-500 hover:shadow-lg hover:border-zarsom-teal/50 ${
        isVisible 
          ? "opacity-100 translate-y-0" 
          : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="text-zarsom-teal mb-4 hover:scale animate-pulse">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};

export default AnimatedFeature;
