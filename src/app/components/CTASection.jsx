"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";

const CTASection = () => {
  const logoContainerRef = useRef(null);
  const logoTrackRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  const clients = [
    { name: "express", logo: "/assets/expressjs.svg" },
    { name: "deno", logo: "/assets/deno.svg" },
    { name: "next", logo: "/assets/nextjs.svg" },
    { name: "node", logo: "/assets/nodejs.svg" },
    { name: "typescript", logo: "/assets/react.svg" },
  ];

  // Duplicate clients for seamless looping
  const duplicatedClients = [...clients, ...clients];

  useEffect(() => {
    // Wait for the logo track to be available in the DOM
    if (!logoTrackRef.current) return;

    // Get width of the logo track
    const logoTrack = logoTrackRef.current;
    const logoWidth = logoTrack.offsetWidth / 2;

    // Create animation
    const tl = gsap.timeline();

    // Create infinite loop animation
    tl.to(logoTrack, {
      x: -logoWidth,
      duration: 20,
      ease: "linear",
      repeat: -1,
      onRepeat: () => {
        // Reset position without visual jump
        gsap.set(logoTrack, { x: 0 });
      },
    });

    // Pause animation when not visible
    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section 
      className={`relative ${isHovering ? 'bg-green-800' : 'bg-emerald-600'} py-24 overflow-hidden transition-colors duration-300`}
    >
      {/* Grid pattern background */}
      <div className="absolute inset-0 grid grid-cols-12 gap-4 opacity-20 pointer-events-none">
        {Array.from({ length: 120 }).map((_, i) => (
          <div key={i} className={`border-t border-l ${isHovering ? 'border-gray-700' : 'border-emerald-500'}`}></div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Main content */}
        <div className="text-center mb-16">
          <h2 className="text-white text-5xl font-bold mb-6 leading-tight">
            Have project <br /> in mind? Let's talk
          </h2>

          <div className="flex justify-center mt-12">
            
            <a href="#contact"
              className="bg-white text-black px-8 py-4 rounded-lg flex items-center gap-3 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            
            >
            
            
             a Book a free discovery call <ArrowRight className="inline-block" size={20} />
            </a>
          </div>
        </div>

        {/* Client logos section with GSAP animation */}
        <div className="mt-24">
          <p className="text-center text-white text-lg mb-10">
            Trusted by enterprises worldwide
          </p>

          {/* Logo marquee container */}
          <div ref={logoContainerRef} className="w-full overflow-hidden">
            <div ref={logoTrackRef} className="inline-flex whitespace-nowrap">
              {duplicatedClients.map((client, index) => (
                <div key={`${client.name}-${index}`} className="mx-8 h-10">
                  <div className="relative h-10 w-32">
                    <Image
                      src={client.logo}
                      alt={client.name}
                      fill
                      style={{ objectFit: "contain" }}
                      className="brightness-0 invert" // Makes logos white
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;