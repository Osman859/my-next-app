// components/LogoMarquee.jsx
'use client';
import React from 'react';

const LogoMarquee = () => {
  // Custom SVG logos for the requested brands
  const logos = [
    // First logo from your original code
    <svg key="original" viewBox="0 0 100 39" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-10 w-32">
      <path d="M0 38.1545V1.03909H13.1693C16.6841 0.914976 20.1635 1.77665 23.2142 3.52666C25.8336 5.11852 27.9285 7.44389 29.2393 10.2147C30.607 13.1328 31.2956 16.3228 31.2535 19.5452C31.336 22.9548 30.5731 26.3319 29.0328 29.3749C27.6105 32.1042 25.4201 34.3574 22.7321 35.8563C19.7961 37.4425 16.4968 38.2347 13.1607 38.1545H0ZM25.2971 19.5452C25.3428 17.1709 24.8515 14.8169 23.8597 12.6592C22.9657 10.7266 21.5344 9.09219 19.7367 7.95092C17.7578 6.7595 15.4782 6.16195 13.1693 6.22942H5.85298V32.99H13.1693C15.5024 33.0662 17.8058 32.4492 19.7884 31.2169C21.5801 30.031 23.0004 28.3631 23.8856 26.4054C24.8583 24.2514 25.3403 21.9082 25.2971 19.5452Z" fill="white"></path>
      <path d="M39.7829 0H34.0332V5.74979H39.7829V0Z" fill="white"></path>
      <path d="M39.7829 10.8203H34.0332V38.1577H39.7829V10.8203Z" fill="white"></path>
      <path d="M42.3392 24.6432C42.3068 22.1941 42.8555 19.7724 43.9402 17.5765C44.9297 15.5338 46.4337 13.7836 48.3042 12.498C50.186 11.2292 52.413 10.571 54.6822 10.613C56.6901 10.5896 58.6613 11.1519 60.3546 12.2312C61.9705 13.2411 63.322 14.6221 64.2968 16.2595V0H70.0465V31.6755C69.9971 32.1752 70.1285 32.6759 70.4166 33.0871C70.574 33.2424 70.761 33.3644 70.9666 33.4458C71.1721 33.5271 71.392 33.5661 71.6131 33.5605V38.1569C70.7864 38.3111 69.9489 38.4004 69.1083 38.4237C68.1085 38.4516 67.1327 38.1151 66.3626 37.4769C66.0131 37.212 65.7263 36.8734 65.5225 36.4851C65.3187 36.0968 65.2029 35.6685 65.1833 35.2304L65.1317 33.1904C64.1218 34.9072 62.656 36.3105 60.8969 37.2445C59.2018 38.1803 57.2985 38.6746 55.3623 38.6819C53.5684 38.7013 51.7917 38.3313 50.1547 37.5975C48.581 36.8799 47.1762 35.8387 46.0319 34.5418C44.8566 33.2176 43.9346 31.6888 43.3119 30.0314C42.659 28.3105 42.3292 26.4838 42.3392 24.6432ZM64.2968 28.4132V21.3465C63.9048 20.2356 63.2729 19.2247 62.4461 18.3856C61.6153 17.5282 60.6427 16.8206 59.5713 16.2939C58.5865 15.8037 57.5037 15.5418 56.4037 15.5279C55.2509 15.5137 54.1115 15.7764 53.0813 16.2939C52.0899 16.8011 51.2115 17.5038 50.4991 18.3597C49.7787 19.2325 49.2192 20.2264 48.8465 21.2949C48.4674 22.4031 48.2754 23.5666 48.2784 24.7379C48.2681 25.9289 48.4812 27.1114 48.9067 28.2239C49.3154 29.2918 49.9261 30.2708 50.7056 31.1074C51.4707 31.9361 52.3961 32.6008 53.4256 33.0613C54.4871 33.5335 55.638 33.7713 56.7997 33.7585C57.5923 33.7539 58.3781 33.6142 59.1237 33.3454C59.9163 33.0638 60.6709 32.6851 61.3702 32.2178C62.0696 31.7459 62.6886 31.1646 63.2036 30.4963C63.6949 29.8776 64.0631 29.1705 64.2881 28.4132H64.2968Z" fill="white"></path>
      <path d="M80.5058 10.8203H74.7559V38.1577H80.5058V10.8203Z" fill="white"></path>
      <path d="M99.9999 36.8545C99.5092 37.0955 98.9067 37.3537 98.1751 37.6378C97.3621 37.9337 96.5313 38.1781 95.6875 38.3694C94.7522 38.5773 93.7967 38.6812 92.8385 38.6792C91.7097 38.6909 90.5894 38.4803 89.5418 38.0595C88.5486 37.6518 87.7024 36.9525 87.1146 36.054C86.4642 34.9827 86.1466 33.7425 86.2022 32.4905V15.4735H82.5957V11.0235H86.2022V0.238281H91.952V11.0235H97.9083V15.4735H91.952V30.6485C91.953 31.0385 92.0346 31.424 92.1916 31.7809C92.3486 32.1379 92.5776 32.4586 92.8643 32.7229C93.4311 33.1861 94.1469 33.4277 94.8785 33.4029C95.6642 33.407 96.4436 33.2639 97.1766 32.9811C97.7281 32.7844 98.2683 32.5574 98.7948 32.3011L99.9999 36.8545Z" fill="white"></path>
    </svg>,
    
    // Goodigoo - Creative abstract logo
    <svg key="goodigoo" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-10 w-32">
      <path d="M12 20C12 13.373 17.373 8 24 8C30.627 8 36 13.373 36 20C36 26.627 30.627 32 24 32C17.373 32 12 26.627 12 20Z" fill="white"/>
      <path d="M36 20C36 13.373 41.373 8 48 8C54.627 8 60 13.373 60 20C60 26.627 54.627 32 48 32C41.373 32 36 26.627 36 20Z" fill="white"/>
      <path d="M60 20C60 13.373 65.373 8 72 8C78.627 8 84 13.373 84 20C84 26.627 78.627 32 72 32C65.373 32 60 26.627 60 20Z" fill="white"/>
      <path d="M84 20C84 13.373 89.373 8 96 8C102.627 8 108 13.373 108 20C108 26.627 102.627 32 96 32C89.373 32 84 26.627 84 20Z" fill="white"/>
    </svg>,
    
    // Influix - Wave-like fluid logo
    <svg key="influix" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-10 w-32">
      <path d="M10 25C14 21 16 27 20 25C24 23 26 17 30 15C34 13 36 19 40 17C44 15 46 9 50 7C54 5 56 11 60 9C64 7 66 1 70 3C74 5 76 11 80 9C84 7 86 13 90 11C94 9 96 15 100 13C104 11 106 17 110 15" stroke="white" strokeWidth="3" strokeLinecap="round"/>
    </svg>,
    
    // Soleolico - Sun and wind energy inspired logo
    <svg key="soleolico" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-10 w-32">
      <circle cx="40" cy="20" r="12" fill="white"/>
      <path d="M40 4V8M40 32V36M24 20H28M52 20H56M28 8L30 10M50 30L52 32M28 32L30 30M50 10L52 8" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      <path d="M76 14C76 14 82 16 86 20C90 24 90 30 90 30" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      <path d="M76 26C76 26 82 24 86 20C90 16 90 10 90 10" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      <path d="M70 20H92" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    </svg>,
    
    // Seher - Elegant geometric logo
    <svg key="seher" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-10 w-32">
      <path d="M15 28C15 28 23 16 30 16C37 16 40 28 50 28C60 28 65 16 70 16C75 16 85 28 85 28" stroke="white" strokeWidth="3" strokeLinecap="round"/>
      <path d="M50 28V12" stroke="white" strokeWidth="3" strokeLinecap="round"/>
      <path d="M40 12H60" stroke="white" strokeWidth="3" strokeLinecap="round"/>
      <circle cx="50" cy="12" r="4" fill="white"/>
    </svg>,
    
    // Diddit - Checkmark/completion inspired logo
    <svg key="diddit" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-10 w-32">
      <rect x="20" y="10" width="20" height="20" rx="2" stroke="white" strokeWidth="2"/>
      <path d="M25 20L30 25L35 15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <rect x="50" y="10" width="20" height="20" rx="2" stroke="white" strokeWidth="2"/>
      <path d="M55 20L60 25L65 15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <rect x="80" y="10" width="20" height="20" rx="2" stroke="white" strokeWidth="2"/>
      <path d="M85 20L90 25L95 15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ];

  return (
    <div className="w-full bg-black py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-gray-300 text-center text-2xl mb-10">TRUSTED BY ENTERPRISES WORLDWIDE</h2>
        
        <div className="relative overflow-hidden">
          {/* The marquee container */}
          <div className="w-full overflow-hidden cursor-pointer" onClick={() => window.open('https://www.fiverr.com', '_blank')}>
            {/* Use Tailwind's animation utilities with custom keyframes */}
            <div className="flex whitespace-nowrap animate-marquee">
              {/* First set of logos */}
              <div className="flex items-center gap-16 mx-8">
                {logos.map((logo, index) => (
                  <div key={`first-${index}`} className="w-32 h-10 flex items-center justify-center">
                    {logo}
                  </div>
                ))}
              </div>
              
              {/* Duplicate set for continuous scrolling */}
              <div className="flex items-center gap-16 mx-8">
                {logos.map((logo, index) => (
                  <div key={`second-${index}`} className="w-32 h-10 flex items-center justify-center">
                    {logo}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom keyframes and animation for Tailwind */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        
        /* Optional: Pause on hover */
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default LogoMarquee;