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
              Why I Stopped Taking Meeting Notes and Started Building a Work Memory
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
              {/* S Circle Avatar */}
              <div style={{
                width: "28px",
                height: "28px",
                borderRadius: "50%",
                background: "#1E50FF", // blue from card theme
                color: "#ffffff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 700,
                fontSize: "0.85rem"
              }}>
                S
              </div>

              <div style={{ fontSize: "0.95rem", color: "#666666", fontWeight: 500 }}>
                By <span style={{ color: "#111111", fontWeight: 600 }}>Sarah Jenkins</span>, Co-Founder & CEO, TechStart
              </div>

              <span style={{ color: "#d0d0d0" }}>&bull;</span>

              <div style={{ fontSize: "0.95rem", color: "#666666" }}>
                4 Min Read
              </div>

              <span style={{ color: "#d0d0d0" }}>&bull;</span>
            </div>

            {/* Reads Pill */}
            <div style={{ display: "inline-flex", justifyContent: "center" }}>
              <div style={{
                background: "#EBF0FF", // soft light blue background
                color: "#1E50FF", // blue text
                fontSize: "0.8rem",
                fontWeight: 700,
                padding: "6px 14px",
                borderRadius: "30px",
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                border: "1px solid rgba(30, 80, 255, 0.08)"
              }}>
                <span>🔥</span> 890 Reads This Week
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
            
            {/* Lead Paragraph with Drop Cap I */}
            <p style={{ marginBottom: "28px", fontSize: "1.2rem" }}>
              <span style={{
                float: "left",
                fontSize: "4.8rem",
                lineHeight: "3.8rem",
                fontWeight: 700,
                color: "#1E50FF", // blue drop cap
                marginRight: "10px",
                marginTop: "4px",
                fontFamily: "'Instrument Serif', Georgia, serif"
              }}>
                I
              </span>
              used to think meeting notes were the hallmark of a disciplined founder. We had transcription bots join every call, dumping thousands of words into Slack. But here's the truth: transcription doesn't solve memory. I was reading summaries, but we were still losing the crucial client context that makes early product direction click.
            </p>

            <p style={{ marginBottom: "36px" }}>
              Early-stage startups live and die by alignment. When you are talking to dozens of beta testers, early partners, and potential investors, your brain gets overwhelmed with unstructured data. A summary tells you what happened in a single meeting. But it won't tell you how a user’s opinion changed from a month ago, or how their integration roadmap conflicts with another client’s budget blocks.
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
              The Illusion of Passive Capture
            </h2>

            <p style={{ marginBottom: "28px" }}>
              Notes are fundamentally passive. They require you to remember that they exist, open them, and parse through the lines to recall details. They are files, not memory.
            </p>

            <p style={{ marginBottom: "28px" }}>
              I realized this when we were preparing a critical product roadmap pitch for our lead investor. I knew we had discussed integration constraints with three separate beta users, but finding the exact stated positions meant searching through dozens of docs. We wasted hours compiling details that should have been at our fingertips.
            </p>

            <p style={{ marginBottom: "36px" }}>
              Passive capture is plumbing. Active work memory is the actual product.
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
              How PersonaOn Compounded Our Focus
            </h2>

            <p style={{ marginBottom: "28px" }}>
              When we implemented **PersonaOn**, the dynamic changed completely. Instead of notes, we built a compounding work memory vault. 
            </p>

            <p style={{ marginBottom: "28px" }}>
              Now, 10 minutes before every user call, I receive an automated anticipation brief. It outlines exactly who I'm meeting, what their main objections were last time, and carrying forward compliance/domain details from our prior recaps. It connects the dots across weeks of scattered dialogue.
            </p>

            <p style={{ marginBottom: "36px" }}>
              When I query our vault, I can ask: *“What were the main objections Sarah and Hemanth had regarding our dashboard routing last month?”* Within seconds, it answers in their direct voices, grounded purely in historical conversations. No hallucinations. No guess work.
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
                background: "radial-gradient(circle at center, rgba(30, 80, 255, 0.15) 0%, transparent 60%)",
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
                  Start building startup memory.
                </h3>
                <p style={{
                  color: "var(--text-light-muted)",
                  fontSize: "1.05rem",
                  maxWidth: "500px",
                  margin: "0 auto 32px auto",
                  lineHeight: "1.6"
                }}>
                  Unify your scattered user interviews and team calls into a searchable active knowledge base in 60 seconds.
                </p>
                <button className="btn-black" style={{ 
                  background: "#1E50FF", // blue button
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
                onMouseEnter={(e) => e.currentTarget.style.background = "#003bfa"}
                onMouseLeave={(e) => e.currentTarget.style.background = "#1E50FF"}
                >
                  Connect Calendar Free
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
