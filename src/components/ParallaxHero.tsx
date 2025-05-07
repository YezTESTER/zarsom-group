
import { useEffect, useState, useRef } from "react";

interface ParallaxHeroProps {
  imageSrc: string;
  children: React.ReactNode;
  height?: string;
  overlayOpacity?: number;
}

const ParallaxHero = ({
  imageSrc,
  children,
  height = "h-screen",
  overlayOpacity = 0.6
}: ParallaxHeroProps) => {
  const [offsetY, setOffsetY] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const { top } = heroRef.current.getBoundingClientRect();
        if (top <= window.innerHeight && top >= -window.innerHeight) {
          setOffsetY(window.scrollY * 0.5);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={heroRef}
      className={`relative overflow-hidden ${height} flex items-center justify-center`}
    >
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${imageSrc})`,
          transform: `translateY(${offsetY * 0.5}px)`,
          backgroundPosition: "center",
          willChange: "transform",
          zIndex: 0
        }}
      />
      <div
        style={{
          opacity: overlayOpacity,
          zIndex: 1
        }}
        className="absolute inset-0 w-full h-full bg-[#070127]/[0.81]"
      />
      <div className="relative z-10 container mx-auto px-4">{children}</div>
    </div>
  );
};

export default ParallaxHero;
