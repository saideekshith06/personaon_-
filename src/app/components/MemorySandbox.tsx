"use client";

import React, { useState } from "react";

export default function MemorySandbox() {
  const [query, setQuery] = useState("");

  const handleQuery = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    setQuery("");
  };

  return (
    <section className="section-dark section-padding gradient-glow-box" style={{ margin: "40px 24px", borderRadius: "24px" }}>
      <div className="container">
        
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", marginBottom: "16px", fontWeight: 800, letterSpacing: "-0.03em" }}>
            Built on real humans.<br/>
            <span style={{ color: "var(--text-light-muted)", fontStyle: "italic", fontWeight: 400 }}>Not generated ones.</span>
          </h2>
          <p style={{ color: "var(--text-light-muted)", maxWidth: "550px", margin: "0 auto", fontSize: "1.1rem", lineHeight: "1.6" }}>
            Stop guessing what your clients want based on synthetic AI models. Base your decisions on the exact words spoken in your actual meetings.
          </p>
        </div>

        <div 
          className="card-dark" 
          style={{ 
            maxWidth: "700px", 
            margin: "0 auto", 
            padding: "32px",
            background: "rgba(255,255,255,0.02)",
            border: "1px solid rgba(255,255,255,0.08)"
          }}
        >
          <div style={{ marginBottom: "24px", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--text-light-muted)", fontWeight: 600 }}>
            Try a sample query
          </div>

          <form onSubmit={handleQuery} style={{ display: "flex", gap: "12px", marginBottom: "32px" }}>
            <input 
              type="text" 
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="e.g., 'What were the action items from the Acme Corp kickoff?'"
              style={{
                flex: 1,
                background: "rgba(0,0,0,0.5)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "8px",
                padding: "16px",
                color: "#fff",
                fontSize: "1rem",
                outline: "none"
              }}
            />
            <button type="submit" className="btn-black" style={{ background: "#fff", color: "#000" }}>
              Search Memory
            </button>
          </form>

          <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "24px" }}>
            <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
              <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)", flexShrink: 0 }} />
              <div>
                <div style={{ fontSize: "0.95rem", fontWeight: 600, color: "#fff", marginBottom: "4px" }}>Memory Result</div>
                <div style={{ fontSize: "0.9rem", color: "var(--text-light-muted)", lineHeight: "1.5" }}>
                  During the <strong>Acme Corp Kickoff (Oct 12)</strong>, David mentioned they need the API keys by Thursday. Sarah is assigned to draft the SLA document, and you promised to follow up on the custom domain routing.
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
