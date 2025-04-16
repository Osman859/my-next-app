import React from "react";
import Navbar from "./Navbar"; // Import the Navbar component

const Navbar2 = () => {
  const handleClick = () => {
    window.open("https://www.fiverr.com/rednsay", "_blank");
  };

  return (
    <main>
      <div className="min-h-screen bg-black relative overflow-hidden">
        {/* Green Grid Background */}
        <div className="absolute inset-0 w-full h-full z-0">
          {/* Grid overlay with radial gradient for the center fading effect */}
          <div 
            className="absolute inset-0 w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(22, 163, 74, 0.15) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(22, 163, 74, 0.15) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px',
              mask: 'radial-gradient(circle at center, transparent 30%, black 70%)'
            }}
          />
        </div>

        {/* Navbar is now imported as a component */}
        <Navbar />

        {/* Content Container with higher z-index */}
        <div className="relative z-10">
          {/* Hero Section */}
          <div className="container mx-auto px-4 mt-24 mb-16 text-center">
            <h1 className="text-6xl md:text-8xl font-bold mb-4">
              <div className="text-white/90 font-anton">WE BUILD TOP-NOTCH</div>
              <div className="text-green-500">CUSTOM WEB</div>
              <div className="text-green-500">APPLICATIONS</div>
            </h1>

            <p className="text-gray-400 text-xl md:text-2xl mt-10 max-w-4xl mx-auto">
              Top-tier ReactJs, NextJs web apps, engineered with dedication and
              expertise.
            </p>
          </div>

          {/* Last Section */}
          <div className="text-center">
            {/* Fiverr and Rating Section */}
            <div className="flex flex-col items-center mb-6">
              <div className="flex items-center space-x-2">
                <span
                  className="text-6xl font-bold text-white cursor-pointer hover:text-green-400 transition-colors duration-500"
                  onClick={handleClick}
                >
                  fiverr
                  <span className="text-6xl font-bold text-green-700">.</span>
                </span>

                <div className="flex flex-col items-center">
                  <span className="flex items-center">⭐⭐⭐⭐⭐</span>
                  <span className="text-white text-2xl">
                    <span className="text-2xl text-white font-bold">5</span> (243)
                  </span>
                </div>

                <button className="mt-4 px-8 ml-10 cursor-pointer py-2 bg-gradient-to-r from-green-400 to-green-600 text-black font-semibold rounded-lg shadow-md hover:from-green-500 hover:to-green-700 transition-colors duration-400">
                  Book a call →
                </button>
              </div>
            </div>

            {/* WhatsApp Button */}
            <div className="fixed bottom-6 right-6">
              <a
                href="https://api.whatsapp.com/send?phone=YOURNUMBERHERE"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 p-3 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors shadow-[0_0_15px_rgba(255,255,255,0.7)]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  className="text-white"
                >
                  <path
                    fill="currentColor"
                    d="M17.507 14.307l.009.075c-1.836-1.093-2.066-1.241-2.342-0.805-0.132 0.208-0.518 0.829-0.632 0.997-0.128 0.188-0.256 0.212-0.468 0.072-0.223-0.143-1.41-0.6-2.657-1.834-0.977-0.861-1.626-1.926-1.808-2.258-0.193-0.352-0.018-0.51 0.134-0.678 0.149-0.168 0.33-0.438 0.495-0.658 0.165-0.22 0.221-0.376 0.33-0.627 0.109-0.251 0.057-0.473-0.025-0.658-0.083-0.185-0.758-1.824-1.039-2.496-0.285-0.665-0.552-0.549-0.756-0.55-0.198-0.006-0.419-0.006-0.636-0.006-0.223 0-0.586 0.089-0.894 0.426-0.302 0.33-1.159 1.15-1.159 2.82 0 1.67 1.191 3.29 1.368 3.515 0.16 0.22 2.251 3.493 5.508 4.89 0.784 0.343 1.392 0.545 1.854 0.697 0.781 0.255 1.489 0.218 2.05 0.133 0.626-0.094 1.932-0.81 2.202-1.588 0.271-0.778 0.27-1.438 0.181-1.576-0.09-0.138-0.321-0.217-0.67-0.371z"
                  />
                  <path
                    fill="currentColor"
                    d="M12.002 0h-0.005C5.373 0 0 5.373 0 12c0 2.249 0.625 4.342 1.709 6.155l-1.121 4.524 4.649-1.189c1.748 0.952 3.746 1.504 5.865 1.504 6.627 0 11.998-5.373 11.998-12 0.001-6.627-5.371-11.994-11.998-11.994zM12.002 21.844c-2.152 0-4.196-0.588-5.987-1.689l-0.425-0.257-4.416 1.125 1.159-4.191-0.276-0.445c-1.182-1.894-1.809-4.124-1.809-6.387 0-5.515 4.485-10 10.002-10s9.997 4.485 9.997 10-4.48 10-9.997 10z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Navbar2;