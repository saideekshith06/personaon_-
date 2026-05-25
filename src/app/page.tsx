"use client";

import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeatureShowcase from "./components/FeatureShowcase";
import WhyNowSection from "./components/WhyNowSection";
import ICPSections from "./components/ICPSections";
import ICPInteractiveWorkflow from "./components/ICPInteractiveWorkflow";
import RelationshipIntelligenceSection from "./components/RelationshipIntelligenceSection";
import WhatPersonaOnUnderstands from "./components/WhatPersonaOnUnderstands";
import CompoundingMemorySection from "./components/CompoundingMemorySection";
import WhoItsForSection from "./components/WhoItsForSection";
import SystemLearningSection from "./components/SystemLearningSection";
import TrustSection from "./components/TrustSection";
import TeamsSection from "./components/TeamsSection";
import PricingSection from "./components/PricingSection";
import FAQSection from "./components/FAQSection";
import RealVoiceSection from "./components/RealVoiceSection";
import HabitMoatSection from "./components/HabitMoatSection";
import BlogSection from "./components/BlogSection";
import ReachableSection from "./components/ReachableSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div
      id="personaon-app-root"
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        position: "relative",
        background: "var(--bg-light)",
      }}
    >
      <Navbar />

      <main style={{ flexGrow: 1 }}>
        <Hero />
        <FeatureShowcase />
        <WhyNowSection />
        <ICPSections />
        <ICPInteractiveWorkflow />
        <RelationshipIntelligenceSection />
        <WhatPersonaOnUnderstands />
        <CompoundingMemorySection />
        <WhoItsForSection />
        <SystemLearningSection />
        <TrustSection />
        <TeamsSection />
        <PricingSection />
        <FAQSection />
        <RealVoiceSection />
        <HabitMoatSection />
        <BlogSection />
        <ReachableSection />
      </main>

      <Footer />
    </div>
  );
}

