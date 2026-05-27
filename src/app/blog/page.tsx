"use client";

import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BlogSection from "../components/BlogSection";

export default function BlogPage() {
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
        <BlogSection />
      </main>
      <Footer />
    </div>
  );
}
