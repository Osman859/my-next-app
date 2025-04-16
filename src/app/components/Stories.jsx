// components/PortfolioShowcase.jsx
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Stories = () => {
  const projects = [
    {
      id: "didit",
      name: "Didit",
      growth: "72% growth in brand leads",
      image: "/assets/didit.webp",
      link: "/projects/didit",
    },
    {
      id: "influix",
      name: "Influix",
      growth: "$1M+ raised in funding",
      image: "/assets/influix.webp",
      link: "/projects/influix",
      hasWhatsapp: true,
    },
    {
      id: "goodigoo",
      name: "Goodigoo",
      growth: "80% growth in teaching leads",
      image: "/assets/goodigoo.webp",
      link: "/projects/goodigoo",
    },
    {
      id: "digital-gregg",
      name: "Digital Gregg",
      growth: "60% growth in software development",
      image: "/assets/digitalgreg.webp",
      link: "/projects/digitalgreg",
      
    },
  ];

  return (
    <div className=" bg-white max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8" id="stories">
      {/* Header Section */}
      <div className="text-center mb-16 bg-white">
        <h1 className="text-5xl font-black tracking-tight text-black sm:text-6xl">
          DISCOVER THE SUCCESS STORIES OF
          <br />
          OUR <span className="text-emerald-500">TOP PROJECTS</span>
        </h1>
        <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
          Explore our thoughtfully curated portfolio, highlighting a wide
          variety of industries.
        </p>
      </div>

      {/* Project Cards Grid */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.id}
            className="rounded-lg bg-gray-900 overflow-hidden"
          >
            {/* Project Screenshot */}
            <div className="p-4 bg-gray-900 rounded-lg overflow-hidden">
              <div className="relative h-72 w-full mb-3 rounded-lg overflow-hidden">
                <Image
                  src={project.image}
                  alt={`${project.name} website`}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Project Info */}
            <div className="px-8 pb-8 pt-2 flex justify-between items-center">
              <div>
                <h2 className="text-5xl font-bold text-white">
                  {project.name}
                </h2>
                <p className="mt-2 text-xl text-gray-400">{project.growth}</p>
              </div>
              <div className="relative">
                <Link
                  href={project.link}
                  className="bg-white hover:bg-gray-100 text-black py-3 px-6 rounded-md inline-flex items-center"
                >
                  Overview
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>

               
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stories;
