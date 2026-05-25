"use client";

import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeatureShowcase from "./components/FeatureShowcase";
import ICPSections from "./components/ICPSections";
import ICPInteractiveWorkflow from "./components/ICPInteractiveWorkflow";
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
        <ICPSections />
        <ICPInteractiveWorkflow />
        <RealVoiceSection />
        <HabitMoatSection />
        <BlogSection />
        <ReachableSection />
      </main>

      <Footer />
    </div>
  );
}
