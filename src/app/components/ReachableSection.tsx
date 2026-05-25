"use client";

import React from "react";

export default function ReachableSection() {
  return (
    <section className="section-padding section-light" style={{ textAlign: "center", borderBottom: "1px solid var(--border-light)" }}>
      <div className="container">
        <h2 style={{ fontSize: "clamp(3rem, 6vw, 5rem)", marginBottom: "8px", fontWeight: 800, letterSpacing: "-0.05em", color: "var(--text-dark)" }}>
          You,
        </h2>
        <h2 style={{ fontSize: "clamp(3rem, 6vw, 5rem)", marginBottom: "32px", fontWeight: 800, letterSpacing: "-0.05em", color: "var(--text-light-muted)" }}>
          made<br/>reachable.
        </h2>
        
        <p style={{ color: "var(--text-dark-muted)", maxWidth: "450px", margin: "0 auto 40px auto", fontSize: "0.95rem", lineHeight: "1.6" }}>
          Unlocking deep customer insights with hyper-realistic AI simulated focus groups and interactive persona twins.
        </p>

        <button className="btn-black" style={{ padding: "14px 28px", fontSize: "1rem", borderRadius: "30px", display: "inline-flex", alignItems: "center", gap: "8px" }}>
          Get started 
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </button>
      </div>
    </section>
  );
}
