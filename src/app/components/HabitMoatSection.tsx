"use client";

import React from "react";

export default function HabitMoatSection() {
  return (
    <section className="section-padding section-light" style={{ textAlign: "center", background: "var(--bg-light)" }}>
      <div className="container">
        <h2 style={{ 
          fontSize: "clamp(3.5rem, 7vw, 6rem)", 
          marginBottom: "0", 
          fontWeight: 700, 
          letterSpacing: "-0.04em", 
          color: "var(--text-dark)",
          lineHeight: 1.1
        }}>
          Capture is the habit.
        </h2>
        <h2 style={{ 
          fontSize: "clamp(3.5rem, 7vw, 6rem)", 
          marginBottom: "32px", 
          fontWeight: 400, 
          fontStyle: "italic", 
          fontFamily: "'Instrument Serif', Georgia, serif",
          letterSpacing: "-0.02em", 
          color: "var(--text-light-muted)",
          lineHeight: 1.1
        }}>
          Your persona is the moat.
        </h2>
        
        <p style={{ 
          color: "var(--text-dark-muted)", 
          maxWidth: "500px", 
          margin: "0 auto 40px auto", 
          fontSize: "1.05rem", 
          lineHeight: "1.6",
          fontWeight: 400
        }}>
          Your meetings are happening anyway. PersonaOn turns them into something that compounds into a real you, on call.
        </p>

        <button className="btn-black" style={{ 
          padding: "16px 32px", 
          fontSize: "1rem", 
          borderRadius: "30px",
          display: "inline-flex",
          alignItems: "center",
          gap: "8px"
        }}>
          Start free
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </button>

        <p style={{ 
          marginTop: "16px", 
          fontSize: "0.8rem", 
          color: "var(--text-light-muted)", 
          textTransform: "uppercase", 
          letterSpacing: "0.05em",
          fontWeight: 500
        }}>
          No credit card · Connect a calendar in 60 seconds
        </p>
      </div>
    </section>
  );
}
