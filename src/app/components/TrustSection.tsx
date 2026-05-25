"use client";

import React from "react";

export default function TrustSection() {
  const pillars = [
    {
      title: "Private by default",
      desc: "Your memory vault is encrypted end-to-end. Only authenticated members of your workspace can query or retrieve insights.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
          <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
        </svg>
      )
    },
    {
      title: "Selective recall",
      desc: "You retain full control over capture. Choose which meetings are indexed, which calendars sync, and delete any memory at any time.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
          <path d="m9 12 2 2 4-4"></path>
        </svg>
      )
    },
    {
      title: "Workspace boundaries",
      desc: "Memories are siloed at the workspace level. Information never bleeds across different clients, companies, or professional entities.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="7" height="9"></rect>
          <rect x="14" y="3" width="7" height="5"></rect>
          <rect x="14" y="12" width="7" height="9"></rect>
          <rect x="3" y="16" width="7" height="5"></rect>
        </svg>
      )
    },
    {
      title: "Zero shared training",
      desc: "Your conversations, agreements, and profiles belong entirely to you. Your data is never used to train shared foundation models.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
        </svg>
      )
    }
  ];

  return (
    <section id="trust-privacy" className="section-light section-padding" style={{ background: "var(--bg-light)", borderTop: "1px solid var(--border-light)", padding: "100px 0" }}>
      <div className="container">
        
        {/* Title */}
        <div style={{ textAlign: "center", marginBottom: "70px" }}>
          <div style={{ 
            fontSize: "0.8rem", 
            textTransform: "uppercase", 
            letterSpacing: "0.2em", 
            color: "var(--text-dark-muted)", 
            fontWeight: 600, 
            marginBottom: "16px" 
          }}>
            TRUST & SEGREGATION
          </div>
          <h2 style={{ 
            fontSize: "clamp(2.2rem, 4.5vw, 3.5rem)", 
            fontWeight: 800, 
            letterSpacing: "-0.04em", 
            color: "var(--text-dark)",
            lineHeight: 1.1,
            marginBottom: "20px"
          }}>
            Your memory. Your boundaries.
          </h2>
          <p style={{ 
            color: "var(--text-dark-muted)", 
            fontSize: "1.15rem", 
            maxWidth: "680px", 
            margin: "0 auto", 
            lineHeight: "1.6",
            fontWeight: 400 
          }}>
            Operational memory is high-stakes. We built PersonaOn with strict security boundaries, so you can leverage cumulative insights without compromise.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "32px",
          maxWidth: "1100px",
          margin: "0 auto"
        }}>
          {pillars.map((pillar, idx) => (
            <div 
              key={idx}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px"
              }}
            >
              <div style={{
                color: "#1E50FF",
                width: "44px",
                height: "44px",
                background: "rgba(30, 80, 255, 0.06)",
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}>
                {pillar.icon}
              </div>
              
              <div>
                <h3 style={{ fontSize: "1.15rem", fontWeight: 700, color: "var(--text-dark)", marginBottom: "8px" }}>
                  {pillar.title}
                </h3>
                <p style={{ fontSize: "0.92rem", color: "var(--text-dark-muted)", lineHeight: "1.5", fontWeight: 400 }}>
                  {pillar.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
