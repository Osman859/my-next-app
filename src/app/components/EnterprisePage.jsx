import React from "react";

export default function EnterprisePage() {
  return (
    <div className="bg-gray-900 text-white min-h-screen" id="services">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Personalized Strategies To
            <br />
            Drive Your Business{" "}
            <span className="relative">
              Forward.
              <span className="absolute h-1 bg-emerald-500 w-full bottom-2 left-0"></span>
            </span>
          </h1>
          <p className="text-xl text-gray-400 mb-16">
            From landing page design to enterprise-level web-apps
          </p>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="px-4 pb-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: Enterprise React Development */}
          <div className="bg-gray-800 rounded-lg p-6 flex flex-col md:flex-row gap-6">
            <div className="md:w-1/2">
              <h2 className="text-4xl font-bold mb-6 ">
                Enterprise React Development
              </h2>

              {/* Services List */}
              <div className="space-y-5 mb-8">
                <div className="flex items-center">
                  <span className="text-emerald-500 mr-3">→</span>
                  <span className="text-lg">Growth-Oriented Strategies</span>
                  <div className="ml-auto">
                    <div className="bg-blue-500 rounded-full w-10 h-10 flex items-center justify-center">
                      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" className="text-white">
                        <circle cx="12" cy="12" r="10" />
                        <circle cx="12" cy="12" r="4" />
                        <line x1="12" y1="2" x2="12" y2="4" />
                        <line x1="12" y1="20" x2="12" y2="22" />
                        <line x1="4" y1="12" x2="2" y2="12" />
                        <line x1="22" y1="12" x2="20" y2="12" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="flex items-center">
                  <span className="text-emerald-500 mr-3">→</span>
                  <span className="text-lg">Streamlined Website Management</span>
                  <div className="ml-auto">
                    <div className="bg-white rounded-full w-10 h-10 flex items-center justify-center">
                      <span className="text-black font-bold">N</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center">
                  <span className="text-emerald-500 mr-3">→</span>
                  <span className="text-lg">Effortless Data Migration Support</span>
                  <div className="ml-auto">
                    <div className="bg-blue-500 rounded-full w-10 h-10 flex items-center justify-center">
                      <span className="text-white font-bold">TS</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center">
                  <span className="text-emerald-500 mr-3">→</span>
                  <span className="text-lg">Tailored API Integration Solutions</span>
                  <div className="ml-auto">
                    <div className="bg-cyan-500 rounded-full w-10 h-10 flex items-center justify-center">
                      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" className="text-white">
                        <path d="M12 2L2 7l10 5 10-5-10-5z" />
                        <path d="M2 17l10 5 10-5" />
                        <path d="M2 12l10 5 10-5" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-gray-400 mb-6">
                Build your enterprise-level React website with unique
                interfaces, multilingual support, and custom animations
              </p>

              <button className="bg-emerald-700 hover:bg-emerald-600 text-white px-6 py-3 rounded-md inline-flex items-center">
                Book a call
                <span className="ml-2">→</span>
              </button>
            </div>
            
            <div className="md:w-1/2 flex items-center justify-center">
              <img
                src="/assets/didit.webp"
                alt="Enterprise React Development"
                className="rounded-lg size-96 -mt-54"
              />
            </div>
          </div>

          {/* Card 2: Custom Dashboard */}
          <div className="bg-gray-800 rounded-lg p-6 flex flex-col md:flex-row gap-6">
            <div className="md:w-1/2">
              <h2 className="text-4xl font-bold mb-6">
                Custom Dashboard
              </h2>
              
              <p className="text-gray-400 mb-8">
                A custom-built dashboard management solution tailored to your
                unique needs, using the latest technologies: React.js, Node.js,
                and MongoDB.
              </p>
              
              <div className="mt-auto">
                <button className="bg-emerald-700 hover:bg-emerald-600 text-white px-6 py-3 rounded-md inline-flex items-center">
                  Book a call
                  <span className="ml-2">→</span>
                </button>
              </div>
            </div>
            
            <div className="md:w-1/2 flex items-center justify-center">
              <img
                src="/assets/digitalgreg.webp"
                alt="Custom Dashboard"
                className="rounded-lg size-96 -mt-46"
              />
            </div>
          </div>

          {/* Card 3: High-Converting Landing Page */}
          <div className="bg-gray-800 rounded-lg p-6 flex flex-col md:flex-row gap-6">
            <div className="md:w-1/2">
              <h2 className="text-4xl font-bold mb-6">
                High-Converting Landing Page
              </h2>
              
              <div className="flex gap-3 mb-6">
                <span className="bg-gray-700 text-emerald-500 px-3 py-1 rounded-md flex items-center">
                  <svg className="w-5 h-5 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Optimized
                </span>
                
                <span className="bg-gray-700 text-emerald-500 px-3 py-1 rounded-md flex items-center">
                  <svg className="w-5 h-5 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  SEO friendly
                </span>
               
              </div>
              
              <p className="text-gray-400 mb-6">
                Get unique user interfaces, engaging content, mobile-friendly design, a strong
                branding strategy, and eye-catching animations—all crafted to elevate your
                digital presence
              </p>
              
              <button className="bg-emerald-700 hover:bg-emerald-600 text-white px-6 py-3 rounded-md inline-flex items-center">
                Book a call
                <span className="ml-2">→</span>
              </button>
            </div>
            
            <div className="md:w-1/2 flex items-center justify-center">
              <img
                src="/assets/solico.jpg"
                alt="Landing Page Example"
                className="rounded-lg -mt-16 size-96"
              />
            </div>
          </div>

          {/* Card 4: Custom SaaS Application */}
          <div className="bg-gray-800 rounded-lg p-6 flex flex-col md:flex-row gap-6">
            <div className="md:w-1/2">
              <h2 className="text-4xl font-bold mb-6">
                Custom SaaS Application
              </h2>
              
              <div className="space-y-5 mb-8">
                <div className="flex items-center">
                  <span className="text-emerald-500 mr-3">→</span>
                  <span className="text-lg">Scalable Solutions</span>
                </div>
                
                <div className="flex items-center">
                  <span className="text-emerald-500 mr-3">→</span>
                  <span className="text-lg">User-Centric Design</span>
                </div>
                
                <div className="flex items-center">
                  <span className="text-emerald-500 mr-3">→</span>
                  <span className="text-lg">Advanced Security Integration</span>
                </div>
                
                <div className="flex items-center">
                  <span className="text-emerald-500 mr-3">→</span>
                  <span className="text-lg">Real-Time Analytics</span>
                </div>
              </div>
              
              <p className="text-gray-400 mb-6">
                Unlock the potential of SaaS platforms with features that transform
                business processes and drive sustainable growth.
              </p>
              
              <button className="bg-emerald-700 hover:bg-emerald-600 text-white px-6 py-3 rounded-md inline-flex items-center">
                Book a call
                <span className="ml-2">→</span>
              </button>
            </div>
            
            <div className="md:w-1/2 flex items-center justify-center">
              <img
                src="/assets/influix1.png"
                alt="SaaS Application Example"
                className="rounded-lg size-96 mb-12"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}