
import { useEffect, useState, useRef } from "react";

interface CounterCardProps {
  title: string;
  value: number;
  suffix?: string;
  delayMs?: number;
}

const CounterCard = ({ title, value, suffix = "", delayMs = 0 }: CounterCardProps) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);
  
  useEffect(() => {
    if (!isVisible) return;
    
    const timeout = setTimeout(() => {
      const duration = 2000;
      const increment = Math.ceil(value / (duration / 50));
      let currentCount = 0;
      
      const interval = setInterval(() => {
        currentCount += increment;
        if (currentCount >= value) {
          setCount(value);
          clearInterval(interval);
        } else {
          setCount(currentCount);
        }
      }, 50);
      
      return () => clearInterval(interval);
    }, delayMs);
    
    return () => clearTimeout(timeout);
  }, [isVisible, value, delayMs]);
  
  return (
    <div 
      ref={cardRef} 
      className="bg-zarsom-navy p-6 rounded-lg shadow-lg text-center transform transition-all duration-500 hover:scale-105 hover:shadow-xl"
    >
      <div className="text-4xl font-bold text-zarsom-teal mb-2">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-white font-medium">{title}</div>
    </div>
  );
};

export default CounterCard;
