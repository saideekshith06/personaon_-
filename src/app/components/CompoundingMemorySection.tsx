"use client";

import React, { useState } from "react";

export default function CompoundingMemorySection() {
  const [activeStep, setActiveStep] = useState(3); // default to Month 6

  const steps = [
    {
      time: "Week 1",
      title: "Active Capture & Discovery",
      score: "15%",
      desc: "Capturing individual conversations, action items, and basic context.",
      example: "Captured: Acme kickoff meeting goals, Sarah's team size (14), and next demo dates.",
      nodes: [
        { cx: 80, cy: 100, r: 8, label: "Kickoff" },
        { cx: 180, cy: 120, r: 6, label: "Notes" }
      ],
      connections: [[80, 100, 180, 120]]
    },
    {
      time: "Week 3",
      title: "Context Cross-Linking",
      score: "42%",
      desc: "Automatically cross-referencing commitments and names across different calls.",
      example: "Linked: Acme Follow-up call referenced Sarah's week-1 SLA commitments automatically.",
      nodes: [
        { cx: 80, cy: 100, r: 8, label: "Kickoff" },
        { cx: 180, cy: 120, r: 6, label: "Notes" },
        { cx: 280, cy: 90, r: 8, label: "SLA Demo" },
        { cx: 200, cy: 50, r: 5, label: "Sarah SLA" }
      ],
      connections: [
        [80, 100, 180, 120],
        [180, 120, 280, 90],
        [280, 90, 200, 50]
      ]
    },
    {
      time: "Month 2",
      title: "Work Pattern Identification",
      score: "78%",
      desc: "Recognizing macro patterns like objections, timelines, and decision structures.",
      example: "Pattern Identified: Acme consistently surfaces procurement objections whenever pricing model 'B' is introduced.",
      nodes: [
        { cx: 80, cy: 100, r: 8, label: "Kickoff" },
        { cx: 180, cy: 120, r: 6, label: "Notes" },
        { cx: 280, cy: 90, r: 8, label: "SLA Demo" },
        { cx: 200, cy: 50, r: 5, label: "Sarah SLA" },
        { cx: 380, cy: 140, r: 8, label: "Commercial" },
        { cx: 320, cy: 180, r: 6, label: "Procurement" },
        { cx: 250, cy: 220, r: 5, label: "Pattern: Price Objections" }
      ],
      connections: [
        [80, 100, 180, 120],
        [180, 120, 280, 90],
        [280, 90, 200, 50],
        [280, 90, 380, 140],
        [380, 140, 320, 180],
        [320, 180, 250, 220],
        [250, 220, 80, 100] // compounding loop back!
      ]
    },
    {
      time: "Month 6+",
      title: "Fully Autonomous Alignment Layer",
      score: "99%",
      desc: "Anticipating project blockages and providing deep relationship intelligence before you ask.",
      example: "Synthesized: 14 meetings, 23 commitments, 4 stakeholder profiles. Fully prepares you to pitch Sarah Jenkins' executive board.",
      nodes: [
        { cx: 80, cy: 100, r: 8, label: "Kickoff" },
        { cx: 180, cy: 120, r: 6, label: "Notes" },
        { cx: 280, cy: 90, r: 8, label: "SLA Demo" },
        { cx: 200, cy: 50, r: 5, label: "Sarah SLA" },
        { cx: 380, cy: 140, r: 8, label: "Commercial" },
        { cx: 320, cy: 180, r: 6, label: "Procurement" },
        { cx: 250, cy: 220, r: 5, label: "Pattern: Price Objections" },
        { cx: 480, cy: 100, r: 10, label: "Board Pitch" },
        { cx: 450, cy: 40, r: 5, label: "Board Context" },
        { cx: 400, cy: 220, r: 5, label: "Risks & Moats" }
      ],
      connections: [
        [80, 100, 180, 120],
        [180, 120, 280, 90],
        [280, 90, 200, 50],
        [280, 90, 380, 140],
        [380, 140, 320, 180],
        [320, 180, 250, 220],
        [250, 220, 80, 100],
        [380, 140, 480, 100],
        [480, 100, 450, 40],
        [480, 100, 400, 220],
        [400, 220, 250, 220]
      ]
    }
  ];

  return (
    <section 
      id="compounding-memory" 
      className="section-dark section-padding bg-grid-dark" 
      style={{ 
        position: "relative",
        overflow: "hidden",
        background: "#0a0a0a", 
        color: "#ffffff", 
        padding: "120px 0" 
      }}
    >
      {/* Ambient drifting blooms */}
      <div className="ambient-glow ambient-blue animate-drift-1" style={{ top: "10%", left: "5%", width: "500px", height: "500px" }} />
      <div className="ambient-glow ambient-purple animate-drift-2" style={{ bottom: "10%", right: "5%", width: "500px", height: "500px" }} />
      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        
        {/* Two-Column Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(380px, 1fr))", gap: "60px", alignItems: "center" }}>
          
          {/* Left Column: Visual Timeline Graph */}
          <div>
            <div style={{ 
              fontSize: "0.8rem", 
              textTransform: "uppercase", 
              letterSpacing: "0.2em", 
              color: "#a0a0a0", 
              fontWeight: 600, 
              marginBottom: "16px" 
            }}>
              COMPOUNDING NETWORK
            </div>
            <h2 style={{ 
              fontSize: "clamp(2.2rem, 4vw, 3.2rem)", 
              fontWeight: 800, 
              letterSpacing: "-0.04em", 
              color: "#ffffff",
              lineHeight: 1.1,
              marginBottom: "32px"
            }}>
              Memory that compounds.<br />
              <span style={{ fontWeight: 400, fontStyle: "italic", color: "#a0a0a0" }}>The longer you use it, the smarter it gets.</span>
            </h2>

            {/* Interactive Steps selector */}
            <div style={{ display: "flex", gap: "10px", marginBottom: "40px", background: "rgba(255,255,255,0.03)", padding: "6px", borderRadius: "30px", border: "1px solid rgba(255,255,255,0.08)", width: "fit-content" }}>
              {steps.map((step, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  style={{
                    padding: "10px 20px",
                    borderRadius: "20px",
                    border: "none",
                    background: activeStep === idx ? "#ffffff" : "transparent",
                    color: activeStep === idx ? "#000000" : "#a0a0a0",
                    cursor: "pointer",
                    fontWeight: 600,
                    fontSize: "0.85rem",
                    transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)"
                  }}
                >
                  {step.time}
                </button>
              ))}
            </div>

            {/* Step Content */}
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                  <span style={{ fontSize: "1.3rem", fontWeight: 700 }}>{steps[activeStep].title}</span>
                  <span style={{ fontSize: "0.9rem", color: "#1E50FF", fontWeight: 600 }}>Memory Density: {steps[activeStep].score}</span>
                </div>
                <p style={{ color: "#a0a0a0", fontSize: "1.05rem", lineHeight: "1.6" }}>
                  {steps[activeStep].desc}
                </p>
              </div>

              {/* Progress bar */}
              <div style={{ width: "100%", height: "4px", backgroundColor: "rgba(255,255,255,0.08)", borderRadius: "2px", overflow: "hidden", margin: "10px 0" }}>
                <div style={{ width: steps[activeStep].score, height: "100%", backgroundColor: "#1E50FF", transition: "width 0.5s ease" }} />
              </div>

              {/* Real World Example box */}
              <div style={{ 
                background: "rgba(255, 255, 255, 0.03)", 
                border: "1px solid rgba(255, 255, 255, 0.08)", 
                borderRadius: "16px", 
                padding: "20px",
                display: "flex",
                flexDirection: "column",
                gap: "8px"
              }}>
                <span style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "#1E50FF", fontWeight: 600 }}>
                  REAL WORLD SYNTHESIS:
                </span>
                <p style={{ fontSize: "0.95rem", color: "#e0e0e0", lineHeight: "1.5" }}>
                  {steps[activeStep].example}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Node Connection Canvas */}
          <div style={{
            position: "relative",
            width: "100%",
            height: "350px",
            background: "radial-gradient(circle at center, rgba(30, 80, 255, 0.08) 0%, transparent 70%)",
            border: "1px solid rgba(255, 255, 255, 0.06)",
            borderRadius: "24px",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}>
            <svg width="100%" height="100%" viewBox="0 0 540 260" style={{ position: "absolute", top: 0, left: 0 }}>
              {/* Render Connection Lines */}
              {steps[activeStep].connections.map(([x1, y1, x2, y2], idx) => (
                <line
                  key={idx}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke="#1E50FF"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                  opacity="0.5"
                  style={{
                    animation: "dash 30s linear infinite"
                  }}
                />
              ))}

              {/* Render Nodes */}
              {steps[activeStep].nodes.map((node, idx) => (
                <g key={idx}>
                  <circle
                    cx={node.cx}
                    cy={node.cy}
                    r={node.r}
                    fill="#1E50FF"
                    style={{
                      filter: "drop-shadow(0 0 8px rgba(30, 80, 255, 0.8))"
                    }}
                  />
                  <circle
                    cx={node.cx}
                    cy={node.cy}
                    r={node.r + 6}
                    fill="transparent"
                    stroke="rgba(30, 80, 255, 0.2)"
                    strokeWidth="1"
                    style={{
                      animation: "pulseNode 3s ease-out infinite",
                      animationDelay: `${idx * 0.4}s`
                    }}
                  />
                  <text
                    x={node.cx}
                    y={node.cy - node.r - 8}
                    fill="#e0e0e0"
                    fontSize="9px"
                    textAnchor="middle"
                    fontWeight="500"
                    fontFamily="monospace"
                  >
                    {node.label}
                  </text>
                </g>
              ))}
            </svg>
            
            {/* Visual background grid */}
            <div style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 0)",
              backgroundSize: "20px 20px",
              pointerEvents: "none"
            }} />
          </div>

        </div>

      </div>

      <style jsx>{`
        @keyframes dash {
          to {
            stroke-dashoffset: -1000;
          }
        }
        @keyframes pulseNode {
          0% { transform: scale(1); opacity: 0.8; }
          100% { transform: scale(1.6); opacity: 0; }
        }
      `}</style>
    </section>
  );
}
