"use client";

import React, { useState, useEffect } from "react";

export default function TelemetryDashboard() {
  const [pulseCount, setPulseCount] = useState(14280);

  // Live number-ticking effect to make the dashboard feel active and real-time
  useEffect(() => {
    const interval = setInterval(() => {
      setPulseCount((prev) => prev + Math.floor(Math.random() * 2));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      id="telemetry" 
      className="section-light section-padding bg-dot-light" 
      style={{ 
        position: "relative",
        overflow: "hidden",
        background: "var(--bg-light)",
        borderTop: "1px solid var(--border-light)",
        padding: "100px 0"
      }}
    >
      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <div style={{ 
            fontSize: "0.8rem", 
            textTransform: "uppercase", 
            letterSpacing: "0.2em", 
            color: "#1E50FF", 
            fontWeight: 700, 
            marginBottom: "16px" 
          }}>
            SYSTEM OPERATIONS
          </div>
          <h2 style={{ 
            fontSize: "clamp(2.2rem, 4vw, 3.5rem)", 
            fontWeight: 800, 
            letterSpacing: "-0.04em", 
            color: "var(--text-dark)",
            lineHeight: 1.1,
            marginBottom: "20px"
          }}>
            Fidelity in real-time.
          </h2>
          <p style={{ 
            color: "var(--text-dark-muted)", 
            fontSize: "1.15rem", 
            maxWidth: "600px", 
            margin: "0 auto", 
            lineHeight: "1.6",
            fontWeight: 400 
          }}>
            PersonaOn runs silently in the background, compounding work memory and maintaining secure separation across your workspaces.
          </p>
        </div>

        {/* 4-Card Telemetry Grid */}
        <div 
          className="responsive-grid-4"
          style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(4, 1fr)", 
            gap: "24px", 
            marginBottom: "50px" 
          }}
        >
          {/* Card 1: Capture Fidelity */}
          <div 
            className="card-light" 
            style={{ 
              padding: "28px", 
              background: "#ffffff", 
              border: "1px solid rgba(0,0,0,0.06)", 
              borderRadius: "16px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              minHeight: "220px",
              position: "relative"
            }}
          >
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
                <span style={{ fontSize: "0.72rem", fontWeight: 700, color: "var(--text-dark-muted)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  CAPTURE FIDELITY
                </span>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: "12px", padding: "3px 8px", fontSize: "0.68rem", fontWeight: 700, color: "#15803d" }}>
                  <span className="live-dot" />
                  ACTIVE
                </span>
              </div>
              <div style={{ fontSize: "2.5rem", fontWeight: 800, color: "var(--text-dark)", letterSpacing: "-0.03em", marginBottom: "8px" }}>
                99.98%
              </div>
            </div>
            <div>
              {/* Dynamic SVG latency graph */}
              <div style={{ height: "30px", marginBottom: "16px", display: "flex", alignItems: "flex-end" }}>
                <svg width="100%" height="24" viewBox="0 0 200 24" fill="none">
                  <path d="M0 12 L30 12 L45 3 L60 21 L75 12 L120 12 L135 12 L145 7 L155 17 L165 12 L200 12" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M0 12 L30 12 L45 3 L60 21 L75 12 L120 12 L135 12 L145 7 L155 17 L165 12 L200 12 L200 24 L0 24 Z" fill="url(#greenGrad)" opacity="0.1" />
                  <defs>
                    <linearGradient id="greenGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#10B981" />
                      <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <p style={{ fontSize: "0.82rem", color: "var(--text-dark-muted)", lineHeight: "1.4" }}>
                Decisions, commitments, and deadlines captured automatically.
              </p>
            </div>
          </div>

          {/* Card 2: Compound Memory */}
          <div 
            className="card-light" 
            style={{ 
              padding: "28px", 
              background: "#ffffff", 
              border: "1px solid rgba(0,0,0,0.06)", 
              borderRadius: "16px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              minHeight: "220px"
            }}
          >
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
                <span style={{ fontSize: "0.72rem", fontWeight: 700, color: "var(--text-dark-muted)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  WORKING MEMORY
                </span>
                <span style={{ fontSize: "0.72rem", color: "#1E50FF", fontWeight: 700 }}>
                  COMPOUNDING
                </span>
              </div>
              <div style={{ fontSize: "2.5rem", fontWeight: 800, color: "var(--text-dark)", letterSpacing: "-0.03em", marginBottom: "8px" }}>
                {pulseCount.toLocaleString()}
              </div>
            </div>
            <div>
              {/* Dynamic SVG Sparkline Graph */}
              <div style={{ height: "30px", marginBottom: "16px", display: "flex", alignItems: "flex-end" }}>
                <svg width="100%" height="24" viewBox="0 0 200 24" fill="none">
                  <path d="M0 20 Q20 18 40 14 T80 12 T120 6 T160 4 T200 2" stroke="#1E50FF" strokeWidth="2.2" strokeLinecap="round" />
                  <path d="M0 20 Q20 18 40 14 T80 12 T120 6 T160 4 T200 2 L200 24 L0 24 Z" fill="url(#blueGrad)" opacity="0.1" />
                  <defs>
                    <linearGradient id="blueGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#1E50FF" />
                      <stop offset="100%" stopColor="#1E50FF" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <p style={{ fontSize: "0.82rem", color: "var(--text-dark-muted)", lineHeight: "1.4" }}>
                Connected details and hooks stored across workspaces.
              </p>
            </div>
          </div>

          {/* Card 3: Voice Tone Match */}
          <div 
            className="card-light" 
            style={{ 
              padding: "28px", 
              background: "#ffffff", 
              border: "1px solid rgba(0,0,0,0.06)", 
              borderRadius: "16px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              minHeight: "220px"
            }}
          >
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
                <span style={{ fontSize: "0.72rem", fontWeight: 700, color: "var(--text-dark-muted)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  VOICE TONE ALIGNMENT
                </span>
                <span style={{ fontSize: "0.72rem", color: "#8B5CF6", fontWeight: 700 }}>
                  NATURAL
                </span>
              </div>
              <div style={{ fontSize: "2.5rem", fontWeight: 800, color: "var(--text-dark)", letterSpacing: "-0.03em", marginBottom: "8px" }}>
                98.7%
              </div>
            </div>
            <div>
              {/* Animating Waveform simulation */}
              <div style={{ height: "30px", marginBottom: "16px", display: "flex", alignItems: "center", gap: "5px" }}>
                {[0.4, 0.8, 0.5, 0.9, 0.3, 0.7, 0.4, 0.8, 0.5, 0.9, 0.3, 0.7, 0.5].map((h, i) => (
                  <span 
                    key={i} 
                    style={{ 
                      flexGrow: 1, 
                      height: `${h * 100}%`, 
                      background: "#8B5CF6", 
                      borderRadius: "2px",
                      opacity: 0.85,
                      animation: "voiceWave 1.4s ease-in-out infinite alternate",
                      animationDelay: `${i * 0.1}s`
                    }} 
                  />
                ))}
              </div>
              <p style={{ fontSize: "0.82rem", color: "var(--text-dark-muted)", lineHeight: "1.4" }}>
                Learns your actual phrasing and communication patterns.
              </p>
            </div>
          </div>

          {/* Card 4: Efficiency Gain */}
          <div 
            className="card-light" 
            style={{ 
              padding: "28px", 
              background: "#ffffff", 
              border: "1px solid rgba(0,0,0,0.06)", 
              borderRadius: "16px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              minHeight: "220px"
            }}
          >
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
                <span style={{ fontSize: "0.72rem", fontWeight: 700, color: "var(--text-dark-muted)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  EFFICIENCY GAIN
                </span>
                <span style={{ fontSize: "0.72rem", color: "#F59E0B", fontWeight: 700 }}>
                  WEEKLY
                </span>
              </div>
              <div style={{ fontSize: "2.5rem", fontWeight: 800, color: "var(--text-dark)", letterSpacing: "-0.03em", marginBottom: "8px" }}>
                12.5 hrs
              </div>
            </div>
            <div>
              {/* Compact bar chart */}
              <div style={{ height: "30px", marginBottom: "16px", display: "flex", alignItems: "flex-end", gap: "8px" }}>
                {[30, 45, 65, 80, 100].map((w, i) => (
                  <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", gap: "4px", alignItems: "center" }}>
                    <span style={{ fontSize: "0.62rem", color: "var(--text-dark-muted)", fontWeight: 600 }}>W{i+1}</span>
                    <span style={{ width: "100%", height: `${w * 0.2}px`, background: i === 4 ? "#F59E0B" : "rgba(0,0,0,0.08)", borderRadius: "4px 4px 0 0" }} />
                  </div>
                ))}
              </div>
              <p style={{ fontSize: "0.82rem", color: "var(--text-dark-muted)", lineHeight: "1.4" }}>
                Time saved on brief summaries and manual CRM sync.
              </p>
            </div>
          </div>
        </div>

        {/* Security & Workspace Isolation Data-Path Telemetry Card (shadcn/Mantine Style) */}
        <div 
          style={{
            background: "#ffffff",
            border: "1px solid rgba(0,0,0,0.06)",
            borderRadius: "24px",
            padding: "40px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.01)"
          }}
          className="panel-card"
        >
          <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: "48px", alignItems: "center" }} className="responsive-grid-2">
            
            {/* Visual Security Panel */}
            <div 
              style={{
                background: "rgba(0,0,0,0.015)",
                border: "1px solid rgba(0,0,0,0.04)",
                borderRadius: "16px",
                padding: "32px",
                display: "flex",
                flexDirection: "column",
                gap: "24px",
                position: "relative"
              }}
            >
              {/* Connected workspaces visual diagram */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", position: "relative" }}>
                <div style={{ background: "#ffffff", border: "1px solid rgba(0,0,0,0.08)", padding: "10px 14px", borderRadius: "10px", fontSize: "0.75rem", fontWeight: 700, zIndex: 2 }}>
                  💼 Work Gmail
                </div>
                <div style={{ background: "#ffffff", border: "1px solid rgba(0,0,0,0.08)", padding: "10px 14px", borderRadius: "10px", fontSize: "0.75rem", fontWeight: 700, zIndex: 2 }}>
                  🔌 Lever ATS
                </div>
                {/* Dotted connecting line */}
                <div style={{ position: "absolute", left: "20px", right: "20px", top: "50%", height: "1px", borderTop: "1.5px dashed #ccc", zIndex: 1 }} />
              </div>

              {/* Secure Vault Core Node */}
              <div style={{ display: "flex", justifyContent: "center" }}>
                <div 
                  className="vault-node"
                  style={{
                    background: "var(--bg-dark)",
                    color: "#ffffff",
                    padding: "16px 28px",
                    borderRadius: "30px",
                    fontSize: "0.85rem",
                    fontWeight: 700,
                    boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px"
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1E50FF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                  </svg>
                  SECURE VAULT ISOLATION
                </div>
              </div>

              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", position: "relative" }}>
                <div style={{ background: "#ffffff", border: "1px solid rgba(0,0,0,0.08)", padding: "10px 14px", borderRadius: "10px", fontSize: "0.75rem", fontWeight: 700, zIndex: 2 }}>
                  💬 Zoom Sync
                </div>
                <div style={{ background: "#ffffff", border: "1px solid rgba(0,0,0,0.08)", padding: "10px 14px", borderRadius: "10px", fontSize: "0.75rem", fontWeight: 700, zIndex: 2 }}>
                  🔐 AES-256 Key
                </div>
                <div style={{ position: "absolute", left: "20px", right: "20px", top: "50%", height: "1px", borderTop: "1.5px dashed #ccc", zIndex: 1 }} />
              </div>
            </div>

            {/* Description Copy */}
            <div>
              <div style={{ fontSize: "0.72rem", fontWeight: 700, color: "#1E50FF", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "16px" }}>
                WORKSPACE DATA ISOLATION
              </div>
              <h3 style={{ fontSize: "1.8rem", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: "16px", color: "var(--text-dark)", lineHeight: "1.2" }}>
                Zero crossover. Complete privacy.
              </h3>
              <p style={{ color: "var(--text-dark-muted)", fontSize: "1rem", lineHeight: "1.6", fontWeight: 400, marginBottom: "24px" }}>
                We do not blend workspace data. Memory streams from Zoom kickoff calls, internal Lever ATS hiring profiles, and sales pipelines are fully cryptographically isolated. Only your unique credential can query and combine details.
              </p>
              <div style={{ display: "flex", gap: "20px" }}>
                <div>
                  <div style={{ fontWeight: 700, color: "var(--text-dark)", fontSize: "1.1rem" }}>AES-256</div>
                  <div style={{ fontSize: "0.78rem", color: "var(--text-dark-muted)" }}>Data Encryption</div>
                </div>
                <div style={{ borderLeft: "1px solid var(--border-light)" }} />
                <div>
                  <div style={{ fontWeight: 700, color: "var(--text-dark)", fontSize: "1.1rem" }}>SOC2 Compliant</div>
                  <div style={{ fontSize: "0.78rem", color: "var(--text-dark-muted)" }}>Security Protocol</div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Embedded Telemetry Animations CSS */}
      <style jsx>{`
        .live-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #22c55e;
          animation: pulseGreen 1.5s infinite;
        }

        @keyframes pulseGreen {
          0% { transform: scale(0.9); opacity: 0.5; }
          50% { transform: scale(1.2); opacity: 1; }
          100% { transform: scale(0.9); opacity: 0.5; }
        }

        @keyframes voiceWave {
          0% { transform: scaleY(0.3); }
          100% { transform: scaleY(1); }
        }

        @keyframes pulseVault {
          0% { box-shadow: 0 0 0 0 rgba(30, 80, 255, 0.4); }
          70% { box-shadow: 0 0 0 10px rgba(30, 80, 255, 0); }
          100% { box-shadow: 0 0 0 0 rgba(30, 80, 255, 0); }
        }

        .vault-node {
          animation: pulseVault 2s infinite;
        }
      `}</style>
    </section>
  );
}
