"use client";

import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CompoundingMemorySection from "../components/CompoundingMemorySection";
import SystemLearningSection from "../components/SystemLearningSection";

export default function HowItWorksPage() {
  return (
    <div
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
        <CompoundingMemorySection />
        <SystemLearningSection />
      </main>
      <Footer />
    </div>
  );
}
