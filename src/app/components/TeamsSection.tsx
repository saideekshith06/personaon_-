"use client";

import React from "react";

export default function TeamsSection() {
  const cards = [
    {
      title: "SSO & Entitlements",
      desc: "Authenticate via Okta, Google Workspace, or Azure AD. Restrict memory access down to specific groups, teams, or client partners.",
      icon: "🔑"
    },
    {
      title: "Shared Workspace Vaults",
      desc: "Merge insights across team members while maintaining absolute personal memory draft segregation. Share what is useful, keep private calls private.",
      icon: "🏢"
    },
    {
      title: "Cross-Meeting Synthesis",
      desc: "Query the collective team brain: 'What compliance concerns did engineering-focused prospects express this week?' and get unified results.",
      icon: "🧠"
    },
    {
      title: "Conflict Alerts",
      desc: "Auto-alerts if a CSM makes a timeline commitment to Sarah Jenkins that contradicts pricing parameters set by the AE earlier.",
      icon: "⚠️"
    }
  ];

  return (
    <section id="teams" className="section-light section-padding" style={{ background: "var(--bg-light)", borderTop: "1px solid var(--border-light)", padding: "100px 0" }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))", gap: "48px", alignItems: "center", marginBottom: "60px" }}>
          <div>
            <div style={{ 
              fontSize: "0.8rem", 
              textTransform: "uppercase", 
              letterSpacing: "0.2em", 
              color: "var(--text-dark-muted)", 
              fontWeight: 600, 
              marginBottom: "16px" 
            }}>
              ORGANIZATIONAL CONTINUITY
            </div>
            <h2 style={{ 
              fontSize: "clamp(2.2rem, 4vw, 3.2rem)", 
              fontWeight: 800, 
              letterSpacing: "-0.04em", 
              color: "var(--text-dark)",
              lineHeight: 1.1
            }}>
              Sync the collective memory of your team.
            </h2>
          </div>
          <div>
            <p style={{ 
              color: "var(--text-dark-muted)", 
              fontSize: "1.15rem", 
              lineHeight: "1.6",
              fontWeight: 400 
            }}>
              Individually, PersonaOn is a second brain. For teams, it becomes the ultimate alignment infrastructure. Sync prospects, integrations, design objections, and client commitments across sales, success, and product effortlessly.
            </p>
          </div>
        </div>

        {/* 2x2 Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "24px",
          maxWidth: "1100px",
          margin: "0 auto"
        }}>
          {cards.map((card, idx) => (
            <div 
              key={idx}
              className="team-card-hover"
              style={{
                background: "#ffffff",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                borderRadius: "20px",
                padding: "36px",
                transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                display: "flex",
                flexDirection: "column",
                gap: "16px"
              }}
            >
              <div style={{
                fontSize: "1.5rem",
                width: "44px",
                height: "44px",
                background: "var(--bg-gray)",
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}>
                {card.icon}
              </div>
              <div>
                <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "var(--text-dark)", marginBottom: "8px" }}>
                  {card.title}
                </h3>
                <p style={{ fontSize: "0.95rem", color: "var(--text-dark-muted)", lineHeight: "1.5", fontWeight: 400 }}>
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      <style jsx>{`
        .team-card-hover:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.03);
          border-color: rgba(0, 110, 97, 0.2) !important;
        }
      `}</style>
    </section>
  );
}
