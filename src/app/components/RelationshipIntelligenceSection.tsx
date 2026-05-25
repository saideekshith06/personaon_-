"use client";

import React, { useState } from "react";

export default function RelationshipIntelligenceSection() {
  const [activeStep, setActiveStep] = useState(2); // default to final compounding view

  const meetings = [
    {
      title: "01. Discovery & Alignment",
      date: "Oct 12",
      role: "VP of People Operations",
      commitments: [
        "Send case studies on tech recruitment lifecycle reduction",
        "Set up secondary demo with Engineering VP"
      ],
      insights: [
        "Highly focused on recruiter burnout metrics",
        "Currently struggling with candidate drop-off at interview stage"
      ],
      compoundingMemory: "Memory Root Created: Track all mentions of 'burnout', 'drop-off', and 'engineering alignment'."
    },
    {
      title: "02. Technical Demo & Scoping",
      date: "Oct 28",
      role: "VP of People Operations",
      commitments: [
        "Provide pricing options for 50 vs 100 recruiters",
        "Confirm integration support for Lever ATS"
      ],
      insights: [
        "Carried forward: Recruiter burnout remains primary concern",
        "Engineering VP (Alex) expressed major concern over data privacy",
        "Sarah's budget cycle closes mid-November"
      ],
      compoundingMemory: "Memory Compounded: Connected Lever ATS dependency with candidate drop-off patterns."
    },
    {
      title: "03. Commercial & Procurement",
      date: "Nov 08",
      role: "VP of People Operations",
      commitments: [
        "Deliver finalized MSA contract review",
        "Coordinate kickoff session for Dec 1"
      ],
      insights: [
        "Carried forward: Leverage ATS integration is approved",
        "Sarah preferred the 100-seat model because of burnout data presented",
        "Alex (Eng) signed off after seeing private sandbox parameters"
      ],
      compoundingMemory: "Full Relationship Synthesis: 3 meetings, 6 key commitments, 5 stakeholder profiles connected across 27 days."
    }
  ];

  return (
    <section 
      id="relationship-intelligence" 
      className="section-light section-padding bg-grid-light" 
      style={{ 
        position: "relative",
        overflow: "hidden",
        background: "var(--bg-light)", 
        borderTop: "1px solid var(--border-light)", 
        padding: "100px 0" 
      }}
    >
      {/* Ambient drifting blooms */}
      <div className="ambient-glow ambient-blue animate-drift-1" style={{ top: "10%", left: "5%", width: "450px", height: "450px" }} />
      <div className="ambient-glow ambient-purple animate-drift-2" style={{ bottom: "10%", right: "5%", width: "450px", height: "450px" }} />
      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        
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
            RELATIONSHIP CONTINUITY
          </div>
          <h2 style={{ 
            fontSize: "clamp(2.2rem, 4.5vw, 3.5rem)", 
            fontWeight: 800, 
            letterSpacing: "-0.04em", 
            color: "var(--text-dark)",
            lineHeight: 1.1,
            marginBottom: "20px"
          }}>
            Remember people. Not just meetings.
          </h2>
          <p style={{ 
            color: "var(--text-dark-muted)", 
            fontSize: "1.15rem", 
            maxWidth: "700px", 
            margin: "0 auto", 
            lineHeight: "1.6",
            fontWeight: 400 
          }}>
            Static transcription tools treat every meeting as an isolated event. PersonaOn tracks relationships over time—connecting commitments, personal contexts, and evolving topics from one call to the next.
          </p>
        </div>

        {/* Dashboard Visualizer */}
        <div style={{ 
          maxWidth: "1000px", 
          margin: "0 auto",
          background: "#ffffff",
          border: "1px solid var(--border-light)",
          borderRadius: "24px",
          boxShadow: "0 10px 40px rgba(0, 0, 0, 0.02)",
          padding: "32px",
          overflow: "hidden"
        }}>
          
          {/* Timeline Steps / Selector */}
          <div style={{ 
            display: "flex", 
            justifyContent: "space-between", 
            borderBottom: "1px solid rgba(0, 0, 0, 0.08)",
            paddingBottom: "20px",
            marginBottom: "32px",
            gap: "16px",
            flexWrap: "wrap"
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div style={{ 
                width: "48px", 
                height: "48px", 
                borderRadius: "50%", 
                background: "linear-gradient(135deg, #1E50FF 0%, #002db3 100%)",
                color: "#ffffff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 600,
                fontSize: "1.1rem"
              }}>
                SJ
              </div>
              <div>
                <h4 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--text-dark)" }}>Sarah Jenkins</h4>
                <p style={{ fontSize: "0.85rem", color: "var(--text-dark-muted)" }}>Director of Operations @ Acme Corp</p>
              </div>
            </div>

            {/* Stepper controls */}
            <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
              {meetings.map((m, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  style={{
                    padding: "10px 18px",
                    borderRadius: "30px",
                    border: activeStep === idx ? "1px solid var(--primary)" : "1px solid var(--border-light)",
                    background: activeStep === idx ? "var(--bg-dark)" : "#ffffff",
                    color: activeStep === idx ? "#ffffff" : "var(--text-dark-muted)",
                    cursor: "pointer",
                    fontSize: "0.85rem",
                    fontWeight: 500,
                    transition: "var(--transition-smooth)"
                  }}
                >
                  {m.date}
                </button>
              ))}
            </div>
          </div>

          {/* Interactive Step Content */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "32px" }}>
            
            {/* Left: Meeting Details & Commitments */}
            <div>
              <div style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.15em", color: "#1E50FF", fontWeight: 600, marginBottom: "8px" }}>
                MEETING CONTEXT
              </div>
              <h3 style={{ fontSize: "1.4rem", fontWeight: 700, color: "var(--text-dark)", marginBottom: "16px" }}>
                {meetings[activeStep].title}
              </h3>
              
              <div style={{ marginTop: "24px" }}>
                <div style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--text-dark)", marginBottom: "12px" }}>
                  Action Commitments:
                </div>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
                  {meetings[activeStep].commitments.map((c, i) => (
                    <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "0.9rem", color: "var(--text-dark-muted)", lineHeight: "1.4" }}>
                      <span style={{ color: "#1E50FF", fontWeight: "bold" }}>✓</span>
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right: Insights & Compounding Layer */}
            <div style={{ 
              background: "var(--bg-gray)", 
              borderRadius: "16px", 
              padding: "24px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between"
            }}>
              <div>
                <div style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.15em", color: "var(--text-dark-muted)", fontWeight: 600, marginBottom: "12px" }}>
                  RELATIONSHIP INTELLIGENCE
                </div>
                
                <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                  {meetings[activeStep].insights.map((ins, i) => {
                    const isCarried = ins.startsWith("Carried forward");
                    return (
                      <div key={i} style={{
                        background: isCarried ? "#ffffff" : "transparent",
                        border: isCarried ? "1px dashed rgba(30, 80, 255, 0.3)" : "none",
                        padding: isCarried ? "10px 14px" : "0",
                        borderRadius: "8px"
                      }}>
                        <p style={{ 
                          fontSize: "0.92rem", 
                          color: "var(--text-dark)", 
                          lineHeight: "1.4",
                          fontWeight: isCarried ? 500 : 400
                        }}>
                          {isCarried && <span style={{ color: "#1E50FF", marginRight: "4px" }}>✨</span>}
                          {ins}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Compounding Indicator */}
              <div style={{ 
                marginTop: "24px", 
                paddingTop: "16px", 
                borderTop: "1px solid rgba(0, 0, 0, 0.08)",
                fontSize: "0.85rem",
                color: "#1E50FF",
                fontWeight: 500,
                display: "flex",
                alignItems: "center",
                gap: "8px"
              }}>
                <span className="sparkle">⚡</span>
                <span>{meetings[activeStep].compoundingMemory}</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
