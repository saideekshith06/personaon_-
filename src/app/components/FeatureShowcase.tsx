import React from "react";

export default function FeatureShowcase() {
  return (
    <section
      id="features"
      className="section-light section-padding bg-grid-light"
      style={{ 
        position: "relative",
        overflow: "hidden",
        background: "var(--bg-light)",
        borderTop: "1px solid var(--border-light)" 
      }}
    >
      {/* Ambient drifting blooms */}
      <div className="ambient-glow ambient-emerald animate-drift-1" style={{ top: "10%", left: "5%", width: "450px", height: "450px" }} />
      <div className="ambient-glow ambient-purple animate-drift-2" style={{ bottom: "10%", right: "5%", width: "450px", height: "450px" }} />
      <div className="container">
        
        {/* Title Section */}
        <div style={{ textAlign: "center", marginBottom: "80px" }}>
          <div style={{ 
            fontSize: "0.8rem", 
            textTransform: "uppercase", 
            letterSpacing: "0.2em", 
            color: "var(--text-dark-muted)", 
            fontWeight: 600, 
            marginBottom: "16px" 
          }}>
            THE LOOP
          </div>
          
          <h2 style={{ 
            fontSize: "clamp(2.5rem, 5vw, 4rem)", 
            fontWeight: 800, 
            letterSpacing: "-0.04em", 
            color: "var(--text-dark)",
            lineHeight: 1.1,
            marginBottom: "8px" 
          }}>
            One product. Three habits.
          </h2>
          
          <h2 style={{ 
            fontSize: "clamp(2.5rem, 5vw, 4rem)", 
            fontWeight: 400, 
            fontStyle: "italic", 
            fontFamily: "'Instrument Serif', Georgia, serif", 
            color: "var(--text-dark)", 
            letterSpacing: "-0.02em", 
            marginBottom: "32px",
            lineHeight: 1.1 
          }}>
            Compounding.
          </h2>
          
          <p style={{ 
            color: "var(--text-dark-muted)", 
            fontSize: "clamp(1.15rem, 2vw, 1.3rem)", 
            maxWidth: "680px", 
            margin: "0 auto", 
            lineHeight: "1.6", 
            fontWeight: 400 
          }}>
            Calendar sync, capture, and transcription are commodity. The compounding<br className="mobile-hide" /> persona is the product.
          </p>
        </div>

        {/* Features 3-Card Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "32px",
            maxWidth: "1100px",
            margin: "0 auto"
          }}
        >
          {/* Card 1: Prep / Anticipate */}
          <div 
            className="card-light" 
            style={{ 
              padding: "48px 40px 40px 40px", 
              display: "flex", 
              flexDirection: "column", 
              justifyContent: "space-between",
              borderRadius: "24px",
              background: "#ffffff",
              border: "1px solid rgba(0, 0, 0, 0.05)",
              borderLeft: "5px solid #1E50FF",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.05)",
              position: "relative",
              overflow: "hidden"
            }}
          >
            <div>
              <div style={{ 
                fontSize: "0.75rem", 
                fontWeight: 700, 
                color: "#1E50FF", 
                letterSpacing: "0.15em", 
                textTransform: "uppercase", 
                marginBottom: "24px" 
              }}>
                01 &bull; PREP
              </div>
              <h3 style={{ 
                fontSize: "2rem", 
                fontWeight: 700, 
                letterSpacing: "-0.03em", 
                marginBottom: "16px",
                color: "var(--text-dark)"
              }}>
                Anticipate
              </h3>
              <p style={{ 
                color: "var(--text-dark-muted)", 
                fontSize: "1.05rem", 
                lineHeight: "1.6",
                fontWeight: 400
              }}>
                Before each meeting, you get a brief &mdash; who you're meeting, what they want, your history with them, and the hooks to lead with.
              </p>
            </div>
            
            <div>
              <hr style={{ border: 0, borderTop: "1px solid rgba(0, 0, 0, 0.08)", margin: "32px 0 24px 0" }} />
              <ul style={{ 
                listStyle: "none", 
                padding: 0, 
                margin: 0, 
                display: "flex", 
                flexDirection: "column", 
                gap: "12px", 
                fontFamily: "var(--font-geist-mono), monospace", 
                fontSize: "0.85rem", 
                color: "#555555", 
                textAlign: "left" 
              }}>
                <li style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
                  <span style={{ color: "#1E50FF", flexShrink: 0, fontWeight: "bold" }}>↳</span>
                  <span>Google + Outlook calendars</span>
                </li>
                <li style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
                  <span style={{ color: "#1E50FF", flexShrink: 0, fontWeight: "bold" }}>↳</span>
                  <span>Person enrichment (LinkedIn-grade)</span>
                </li>
                <li style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
                  <span style={{ color: "#1E50FF", flexShrink: 0, fontWeight: "bold" }}>↳</span>
                  <span>Carry-forward from prior recaps</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Card 2: Present / Capture */}
          <div 
            className="card-light" 
            style={{ 
              padding: "48px 40px 40px 40px", 
              display: "flex", 
              flexDirection: "column", 
              justifyContent: "space-between",
              borderRadius: "24px",
              background: "#ffffff",
              border: "1px solid rgba(0, 0, 0, 0.05)",
              borderLeft: "5px solid #10B981",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.05)",
              position: "relative",
              overflow: "hidden"
            }}
          >
            <div>
              <div style={{ 
                fontSize: "0.75rem", 
                fontWeight: 700, 
                color: "#10B981", 
                letterSpacing: "0.15em", 
                textTransform: "uppercase", 
                marginBottom: "24px" 
              }}>
                02 &bull; PRESENT
              </div>
              <h3 style={{ 
                fontSize: "2rem", 
                fontWeight: 700, 
                letterSpacing: "-0.03em", 
                marginBottom: "16px",
                color: "var(--text-dark)"
              }}>
                Capture
              </h3>
              <p style={{ 
                color: "var(--text-dark-muted)", 
                fontSize: "1.05rem", 
                lineHeight: "1.6",
                fontWeight: 400
              }}>
                A bot joins, records, and transcribes &mdash; no live voice, no awkward "Fred is here." Capture is plumbing, not theatre.
              </p>
            </div>
            
            <div>
              <hr style={{ border: 0, borderTop: "1px solid rgba(0, 0, 0, 0.08)", margin: "32px 0 24px 0" }} />
              <ul style={{ 
                listStyle: "none", 
                padding: 0, 
                margin: 0, 
                display: "flex", 
                flexDirection: "column", 
                gap: "12px", 
                fontFamily: "var(--font-geist-mono), monospace", 
                fontSize: "0.85rem", 
                color: "#555555", 
                textAlign: "left" 
              }}>
                <li style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
                  <span style={{ color: "#10B981", flexShrink: 0, fontWeight: "bold" }}>↳</span>
                  <span>Recall.ai bot, diarized transcript</span>
                </li>
                <li style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
                  <span style={{ color: "#10B981", flexShrink: 0, fontWeight: "bold" }}>↳</span>
                  <span>Zoom &bull; Meet &bull; Teams</span>
                </li>
                <li style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
                  <span style={{ color: "#10B981", flexShrink: 0, fontWeight: "bold" }}>↳</span>
                  <span>Bot-free desktop coming soon</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Card 3: Compound / Learn */}
          <div 
            className="card-light" 
            style={{ 
              padding: "48px 40px 40px 40px", 
              display: "flex", 
              flexDirection: "column", 
              justifyContent: "space-between",
              borderRadius: "24px",
              background: "#ffffff",
              border: "1px solid rgba(0, 0, 0, 0.05)",
              borderLeft: "5px solid #F59E0B",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.05)",
              position: "relative",
              overflow: "hidden"
            }}
          >
            <div>
              <div style={{ 
                fontSize: "0.75rem", 
                fontWeight: 700, 
                color: "#F59E0B", 
                letterSpacing: "0.15em", 
                textTransform: "uppercase", 
                marginBottom: "24px" 
              }}>
                03 &bull; COMPOUND
              </div>
              <h3 style={{ 
                fontSize: "2rem", 
                fontWeight: 700, 
                letterSpacing: "-0.03em", 
                marginBottom: "16px",
                color: "var(--text-dark)"
              }}>
                Learn
              </h3>
              <p style={{ 
                color: "var(--text-dark-muted)", 
                fontSize: "1.05rem", 
                lineHeight: "1.6",
                fontWeight: 400
              }}>
                The recap arrives in your inbox: intent vs outcome, action items, commitments, your stated positions. Edit anything &mdash; your persona learns.
              </p>
            </div>
            
            <div>
              <hr style={{ border: 0, borderTop: "1px solid rgba(0, 0, 0, 0.08)", margin: "32px 0 24px 0" }} />
              <ul style={{ 
                listStyle: "none", 
                padding: 0, 
                margin: 0, 
                display: "flex", 
                flexDirection: "column", 
                gap: "12px", 
                fontFamily: "var(--font-geist-mono), monospace", 
                fontSize: "0.85rem", 
                color: "#555555", 
                textAlign: "left" 
              }}>
                <li style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
                  <span style={{ color: "#F59E0B", flexShrink: 0, fontWeight: "bold" }}>↳</span>
                  <span>11-field structured recap</span>
                </li>
                <li style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
                  <span style={{ color: "#F59E0B", flexShrink: 0, fontWeight: "bold" }}>↳</span>
                  <span>Corrections feed your persona</span>
                </li>
                <li style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
                  <span style={{ color: "#F59E0B", flexShrink: 0, fontWeight: "bold" }}>↳</span>
                  <span>Public persona answers in your voice</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
