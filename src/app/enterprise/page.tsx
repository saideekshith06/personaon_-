"use client";

import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TrustSection from "../components/TrustSection";
import TelemetryDashboard from "../components/TelemetryDashboard";
import TeamsSection from "../components/TeamsSection";

export default function EnterprisePage() {
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
        <TrustSection />
        <TelemetryDashboard />
        <TeamsSection />
      </main>
      <Footer />
    </div>
  );
}
