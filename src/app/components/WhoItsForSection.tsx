"use client";

import React, { useState } from "react";

export default function WhoItsForSection() {
  const [selectedRole, setSelectedRole] = useState("founders");

  const roles = {
    founders: {
      label: "Founders",
      useCase: "Aligning product direction across developer synced briefs, customer feedback, and investor updates without losing the source of decisions."
    },
    sales: {
      label: "Sales & Account Managers",
      useCase: "Tracking stakeholder objections, Lever integration requests, and timeline shifts across multiple months of client alignment."
    },
    recruiters: {
      label: "Recruiters",
      useCase: "Synthesizing candidate career desires, scheduling constraints, and team feedback to avoid drop-offs at the technical assessment phase."
    },
    consultants: {
      label: "Consultants & Advisors",
      useCase: "Maintaining absolute separation between highly detailed workspace boundaries while carrying forward prior lessons seamlessly."
    },
    investors: {
      label: "Investors & VCs",
      useCase: "Remembering deep founder backgrounds, product milestones, and co-investor concerns across hundreds of recurring introduction calls."
    },
    executives: {
      label: "Executives",
      useCase: "Anticipating project blockages, carrying forward action items, and aligning leadership decisions across time."
    }
  };

  return (
    <section id="who-its-for" className="section-light section-padding" style={{ background: "var(--bg-light)", borderTop: "1px solid var(--border-light)", padding: "100px 0" }}>
      <div className="container">
        
        {/* Title */}
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <div style={{ 
            fontSize: "0.8rem", 
            textTransform: "uppercase", 
            letterSpacing: "0.2em", 
            color: "var(--text-dark-muted)", 
            fontWeight: 600, 
            marginBottom: "16px" 
          }}>
            SYSTEM POSITIONING
          </div>
          <h2 style={{ 
            fontSize: "clamp(2.2rem, 4.5vw, 3.5rem)", 
            fontWeight: 800, 
            letterSpacing: "-0.04em", 
            color: "var(--text-dark)",
            lineHeight: 1.1,
            marginBottom: "20px"
          }}>
            Infrastructure, not a utility.
          </h2>
          <p style={{ 
            color: "var(--text-dark-muted)", 
            fontSize: "1.15rem", 
            maxWidth: "680px", 
            margin: "0 auto", 
            lineHeight: "1.6",
            fontWeight: 400 
          }}>
            PersonaOn is not an occasional note-taker. It is a persistent operational memory layer designed specifically for high-context, communication-dense roles.
          </p>
        </div>

        {/* Two-Panel Layout */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "32px", maxWidth: "1000px", margin: "0 auto 60px auto" }}>
          
          {/* Left Panel: Who It's NOT For */}
          <div style={{
            background: "rgba(0, 0, 0, 0.02)",
            border: "1px solid var(--border-light)",
            borderRadius: "24px",
            padding: "48px 40px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between"
          }}>
            <div>
              <h3 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--text-dark-muted)", marginBottom: "32px" }}>
                Who It's Not For
              </h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "20px" }}>
                {[
                  { title: "Passive meeting transcription", desc: "If you just want dry meeting summaries or raw text blocks." },
                  { title: "Occasional note-taking", desc: "If you only need a tool to capture a quick detail once a week." },
                  { title: "Static meeting summaries", desc: "If you don't require context to carry forward from meeting to meeting." },
                  { title: "Low-communication volume", desc: "If your operations don't revolve around deep human relationships." }
                ].map((item, idx) => (
                  <li key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "16px" }}>
                    <span style={{ color: "#ff3b30", fontSize: "1.2rem", fontWeight: "bold", marginTop: "-2px" }}>✕</span>
                    <div>
                      <h4 style={{ fontSize: "1.05rem", fontWeight: 700, color: "var(--text-dark-muted)" }}>{item.title}</h4>
                      <p style={{ fontSize: "0.88rem", color: "var(--text-dark-muted)", marginTop: "4px", lineHeight: "1.4" }}>{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Panel: Who It IS For */}
          <div style={{
            background: "var(--bg-dark)",
            color: "#ffffff",
            borderRadius: "24px",
            padding: "48px 40px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)"
          }}>
            <div>
              <h3 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#ffffff", marginBottom: "32px" }}>
                Who It Is For
              </h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "20px" }}>
                {[
                  { title: "Communication-heavy workflows", desc: "Operators who spend 15+ hours a week in client or team alignment calls." },
                  { title: "Relationship-driven operations", desc: "Founders, recruiters, and managers who live by stakeholder trust." },
                  { title: "Recurring decision environments", desc: "Teams managing high-context integrations, legal contracts, or hirings." },
                  { title: "Deep cumulative continuity", desc: "Professionals who want their operational intelligence to grow smarter over time." }
                ].map((item, idx) => (
                  <li key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "16px" }}>
                    <span style={{ color: "#1E50FF", fontSize: "1.2rem", fontWeight: "bold", marginTop: "-2px" }}>✓</span>
                    <div>
                      <h4 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#ffffff" }}>{item.title}</h4>
                      <p style={{ fontSize: "0.88rem", color: "#a0a0a0", marginTop: "4px", lineHeight: "1.4" }}>{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* ICP Chips & Dynamic Box */}
        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "10px", marginBottom: "24px" }}>
            {Object.entries(roles).map(([key, role]) => (
              <button
                key={key}
                onClick={() => setSelectedRole(key)}
                style={{
                  padding: "10px 20px",
                  borderRadius: "30px",
                  border: selectedRole === key ? "1px solid var(--primary)" : "1px solid var(--border-light)",
                  background: selectedRole === key ? "var(--bg-dark)" : "#ffffff",
                  color: selectedRole === key ? "#ffffff" : "var(--text-dark-muted)",
                  cursor: "pointer",
                  fontWeight: 500,
                  fontSize: "0.88rem",
                  transition: "all 0.2s ease"
                }}
              >
                {role.label}
              </button>
            ))}
          </div>

          <div style={{
            background: "var(--bg-gray)",
            border: "1px solid var(--border-light)",
            borderRadius: "16px",
            padding: "24px 32px",
            textAlign: "left",
            display: "flex",
            flexDirection: "column",
            gap: "8px"
          }}>
            <span style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.15em", color: "#1E50FF", fontWeight: 700 }}>
              {roles[selectedRole as keyof typeof roles].label} Use Case
            </span>
            <p style={{ fontSize: "1.05rem", color: "var(--text-dark)", lineHeight: "1.5", fontWeight: 400 }}>
              {roles[selectedRole as keyof typeof roles].useCase}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
