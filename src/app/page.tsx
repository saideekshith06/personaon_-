"use client";

import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeatureShowcase from "./components/FeatureShowcase";
import WhyNowSection from "./components/WhyNowSection";
import TelemetryDashboard from "./components/TelemetryDashboard";
import CompoundingMemorySection from "./components/CompoundingMemorySection";
import SystemLearningSection from "./components/SystemLearningSection";
import RealVoiceSection from "./components/RealVoiceSection";
import HabitMoatSection from "./components/HabitMoatSection";
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
        <TelemetryDashboard />

        {/* How it works — anchored target for the navbar "How it works" link */}
        <div id="how-it-works">
          <CompoundingMemorySection />
          <SystemLearningSection />
        </div>

        <RealVoiceSection />
        <HabitMoatSection />
        <ReachableSection />
      </main>

      <Footer />
    </div>
  );
}
