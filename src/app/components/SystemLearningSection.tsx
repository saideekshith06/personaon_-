"use client";

import React from "react";

export default function SystemLearningSection() {
  const milestones = [
    {
      time: "WEEK 1",
      title: "Active Baseline",
      capabilities: "Active Capture & Indexing",
      desc: "PersonaOn connects to your calendars and active channels. It begins capturing meetings, identifying commitments, and producing human-grade action items immediately.",
      visual: "●"
    },
    {
      time: "MONTH 1",
      title: "Workflow Synthesis",
      capabilities: "Cross-Meeting Continuity",
      desc: "The system connects names, recurring topics, and SLA agreements across disparate dates. It highlights carries, catches dropped commitments, and builds people-profiles.",
      visual: "● ─ ●"
    },
    {
      time: "MONTH 6+",
      title: "Full Alignment Infrastructure",
      capabilities: "Autonomous Moats & Blockers",
      desc: "Your system has hundreds of hours of historical context. It understands stakeholder nuances, surfaces risk warnings before pitch boards, and acts as your persistent second brain.",
      visual: "● ─ ● ─ ●"
    }
  ];

  return (
    <section id="system-learning" className="section-gray section-padding" style={{ background: "var(--bg-gray)", borderTop: "1px solid var(--border-light)", padding: "100px 0" }}>
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
            COMPOUNDING PHASES
          </div>
          <h2 style={{ 
            fontSize: "clamp(2.2rem, 4.5vw, 3.5rem)", 
            fontWeight: 800, 
            letterSpacing: "-0.04em", 
            color: "var(--text-dark)",
            lineHeight: 1.1,
            marginBottom: "20px"
          }}>
            How your system learns over time.
          </h2>
          <p style={{ 
            color: "var(--text-dark-muted)", 
            fontSize: "1.15rem", 
            maxWidth: "680px", 
            margin: "0 auto", 
            lineHeight: "1.6",
            fontWeight: 400 
          }}>
            A utility transcription bot does the exact same job on Day 100 as it does on Day 1. PersonaOn compounds value continuously, transforming notes into permanent infrastructure.
          </p>
        </div>

        {/* Milestone Steps Timeline */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "32px",
          maxWidth: "1100px",
          margin: "0 auto",
          position: "relative"
        }}>
          {milestones.map((milestone, idx) => (
            <div 
              key={idx}
              className="card-light"
              style={{
                background: "#ffffff",
                border: "1px solid rgba(0, 0, 0, 0.06)",
                borderRadius: "24px",
                padding: "40px",
                position: "relative",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                minHeight: "360px",
                transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)"
              }}
            >
              <div>
                {/* Timeline Marker */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" }}>
                  <span style={{ 
                    fontSize: "0.8rem", 
                    fontWeight: 700, 
                    color: "#1E50FF", 
                    letterSpacing: "0.15em",
                    background: "rgba(30, 80, 255, 0.05)",
                    padding: "6px 12px",
                    borderRadius: "20px"
                  }}>
                    {milestone.time}
                  </span>
                  
                  {/* Subtle Node Growth Indicator */}
                  <span style={{ fontFamily: "monospace", fontSize: "0.85rem", color: "var(--text-dark-muted)", letterSpacing: "2px" }}>
                    {milestone.visual}
                  </span>
                </div>

                <h3 style={{ fontSize: "1.4rem", fontWeight: 700, color: "var(--text-dark)", marginBottom: "8px" }}>
                  {milestone.title}
                </h3>
                <h4 style={{ fontSize: "0.9rem", fontWeight: 500, color: "var(--text-dark-muted)", marginBottom: "20px" }}>
                  {milestone.capabilities}
                </h4>
                
                <p style={{ fontSize: "0.98rem", color: "var(--text-dark-muted)", lineHeight: "1.6", fontWeight: 400 }}>
                  {milestone.desc}
                </p>
              </div>

              {/* Bottom detail line */}
              <div style={{ 
                marginTop: "32px", 
                paddingTop: "20px", 
                borderTop: "1px solid rgba(0,0,0,0.06)",
                fontSize: "0.85rem",
                fontWeight: 500,
                color: "var(--text-dark)",
                display: "flex",
                alignItems: "center",
                gap: "8px"
              }}>
                <span style={{ color: "#1E50FF" }}>→</span>
                <span>Value: Exponential Moat Built</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
