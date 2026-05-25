"use client";

import React from "react";

export default function WhatPersonaOnUnderstands() {
  const cards = [
    {
      title: "Blockers",
      desc: "What's stopping the deal, the hire, or the decision from moving forward.",
      icon: "🛑"
    },
    {
      title: "Commitments",
      desc: "Who promised what, to whom, and by when—even if spoken in passing.",
      icon: "🤝"
    },
    {
      title: "Priorities",
      desc: "What matters most to each stakeholder in the room right now.",
      icon: "🎯"
    },
    {
      title: "Objections",
      desc: "The recurring friction points, concerns, or pushback you keep hearing.",
      icon: "💡"
    },
    {
      title: "Timelines",
      desc: "Deadlines, launch windows, and schedule shifts spoken aloud but not written.",
      icon: "📅"
    },
    {
      title: "Relationships",
      desc: "Who reports to whom, who has buying authority, and who influences the room.",
      icon: "👥"
    },
    {
      title: "Recurring Patterns",
      desc: "Connecting similar conversations across different accounts and meetings.",
      icon: "🔄"
    },
    {
      title: "Stakeholder Dynamics",
      desc: "Who you need to align, why they care, and what makes them say yes.",
      icon: "⚖️"
    },
    {
      title: "Operational Context",
      desc: "The background history and constraints that make decisions make sense.",
      icon: "📖"
    }
  ];

  return (
    <section 
      id="what-we-understand" 
      className="section-gray section-padding bg-grid-light" 
      style={{ 
        position: "relative",
        overflow: "hidden",
        background: "var(--bg-gray)", 
        padding: "100px 0", 
        borderTop: "1px solid var(--border-light)" 
      }}
    >
      {/* Ambient drifting blooms */}
      <div className="ambient-glow ambient-blue animate-drift-1" style={{ top: "10%", left: "5%", width: "450px", height: "450px" }} />
      <div className="ambient-glow ambient-purple animate-drift-2" style={{ bottom: "10%", right: "5%", width: "450px", height: "450px" }} />
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "70px" }}>
          <div style={{ 
            fontSize: "0.8rem", 
            textTransform: "uppercase", 
            letterSpacing: "0.2em", 
            color: "var(--text-dark-muted)", 
            fontWeight: 600, 
            marginBottom: "16px" 
          }}>
            SYSTEM CAPABILITIES
          </div>
          <h2 style={{ 
            fontSize: "clamp(2.2rem, 4.5vw, 3.5rem)", 
            fontWeight: 800, 
            letterSpacing: "-0.04em", 
            color: "var(--text-dark)",
            lineHeight: 1.1,
            marginBottom: "20px"
          }}>
            What PersonaOn actually understands.
          </h2>
          <p style={{ 
            color: "var(--text-dark-muted)", 
            fontSize: "1.15rem", 
            maxWidth: "680px", 
            margin: "0 auto", 
            lineHeight: "1.6",
            fontWeight: 400 
          }}>
            We designed PersonaOn to track the human nuances of high-stakes work. No raw keyword matching or dry bullet lists—just real operational clarity.
          </p>
        </div>

        {/* 3x3 Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "24px",
          maxWidth: "1100px",
          margin: "0 auto"
        }}>
          {cards.map((card, idx) => (
            <div 
              key={idx}
              className="card-hover-el"
              style={{
                background: "#ffffff",
                border: "1px solid rgba(0, 0, 0, 0.06)",
                borderRadius: "16px",
                padding: "32px",
                transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                position: "relative"
              }}
            >
              <div style={{
                fontSize: "1.8rem",
                width: "48px",
                height: "48px",
                background: "var(--bg-gray)",
                borderRadius: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}>
                {card.icon}
              </div>
              <div>
                <h4 style={{
                  fontSize: "1.2rem",
                  fontWeight: 700,
                  color: "var(--text-dark)",
                  marginBottom: "8px"
                }}>
                  {card.title}
                </h4>
                <p style={{
                  fontSize: "0.95rem",
                  color: "var(--text-dark-muted)",
                  lineHeight: "1.5",
                  fontWeight: 400
                }}>
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      <style jsx>{`
        .card-hover-el:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.04);
          border-color: rgba(30, 80, 255, 0.2) !important;
        }
      `}</style>
    </section>
  );
}
