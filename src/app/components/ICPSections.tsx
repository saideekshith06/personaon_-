import React from "react";

export default function ICPSections() {
  const personas = [
    {
      title: "Founders",
      description: "Keep track of investor feedback, early customer requests, and strategic decisions across hundreds of scattered calls."
    },
    {
      title: "Consultants",
      description: "Capture exact client phrasing and unearth hidden requirements to deliver pitch-perfect proposals every time."
    },
    {
      title: "Sales & Account Managers",
      description: "Remember the name of their dog, their Q3 budget constraints, and exactly what blocked the deal last time."
    },
    {
      title: "Managers & Executives",
      description: "Recall 1:1 promises, follow-up on action items effortlessly, and stay aligned with your direct reports."
    },
    {
      title: "Recruiters",
      description: "Easily compare candidate nuances, technical preferences, and compensation expectations post-interview."
    },
    {
      title: "Creators & Trainers",
      description: "Synthesize audience feedback, FAQ patterns, and coaching sessions into actionable content roadmaps."
    }
  ];

  return (
    <section id="who-it-s-for" className="section-light section-padding" style={{ background: "#ffffff" }}>
      <div className="container">
        
        {/* Title */}
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <h2 style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)", marginBottom: "16px", fontWeight: 800, letterSpacing: "-0.04em", color: "var(--text-dark)" }}>
            Built for people whose <br/>
            <span style={{ fontStyle: "italic", fontWeight: 400 }}>time</span> is the product.
          </h2>
          <p style={{ color: "var(--text-dark-muted)", maxWidth: "600px", margin: "0 auto", fontSize: "1.05rem", lineHeight: "1.6" }}>
            PersonaOn is the ultimate work memory for roles where context is everything. Stop forgetting the details that matter.
          </p>
        </div>

        {/* 3x2 Grid for the 6 ICPs */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "32px",
            maxWidth: "1000px",
            margin: "0 auto"
          }}
        >
          {personas.map((p) => (
            <div key={p.title} className="card-light" style={{ padding: "32px", border: "1px solid var(--border-light)", borderRadius: "16px" }}>
              <h4 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "12px", display: "flex", alignItems: "center", gap: "8px", color: "var(--text-dark)" }}>
                <span style={{ width: "8px", height: "8px", background: "#e0e0e0", borderRadius: "50%" }}></span>
                {p.title}
              </h4>
              <p style={{ color: "var(--text-dark-muted)", fontSize: "0.95rem", lineHeight: "1.6" }}>
                {p.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
