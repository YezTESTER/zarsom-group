
import { useEffect, useRef, useState } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}

const ScrollReveal = ({ 
  children, 
  delay = 0, 
  direction = "up" 
}: ScrollRevealProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    if (elementRef.current) {
      observer.observe(elementRef.current);
    }
    
    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);
  
  const getInitialPosition = () => {
    switch (direction) {
      case "up": return "translate-y-16";
      case "down": return "-translate-y-16";
      case "left": return "translate-x-16";
      case "right": return "-translate-x-16";
      default: return "translate-y-16";
    }
  };
  
  return (
    <div
      ref={elementRef}
      className={`transition-all duration-700 ${
        isVisible 
          ? "opacity-100 transform-none" 
          : `opacity-0 ${getInitialPosition()}`
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
