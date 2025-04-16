import React from "react";
import { GitBranch, Hand, MessageSquare } from "lucide-react";

export default function ChooseUs() {
  return (
    <div className="w-full bg-gray-900 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold mb-16 text-left">
          <span className="text-white">WHY </span>
          <span className="text-emerald-500">CHOOSE </span>
          <span className="text-white">US?</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Feature 1 */}
          <div className="bg-gray-800 rounded-lg p-8 flex flex-col items-center text-center">
            <div className="text-emerald-500 mb-2">[1]</div>
            <h3 className="text-3xl font-bold text-white mb-12">
              Coding Standards
            </h3>
            <div className="h-24 flex items-center justify-center mb-8">
              <GitBranch size={64} className="text-emerald-500" />
            </div>
            <p className="text-gray-300">
              We adhere to best coding practices, staying current with the
              latest <br /> updates to deliver fully optimized,<br /> bug-free code.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-emerald-900 rounded-lg p-8 flex flex-col items-center text-center">
            <div className="text-emerald-500 mb-2">[2]</div>
            <h3 className="text-3xl font-bold text-white mb-12">
              Clear &<br />
              Transparent
            </h3>
            <div className="h-24 flex items-center justify-center mb-8">
              <Hand size={64} className="text-emerald-500" />
            </div>
            <p className="text-gray-300">
              Our React applications are optimized <br /> for speed and performance,<br />
              ensuring fast load times and a <br /> smooth user experience.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-gray-800 rounded-lg p-8 flex flex-col items-center text-center">
            <div className="text-emerald-500 mb-2">[3]</div>
            <h3 className="text-3xl font-bold text-white mb-12">
              Continuous Support
            </h3>
            <div className="h-24 flex items-center justify-center mb-8">
              <div className="relative">
                <MessageSquare size={64} className="text-emerald-500" />
                <div className="absolute -bottom-4 -right-4">
                  <div className="rounded-full bg-gray-800 p-2">
                    <div className="h-8 w-8 flex items-center justify-center text-emerald-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 8v4" />
                        <path d="M12 16h.01" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-gray-300">
              We provide 1 month of free support <br /> after closing the deal,
              ensuring a <br /> smooth transition and ongoing <br /> assistance as needed.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
