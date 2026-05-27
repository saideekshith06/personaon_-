import React from "react";

export default function ICPSections() {
  const personas = [
    {
      title: "Founders",
      description: "Keep track of investor feedback, early customer requests, and strategic decisions across hundreds of scattered calls.",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1E50FF" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
          <path d="M4.5 16.5c-1.5 1.25-2.5 3.5-2.5 3.5s2.25-1 3.5-2.5L18 5l-3-3z"></path>
          <path d="m12 12 4 4"></path>
          <path d="m16 8 2 2"></path>
          <path d="M9 15c-2.5 0-4.5-2-4.5-4.5"></path>
        </svg>
      )
    },
    {
      title: "Consultants",
      description: "Capture exact client phrasing and unearth hidden requirements to deliver pitch-perfect proposals every time.",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1E50FF" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
          <circle cx="12" cy="12" r="10"></circle>
          <circle cx="12" cy="12" r="6"></circle>
          <circle cx="12" cy="12" r="2"></circle>
        </svg>
      )
    },
    {
      title: "Sales & Account Managers",
      description: "Remember the name of their dog, their Q3 budget constraints, and exactly what blocked the deal last time.",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1E50FF" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      )
    },
    {
      title: "Managers & Executives",
      description: "Recall 1:1 promises, follow-up on action items effortlessly, and stay aligned with your direct reports.",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1E50FF" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
          <path d="M3 3v18h18"></path>
          <path d="m18.7 8-5.1 5.2-2.8-2.7L7 14.3"></path>
        </svg>
      )
    },
    {
      title: "Recruiters",
      description: "Easily compare candidate nuances, technical preferences, and compensation expectations post-interview.",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1E50FF" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <circle cx="19" cy="11" r="3"></circle>
          <path d="m21 13 3 3"></path>
        </svg>
      )
    },
    {
      title: "Investors",
      description: "Remember pitch details, valuation promises, founder commitments, and key growth metrics across quarters of introductory pitches.",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1E50FF" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
          <path d="M6 3h12l4 6-10 12L2 9z"></path>
          <path d="M11 3 8 9l4 12 4-12-3-6"></path>
          <path d="M2 9h20"></path>
        </svg>
      )
    }
  ];

  return (
    <section 
      id="who-it-s-for" 
      className="section-light section-padding bg-dot-light" 
      style={{ 
        position: "relative", 
        overflow: "hidden", 
        borderTop: "1px solid var(--border-light)", 
        padding: "100px 0" 
      }}
    >
      {/* Ambient drifting blooms for visual volume */}
      <div className="ambient-glow ambient-blue animate-drift-1" style={{ top: "10%", left: "5%", width: "450px", height: "450px" }} />
      <div className="ambient-glow ambient-purple animate-drift-2" style={{ bottom: "10%", right: "5%", width: "450px", height: "450px" }} />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        
        {/* Title */}
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <div style={{ 
            fontSize: "0.8rem", 
            textTransform: "uppercase", 
            letterSpacing: "0.2em", 
            color: "#1E50FF", 
            fontWeight: 700, 
            marginBottom: "16px" 
          }}>
            USER POSITIONING
          </div>
          <h2 style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)", marginBottom: "16px", fontWeight: 800, letterSpacing: "-0.04em", color: "var(--text-dark)" }}>
            Built for people whose <br/>
            <span style={{ fontStyle: "italic", fontWeight: 400 }}>time</span> is the product.
          </h2>
          <p style={{ color: "var(--text-dark-muted)", maxWidth: "600px", margin: "0 auto", fontSize: "1.05rem", lineHeight: "1.6" }}>
            PersonaOn is the ultimate work memory for roles where context is everything. Stop forgetting the details that matter.
          </p>
        </div>

        {/* Blueprint Layout Grid Wrapper with Corner Crosshairs */}
        <div style={{ position: "relative", maxWidth: "1040px", margin: "0 auto", padding: "16px" }}>
          
          {/* Blueprint Corner Crosshairs (+) */}
          <div style={{ position: "absolute", top: 0, left: 0, fontSize: "1.1rem", color: "rgba(0,0,0,0.18)", fontFamily: "monospace", fontWeight: 700 }}>+</div>
          <div style={{ position: "absolute", top: 0, right: 0, fontSize: "1.1rem", color: "rgba(0,0,0,0.18)", fontFamily: "monospace", fontWeight: 700 }}>+</div>
          <div style={{ position: "absolute", bottom: 0, left: 0, fontSize: "1.1rem", color: "rgba(0,0,0,0.18)", fontFamily: "monospace", fontWeight: 700 }}>+</div>
          <div style={{ position: "absolute", bottom: 0, right: 0, fontSize: "1.1rem", color: "rgba(0,0,0,0.18)", fontFamily: "monospace", fontWeight: 700 }}>+</div>

          {/* 3x2 Grid for the 6 ICPs */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "24px"
            }}
          >
            {personas.map((p) => (
              <div 
                key={p.title} 
                className="card-light-glow" 
                style={{ 
                  padding: "32px", 
                  background: "rgba(255,255,255,0.85)", 
                  border: "1px solid rgba(0,0,0,0.05)", 
                  borderRadius: "16px",
                  backdropFilter: "blur(12px)"
                }}
              >
                <h4 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "12px", display: "flex", alignItems: "center", gap: "10px", color: "var(--text-dark)" }}>
                  {p.icon}
                  {p.title}
                </h4>
                <p style={{ color: "var(--text-dark-muted)", fontSize: "0.95rem", lineHeight: "1.6", fontWeight: 400 }}>
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
