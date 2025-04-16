// TestimonialsSection.jsx
"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Dominik",
    username: "@domsyp",
    country: "DE",
    avatar: "/avatars/dominik.jpg",
    content:
      "I love working with Saymon, he is a great developer. He does very precise work and his delivery time is always super fast!",
    size: "small", // small card
  },
  {
    id: 2,
    name: "Henry Mouzon",
    username: "@henrymouzon",
    country: "US",
    avatar: "/avatars/henry.jpg",
    content:
      "It was a pleasure working with Redwan. I really loved the job he did for me, not only for the artistic ingenuity he displayed but also for the communication and friendliness he established. He delivered a bouncing and awesome work. It was a great experience I won't forget, and I will patronize him again and again in the near future. Thank you very much Redwan and cheers",
    size: "large", // large card
  },
  {
    id: 3,
    name: "Dayem Saeed",
    username: "@dayemsaeed808",
    country: "PK",
    avatar: "/avatars/dayem.jpg",
    content:
      "Saymon was one of the best developers I've had the pleasure of working with. He completed the project even earlier than expected and exactly as I wanted it! I'll definitely be working with him again and would recommend him to anyone in need of a professional developer for their website",
    size: "medium", // medium card
  },
  {
    id: 4,
    name: "Charles Benford",
    username: "@charles_benford",
    country: "CA",
    avatar: "/avatars/charles.jpg",
    content:
      "This is the first time I've worked with Redwan, and he continues to be a very kind and pleasant person. He has done an amazing job on my web development project. I would highly recommend hiring him for any front-end related work. Thank you again!",
    size: "medium", // medium card
  },
  {
    id: 5,
    name: "Ricardo C",
    username: "@filipecruz76",
    country: "PT",
    avatar: "/avatars/ricardo.jpg",
    content:
      "Saymon has been absolutely amazing with the order I placed. It was a PoC for a side project of mine and not a typical requirement. His professionalism and technical skills are top-notch.",
    size: "small", // small card
  },
  {
    id: 6,
    name: "Hakan",
    username: "@arichday",
    country: "NL",
    avatar: "/avatars/hakan.jpg",
    content:
      "Saymon is a very talented developer and puts a lot of energy into the project before the project starts. I am very satisfied with our collaboration, a real blessing to know Saymon.",
    size: "large", // large card
  },
  {
    id: 7,
    name: "Maria Sanchez",
    username: "@mariasanchez",
    country: "ES",
    avatar: "/avatars/maria.jpg",
    content:
      "Working with Redwan was an absolute pleasure. The website he created for my small business exceeded all my expectations. His attention to detail and creativity truly stand out.",
    size: "small", // small card
  },
  {
    id: 8,
    name: "Akira Tanaka",
    username: "@akiratanaka",
    country: "JP",
    avatar: "/avatars/akira.jpg",
    content:
      "I was very impressed with Saymon's quick response time and the quality of work. He takes the time to understand what the client wants and delivers exactly that. I've already recommended him to colleagues.",
    size: "medium", // medium card
  },
  {
    id: 9,
    name: "Sophie Laurent",
    username: "@sophielaurent",
    country: "FR",
    avatar: "/avatars/sophie.jpg",
    content:
      "Redwan is exceptionally talented at what he does. He was able to revamp our entire website in record time while maintaining the highest quality standards. The user experience has improved dramatically.",
    size: "large", // large card
  },
  {
    id: 10,
    name: "Omar Al-Farsi",
    username: "@omarfarsi",
    country: "AE",
    avatar: "/avatars/omar.jpg",
    content:
      "Saymon delivered an excellent e-commerce solution for my business. The site performs incredibly well and the design is beautiful. He was a pleasure to work with throughout the entire process.",
    size: "medium", // medium card
  },
];

const countryFlags = {
  US: "US",
  DE: "🇩🇪",
  PK: "🇵🇰",
  CA: "🇨🇦",
  PT: "🇵🇹",
  NL: "🇳🇱",
  ES: "🇪🇸",
  JP: "🇯🇵",
  FR: "🇫🇷",
  AE: "🇦🇪",
};

export default function TestimonialsSection() {
  const [hoveredId, setHoveredId] = useState(null);

  // Function to determine grid classes based on card size
  const getCardClasses = (size) => {
    switch (size) {
      case "small":
        return "col-span-1 row-span-1";
      case "medium":
        return "col-span-1 row-span-2";
      case "large":
        return "col-span-1 md:col-span-2 row-span-2";
      default:
        return "col-span-1 row-span-1";
    }
  };


  const router = useRouter();

 

  return (
    <div className="bg-black text-white py-16" id="review">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div className="mb-6 md:mb-0">
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="text-white">OVER 200+ POSITIVE TALKS,</span>
              <br />
              <span className="text-emerald-400">
                SEE WHAT OUR CLIENTS SAY!
              </span>
            </h2>
          </div>
          <div className="flex items-center">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full overflow-hidden border-2 border-gray-800"
                >
                  <div className="w-full h-full bg-gray-400 rounded-full"></div>
                </div>
              ))}
            </div>
            <a
              href="#"
              onClick={() =>
                window.open('https://www.fiverr.com/redwan_ahmed', '_blank', 'width=800,height=600')
              }
              className="ml-4 text-gray-400 hover:text-white flex items-center"
            >
              See all 200+ reviews
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-min">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className={`bg-gray-900 p-6 rounded-lg transition-all duration-300 ${getCardClasses(
                testimonial.size
              )} ${
                hoveredId !== null && hoveredId !== testimonial.id
                  ? "opacity-50 blur-sm"
                  : "hover:shadow-xl hover:shadow-emerald-900/20"
              }`}
              onMouseEnter={() => setHoveredId(testimonial.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-teal-500 flex items-center justify-center text-xl font-bold text-white">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="ml-3">
                  <div className="flex items-center">
                    <h3 className="font-semibold text-lg">
                      {testimonial.name}
                    </h3>
                    <span className="ml-2">
                    <span className="ml-2">{countryFlags[testimonial.country]}</span>
                    </span>
                  </div>
                  <p className="text-gray-400">{testimonial.username}</p>
                </div>
                <div className="ml-auto">
                  <img
                    src="/assets/fiverr.svg"
                    alt="Fiverr"
                    className="h-5"
                  />
                </div>
              </div>
              <p className="text-gray-300">{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
