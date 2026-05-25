"use client";

import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function BlogPost() {
  return (
    <div style={{ background: "#ffffff", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      {/* Header Navigation */}
      <Navbar />

      {/* Main Content Area */}
      <main style={{ flexGrow: 1, padding: "80px 0" }}>
        <article className="container" style={{ maxWidth: "760px", margin: "0 auto" }}>
          
          {/* Article Header */}
          <header style={{ textAlign: "center", marginBottom: "48px" }}>
            
            {/* Title */}
            <h1 style={{
              fontSize: "clamp(2.5rem, 5vw, 4.2rem)",
              fontWeight: 700,
              fontFamily: "'Instrument Serif', Georgia, serif",
              color: "#111111",
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              marginBottom: "32px",
              textAlign: "center"
            }}>
              Remembering the Dog's Name: The Compounding ROI of Client Context
            </h1>

            {/* Author Block */}
            <div style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              marginBottom: "16px",
              flexWrap: "wrap"
            }}>
              {/* M Circle Avatar */}
              <div style={{
                width: "28px",
                height: "28px",
                borderRadius: "50%",
                background: "#10B981", // green from card theme
                color: "#ffffff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 700,
                fontSize: "0.85rem"
              }}>
                M
              </div>

              <div style={{ fontSize: "0.95rem", color: "#666666", fontWeight: 500 }}>
                By <span style={{ color: "#111111", fontWeight: 600 }}>Marcus Vance</span>, Enterprise Account Executive
              </div>

              <span style={{ color: "#d0d0d0" }}>&bull;</span>

              <div style={{ fontSize: "0.95rem", color: "#666666" }}>
                5 Min Read
              </div>

              <span style={{ color: "#d0d0d0" }}>&bull;</span>
            </div>

            {/* Reads Pill */}
            <div style={{ display: "inline-flex", justifyContent: "center" }}>
              <div style={{
                background: "#ECFDF5", // soft light green background
                color: "#10B981", // green text
                fontSize: "0.8rem",
                fontWeight: 700,
                padding: "6px 14px",
                borderRadius: "30px",
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                border: "1px solid rgba(16, 185, 129, 0.08)"
              }}>
                <span>🔥</span> 1,050 Reads This Week
              </div>
            </div>

          </header>

          {/* Article Body */}
          <div style={{
            fontSize: "1.15rem",
            lineHeight: "1.75",
            color: "#222222",
            fontWeight: 400,
            fontFamily: "var(--font-sans), sans-serif"
          }}>
            
            {/* Lead Paragraph with Drop Cap E */}
            <p style={{ marginBottom: "28px", fontSize: "1.2rem" }}>
              <span style={{
                float: "left",
                fontSize: "4.8rem",
                lineHeight: "3.8rem",
                fontWeight: 700,
                color: "#10B981", // green drop cap
                marginRight: "10px",
                marginTop: "4px",
                fontFamily: "'Instrument Serif', Georgia, serif"
              }}>
                E
              </span>
              nterprise sales is not about pitching features; it's about managing a web of compounding relationships. With dozens of active accounts, recalling every budget blocker, custom domain nuance, and personal connection is impossible without a dedicated work memory. The small details are the big details.
            </p>

            <p style={{ marginBottom: "36px" }}>
              Clients buy from people who listen. But when you are managing over 40 active accounts, the details of your last call begin to bleed together. You forget the name of their dog, or that their Q3 budget is locked until the second week of September, or that they had an awkward compliance issue with zoom bots.
            </p>

            {/* Subsection 1 */}
            <h2 style={{
              fontSize: "2rem",
              fontWeight: 700,
              fontFamily: "'Instrument Serif', Georgia, serif",
              color: "#111111",
              marginTop: "48px",
              marginBottom: "20px",
              lineHeight: "1.2",
              letterSpacing: "-0.02em"
            }}>
              The Compounding Value of Personal Details
            </h2>

            <p style={{ marginBottom: "28px" }}>
              In account management, relationship equity is built in fractions. Remembering that a stakeholder was going on a trip to Denver, or that they preferred custom domains over subdomains, changes a conversation from a transaction to a partnership.
            </p>

            <p style={{ marginBottom: "28px" }}>
              With **PersonaOn**, these key details are automatically parsed and structured into our team’s shared work memory. 
            </p>

            <p style={{ marginBottom: "36px" }}>
              Instead of searching through random notes or doing awkward pre-call recaps with team members, our calendar sync fetches our history instantly.
            </p>

            {/* Subsection 2 */}
            <h2 style={{
              fontSize: "2rem",
              fontWeight: 700,
              fontFamily: "'Instrument Serif', Georgia, serif",
              color: "#111111",
              marginTop: "48px",
              marginBottom: "20px",
              lineHeight: "1.2",
              letterSpacing: "-0.02em"
            }}>
              The Power of the 10-Second Brief
            </h2>

            <p style={{ marginBottom: "28px" }}>
              The anticipation brief is our team’s absolute superpower.
            </p>

            <p style={{ marginBottom: "28px" }}>
              Before each call, I get a clear, concise brief in my inbox detailing who I am meeting, their stated positions, historical budget constraints, and carry-forward context from our prior recaps. I know exactly what compliance points Sarah Jenkins agreed to three months ago, and what blocked the deal last Tuesday.
            </p>

            <p style={{ marginBottom: "36px" }}>
              It makes our conversations feel fluid, seamless, and deeply human. Our clients feel heard, and our deals compound faster.
            </p>

            {/* Bottom Call-to-Action Card */}
            <div style={{
              background: "#111111",
              borderRadius: "24px",
              padding: "48px",
              color: "#ffffff",
              textAlign: "center",
              marginTop: "60px",
              position: "relative",
              overflow: "hidden",
              boxShadow: "0 20px 40px rgba(0,0,0,0.08)"
            }}>
              {/* Glow background */}
              <div style={{
                position: "absolute",
                top: "-50%",
                left: "-50%",
                width: "200%",
                height: "200%",
                background: "radial-gradient(circle at center, rgba(16, 185, 129, 0.15) 0%, transparent 60%)",
                pointerEvents: "none"
              }} />

              <div style={{ position: "relative", zIndex: 1 }}>
                <h3 style={{
                  fontSize: "2.2rem",
                  fontWeight: 700,
                  fontFamily: "'Instrument Serif', Georgia, serif",
                  marginBottom: "16px",
                  color: "#ffffff"
                }}>
                  Never forget a client detail.
                </h3>
                <p style={{
                  color: "var(--text-light-muted)",
                  fontSize: "1.05rem",
                  maxWidth: "500px",
                  margin: "0 auto 32px auto",
                  lineHeight: "1.6"
                }}>
                  Compete on context. Try PersonaOn for your sales or customer success team in 60 seconds.
                </p>
                <button className="btn-black" style={{ 
                  background: "#10B981", // green button
                  color: "#ffffff",
                  padding: "16px 36px", 
                  fontSize: "1rem", 
                  borderRadius: "30px",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  border: "none",
                  cursor: "pointer",
                  fontWeight: 600,
                  transition: "background 0.2s"
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = "#059669"}
                onMouseLeave={(e) => e.currentTarget.style.background = "#10B981"}
                >
                  Start Free with Google
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </button>
              </div>
            </div>

          </div>
        </article>
      </main>

      {/* Footer Area */}
      <Footer />
    </div>
  );
}
