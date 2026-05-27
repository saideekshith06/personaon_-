"use client";

import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FAQSection from "../components/FAQSection";

export default function FAQPage() {
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
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}
