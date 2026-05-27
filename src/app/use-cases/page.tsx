"use client";

import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ICPSections from "../components/ICPSections";
import ICPInteractiveWorkflow from "../components/ICPInteractiveWorkflow";

export default function ICPPage() {
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
        <ICPSections />
        <ICPInteractiveWorkflow />
      </main>
      <Footer />
    </div>
  );
}
