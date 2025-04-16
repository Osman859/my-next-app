import React from "react";
import Head from "next/head";
import { Twitter, Linkedin, Github, GitBranch,ChevronDown } from "lucide-react";

import Image from "next/image";

export default function ProvenEx() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Head>
        <title>Saymon & Redwan | Development Experts</title>
        <meta
          name="description"
          content="Developers with proven expertise and exceptional results"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto mt-24 px-32 py-8">
        {/* Stats Section */}
        <section className="mb-16">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-5xl font-bold mb-2">
                <span className="text-white">PROVEN</span>
              </h2>
              <h2 className="text-5xl font-bold mb-2">
                <span className="text-green-800">EXPERTISE</span>
                <span className="text-white"> AND</span>
              </h2>
              <h2 className="text-5xl font-bold mb-6">
                <span className="text-green-800">EXCEPTIONAL</span>
                <br />
                <span className="text-5xl font-bold mb-8">RESULTS</span>
              </h2>

              <p className="text-gray-400 mb-4">
                Over 90% of our clients return to us! <br />
                We ensure the quality of our work and <br /> are committed to your
                satisfaction. <br />
                You're not just a customer; you're our <br /> partner in solving your
                challenges <br /> with tenacity.
              </p>
            </div>

            <div className="md:w-1/2 grid grid-cols-2 gap-4">
              <div className="bg-green-900 p-8 text-center rounded-md">
                <h3 className="text-5xl font-bold">5+</h3>
                <p className="text-gray-300">years in the game</p>
              </div>
              <div className="bg-gray-800 p-8 text-center rounded-md">
                <h3 className="text-5xl font-bold">40+</h3>
                <p className="text-gray-300">projects completed</p>
              </div>
              <div className="bg-gray-800 p-8 text-center rounded-md">
                <h3 className="text-5xl font-bold">$150k+</h3>
                <p className="text-gray-300">in revenue</p>
              </div>
              <div className="bg-green-900 p-8 text-center rounded-md">
                <h3 className="text-5xl font-bold">10+</h3>
                <p className="text-gray-300">technologies</p>
              </div>
            </div>
          </div>
        </section>

        {/* Who We Are Section */}
        <section className="mb-16 text-center" id="about">
          <h2 className="text-6xl font-bold mb-4">
            <span className="text-green-800">WHO</span>
            <span className="text-white"> WE ARE?</span>
          </h2>
          <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
            We are two brothers, Saymon and Redwan, who began our <br /> development
            journey five years ago
          </p>

          <div className="flex flex-col md:flex-row justify-center items-start gap-16">
            <div className="text-center md:w-1/2 lg:w-1/3">
              <div className="mb-6 relative h-64 w-64 mx-auto">
                <Image
                  src="/assets/men1.jpg"
                  alt="Saymon"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <h3 className="text-3xl font-bold mb-2">Saymon</h3>
              <p className="text-gray-300 text-xl mb-4">
                — Fullstack Developer
              </p>
              <p className="text-gray-400 mb-6">
                Saymon, committed to excellence, expertly manages client
                relationships and thoroughly reviews the final codebase,
                ensuring top-tier quality and client satisfaction.
              </p>
              <div className="flex justify-center gap-4">
                <a href="#" className="text-white hover:text-brand-green">
                  <Twitter size={24} />
                </a>
                <a href="#" className="text-white hover:text-brand-green">
                  <Linkedin size={24} />
                </a>
                <a href="#" className="text-white hover:text-brand-green">
                  <GitBranch size={24} />
                </a>
              </div>
            </div>

            <div className="text-center md:w-1/2 lg:w-1/3">
              <div className="mb-6 relative h-64 w-64 mx-auto">
                <Image
                  src="/assets/men2.jpg"
                  alt="Redwan"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <h3 className="text-3xl font-bold mb-2">Redwan</h3>
              <p className="text-gray-300 text-xl mb-4">— Frontend Developer</p>
              <p className="text-gray-400 mb-6">
                Redwan, dedicated to quality, meticulously manages branding and
                communication projects, ensuring every detail is covered and
                inspiring the creative team to deliver their best.
              </p>
              <div className="flex justify-center gap-4">
                <a href="#" className="text-white hover:text-brand-green">
                  <Twitter size={24} />
                </a>
                <a href="#" className="text-white hover:text-brand-green">
                  <Linkedin size={24} />
                </a>
                <a href="#" className="text-white hover:text-brand-green">
                  <Github size={24} />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
