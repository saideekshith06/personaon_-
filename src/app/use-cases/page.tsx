"use client";

import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import UseCasesSections from "../components/UseCasesSections";
import UseCasesInteractiveWorkflow from "../components/UseCasesInteractiveWorkflow";

export default function UseCasesPage() {
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
        <UseCasesSections />
        <UseCasesInteractiveWorkflow />
      </main>
      <Footer />
    </div>
  );
}
