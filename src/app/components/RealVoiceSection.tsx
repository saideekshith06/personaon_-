"use client";

import React from "react";

export default function RealVoiceSection() {
  return (
    <section id="real-not-synthetic" className="section-padding" style={{ background: "var(--bg-light)" }}>
      <div className="container" style={{ display: "flex", justifyContent: "center" }}>
        
        <div 
          style={{ 
            background: "#111111", 
            borderRadius: "24px",
            padding: "60px",
            maxWidth: "900px",
            width: "100%",
            position: "relative",
            overflow: "hidden",
            boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
          }}
        >
          {/* Subtle blue gradient in top right */}
          <div 
            style={{
              position: "absolute",
              top: "-50%",
              right: "-20%",
              width: "600px",
              height: "600px",
              background: "radial-gradient(circle at center, rgba(0, 98, 209, 0.25) 0%, transparent 60%)",
              zIndex: 0,
              pointerEvents: "none"
            }}
          />

          <div style={{ position: "relative", zIndex: 1, maxWidth: "600px" }}>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", marginBottom: "8px", fontWeight: 800, color: "#ffffff", letterSpacing: "-0.03em" }}>
              Real you. Real voice.
            </h2>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", marginBottom: "24px", fontWeight: 400, fontStyle: "italic", color: "var(--text-light-muted)", letterSpacing: "-0.03em" }}>
              Not synthetic.
            </h2>
            <p style={{ color: "var(--text-light-muted)", fontSize: "1.05rem", lineHeight: "1.6" }}>
              Stop guessing what your clients want based on synthetic AI models. Base your decisions on the exact words spoken in your actual meetings. PersonaOn ensures you never hallucinate a user need again, because every insight is grounded in reality.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
