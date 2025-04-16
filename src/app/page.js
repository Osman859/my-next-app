'use client';
import React from "react";
import Navbar from "./components/Navbar";
import Navbar2 from "./components/Navbar2";
import LogoMarquee from "./components/LogoMarquee";
import StoryPage from "./components/StoryPage";
import LogoMarque2 from "./components/LogoMarque2";
import Stories from "./components/Stories";
import Review from "./components/Review";
import ChooseUs from "./components/ChooseUs";
import EnterprisePage from "./components/EnterprisePage";
import ProvenEx from "./components/ProvenEx";
import FAQItem from "./components/FAQItem";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";




export default function Home() {
 
  return (
   <main>
    <Navbar/>
    <Navbar2/>
    <LogoMarquee/>
   <StoryPage/>
   <LogoMarque2/>
   <Stories/>
   <Review/>
   <ChooseUs/>
   <EnterprisePage/>
   <ProvenEx/>
   <FAQItem/>
   <CTASection/>
   <Footer/>
   
   </main>
  );
}
