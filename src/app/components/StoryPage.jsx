"use client";
import React from "react";
import Image from "next/image";

const StoryPage = () => {
  const handleClick = () => {
    window.open("https://www.fiverr.com/rednsay", "_blank");
  };
  return (
    <div className="bg-white min-h-screen px-4 sm:px-8 md:px-16 py-16">
      <h1 className="text-black font-bold uppercase text-2xl sm:text-3xl md:text-4xl text-center">
        Our Recent Story with Didit
      </h1>

      <div className="mt-12 grid grid-cols-1 ml-26 gap-16">
        {/* Left Section */}
        <div>
          <h1 className="font-bold text-2xl sm:text-3xl">Didit</h1>
          <p className="text-gray-600 mt-2 leading-relaxed">
            Digital ID <br /> Verification <br /> Platform
          </p>
        </div>

        {/* Right Section */}
        <div className="flex flex-col ml-32 -mt-46">
          <h1 className="font-bold text-2xl sm:text-3xl">2M+</h1>
          <p className="text-gray-600 mt-2 leading-relaxed">
            Raised in <br /> seed funding
          </p>
        </div>
      </div>

      {/* Overview section */}
      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-start gap-8">
        {/* Content section */}
        <div className="w-full md:w-1/2">
          <h1 className="text-2xl lg:text-3xl font-bold mb-4">Overview</h1>
          <p className="text-black leading-relaxed mb-6">
            Didit operates in the digital identity and financial technology
            (fintech) industries based in Spain, Barcelona.
          </p>

          <div className="space-y-4 text-black mb-6">
            <p className="flex items-center">
              <svg
                className="w-6 h-6 text-green-500 mr-2 flex-shrink-0"
                viewBox="0 0 20 12"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M13.3333 0.166687C13.3333 0.78502 13.9442 1.70835 14.5625 2.48335C15.3575 3.48335 16.3075 4.35585 17.3967 5.02169C18.2133 5.52085 19.2033 6.00002 20 6.00002M20 6.00002C19.2033 6.00002 18.2125 6.47919 17.3967 6.97835C16.3075 7.64502 15.3575 8.51752 14.5625 9.51585C13.9442 10.2917 13.3333 11.2167 13.3333 11.8334M20 6.00002H0"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
              <span>
                Over <span className="font-bold">2M</span> raised in seed
                funding
              </span>
            </p>

            <p className="flex items-center">
              <svg
                className="w-6 h-6 text-green-500 mr-2 flex-shrink-0"
                viewBox="0 0 20 12"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M13.3333 0.166687C13.3333 0.78502 13.9442 1.70835 14.5625 2.48335C15.3575 3.48335 16.3075 4.35585 17.3967 5.02169C18.2133 5.52085 19.2033 6.00002 20 6.00002M20 6.00002C19.2033 6.00002 18.2125 6.47919 17.3967 6.97835C16.3075 7.64502 15.3575 8.51752 14.5625 9.51585C13.9442 10.2917 13.3333 11.2167 13.3333 11.8334M20 6.00002H0"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
              <span>72% growth in brand leads</span>
            </p>

            <p className="flex items-start">
              <svg
                className="w-6 h-6 text-green-500 mr-2 flex-shrink-0 mt-1"
                viewBox="0 0 20 12"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M13.3333 0.166687C13.3333 0.78502 13.9442 1.70835 14.5625 2.48335C15.3575 3.48335 16.3075 4.35585 17.3967 5.02169C18.2133 5.52085 19.2033 6.00002 20 6.00002M20 6.00002C19.2033 6.00002 18.2125 6.47919 17.3967 6.97835C16.3075 7.64502 15.3575 8.51752 14.5625 9.51585C13.9442 10.2917 13.3333 11.2167 13.3333 11.8334M20 6.00002H0"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
              <span>
                We contributed to redesigning the{" "}
                <span
                  className="text-blue-700 underline cursor-pointer"
                  onClick={handleClick}
                >
                  didite.me
                </span>{" "}
                website to create an impactful user interface.
              </span>
            </p>
          </div>

          <button
            onClick={handleClick}
            type="button"
            className="text-white bg-black hover:bg-gray-800 transition-colors cursor-pointer 
              font-medium rounded-lg text-sm md:text-md px-6 md:px-10 py-2.5 text-center inline-flex items-center"
          >
            Browse the Website
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </button>
        </div>

        {/* Image section */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0 relative">
          <div className="relative h-64 sm:h-80 md:h-96 w-full">
            <Image
              src="/assets/tech.webp"
              alt="tech"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>


      
    </div>
  );
};

export default StoryPage;
