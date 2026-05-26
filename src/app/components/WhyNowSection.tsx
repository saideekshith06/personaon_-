"use client";

import React from "react";

export default function WhyNowSection() {
  const fragments = [
    { label: "Meetings", status: "Lost context", icon: "💬" },
    { label: "Slack / Teams", status: "Noise & sprawl", icon: "⚡" },
    { label: "Email threads", status: "Siloed answers", icon: "✉️" },
    { label: "Google Docs", status: "Forgotten action items", icon: "📄" },
    { label: "CRM systems", status: "Stale data", icon: "🗄️" },
    { label: "Follow-ups", status: "Dropped balls", icon: "🔄" },
  ];

  return (
    <section 
      id="why-now" 
      className="section-gray section-padding bg-dot-light" 
      style={{ 
        position: "relative",
        overflow: "hidden",
        background: "var(--bg-gray)", 
        padding: "100px 0",
        borderTop: "1px solid var(--border-light)"
      }}
    >
      {/* Ambient drifting blooms */}
      <div className="ambient-glow ambient-coral animate-drift-2" style={{ top: "10%", right: "5%", width: "450px", height: "450px" }} />
      <div className="ambient-glow ambient-blue animate-drift-1" style={{ bottom: "10%", left: "5%", width: "450px", height: "450px" }} />
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "60px", alignItems: "center" }}>
          {/* Left Column: Narrative Copy */}
          <div>
            <div style={{ 
              fontSize: "0.8rem", 
              textTransform: "uppercase", 
              letterSpacing: "0.2em", 
              color: "var(--text-dark-muted)", 
              fontWeight: 600, 
              marginBottom: "16px" 
            }}>
              WHY THIS MATTERS NOW
            </div>
            <h2 style={{ 
              fontSize: "clamp(2.2rem, 4vw, 3.2rem)", 
              fontWeight: 800, 
              letterSpacing: "-0.04em", 
              color: "var(--text-dark)",
              lineHeight: 1.1,
              marginBottom: "24px"
            }}>
              Modern work is fragmented.<br />
              <span style={{ fontWeight: 400, fontFamily: "'Outfit', sans-serif" }}>Memory shouldn't be.</span>
            </h2>
            <p style={{ 
              color: "var(--text-dark-muted)", 
              fontSize: "1.15rem", 
              lineHeight: "1.7", 
              marginBottom: "20px",
              fontWeight: 400 
            }}>
              You had a critical alignment call on Tuesday. By Friday, key context has evaporated. Decisions are buried in a single Slack thread; commitments are scattered across forgotten Google Docs, email chains, and incomplete CRM updates.
            </p>
            <p style={{ 
              color: "var(--text-dark-muted)", 
              fontSize: "1.15rem", 
              lineHeight: "1.7",
              marginBottom: "32px",
              fontWeight: 400 
            }}>
              Increasingly, teams lose continuity between conversations and relationships. We don't need another transcription bot feeding us endless blocks of text. We need an intelligence layer that builds persistent, cumulative memory over time.
            </p>
            <div style={{ 
              borderLeft: "3px solid var(--primary)", 
              paddingLeft: "20px", 
              marginTop: "24px" 
            }}>
              <p style={{ 
                fontStyle: "italic", 
                fontSize: "1.2rem", 
                color: "var(--text-dark)", 
                fontWeight: 500,
                lineHeight: "1.6" 
              }}>
                "PersonaOn is the operational memory layer that keeps your relationships and workflows aligned across time."
              </p>
            </div>
          </div>

          {/* Right Column: Fragmentation Grid */}
          <div className="responsive-grid-2" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "20px" }}>
            {fragments.map((item, idx) => (
              <div 
                key={idx}
                className="card-light"
                style={{
                  background: "#ffffff",
                  border: "1px solid rgba(0, 0, 0, 0.06)",
                  borderRadius: "16px",
                  padding: "24px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  minHeight: "140px",
                  position: "relative",
                  overflow: "hidden",
                  transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)"
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
                  <span style={{ fontSize: "1.8rem" }}>{item.icon}</span>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    <span style={{
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      backgroundColor: "#ff3b30",
                      display: "inline-block",
                      animation: "pulse 2s infinite"
                    }} />
                    <span style={{ fontSize: "0.7rem", textTransform: "uppercase", color: "#ff3b30", fontWeight: 600, letterSpacing: "0.05em" }}>
                      Siloed
                    </span>
                  </div>
                </div>
                <div>
                  <h4 style={{ fontSize: "1.1rem", fontWeight: 600, color: "var(--text-dark)", marginBottom: "4px" }}>
                    {item.label}
                  </h4>
                  <p style={{ fontSize: "0.85rem", color: "var(--text-dark-muted)", lineHeight: "1.3" }}>
                    {item.status}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Dynamic Keyframes inline style */}
      <style jsx>{`
        @keyframes pulse {
          0% { transform: scale(0.9); opacity: 0.6; }
          50% { transform: scale(1.2); opacity: 1; }
          100% { transform: scale(0.9); opacity: 0.6; }
        }
      `}</style>
    </section>
  );
}
