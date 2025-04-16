import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Image from 'next/image';

const LogoMarque2 = () => {
  const marqueeRef = useRef(null);
  const containerRef = useRef(null);
  
  const logos = [
    { src: '/assets/tailwindcss.svg', width: 120 },
    { src: '/assets/nodejs.svg', width: 120 },
    { src: '/assets/deno.svg', width: 120, invert: true },
    { src: '/assets/expressjs.svg', width: 140, invert: true },
    { src: '/assets/nextjs.svg', width: 130, invert: true },
    { src: '/assets/react.svg', width: 130 },
  ];

  useEffect(() => {
    // Calculate individual logo widths including margins (mx-8 = 4rem total)
    const totalLogoWidth = logos.reduce((acc, logo) => acc + logo.width + 64, 0); // 64px = 4rem
    
    // Create an animation that doesn't move all the way to the edge
    const moveDistance = totalLogoWidth / 2; // Only move half the total distance
    
    // Setup GSAP animation
    gsap.to(marqueeRef.current, {
      x: -moveDistance,
      duration: 15,
      ease: "linear",
      repeat: -1,
      onRepeat: () => {
        // Jump back to start instantly (not visible due to identical logos)
        gsap.set(marqueeRef.current, { x: 0 });
      }
    });
    
    return () => {
      // Clean up animation on unmount
      gsap.killTweensOf(marqueeRef.current);
    };
  }, []);

  return (
    <div className="w-full bg-black py-8 overflow-hidden" ref={containerRef}>
      <div className="relative w-full">
        <div ref={marqueeRef} className="flex items-center">
          {/* All logos in one continuous row */}
          {[...logos, ...logos].map((logo, index) => (
            <div 
              key={`logo-${index}`} 
              className="logo-item mx-8 flex-shrink-0"
            >
              <div className="relative h-12 md:h-16" style={{ width: `${logo.width}px` }}>
                <Image
                  src={logo.src}
                  alt="Logo"
                  width={logo.width}
                  height={logo.width}
                  style={{ objectFit: "contain" }}
                  className={`bg-transparent ${logo.invert ? 'brightness-0 invert' : ''}`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoMarque2;