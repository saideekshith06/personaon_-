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
              Your Expertise Is Worth Millions — So Why Does It Disappear When You Log Off?
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
              {/* L Circle Avatar */}
              <div style={{
                width: "28px",
                height: "28px",
                borderRadius: "50%",
                background: "#C2410C", // terracotta orange from screenshot
                color: "#ffffff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 700,
                fontSize: "0.85rem"
              }}>
                L
              </div>

              <div style={{ fontSize: "0.95rem", color: "#666666", fontWeight: 500 }}>
                By <span style={{ color: "#111111", fontWeight: 600 }}>Lauren Sinclair</span>, Lead Product Strategy Analyst
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
                background: "#FFF7ED", // soft light orange/yellow background
                color: "#C2410C", // terracotta text color
                fontSize: "0.8rem",
                fontWeight: 700,
                padding: "6px 14px",
                borderRadius: "30px",
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                border: "1px solid rgba(194, 65, 12, 0.08)"
              }}>
                <span>🔥</span> 1,240 Reads This Week
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
            
            {/* Lead Paragraph with Drop Cap H */}
            <p style={{ marginBottom: "28px", fontSize: "1.2rem" }}>
              <span style={{
                float: "left",
                fontSize: "4.8rem",
                lineHeight: "3.8rem",
                fontWeight: 700,
                color: "#C2410C", // terracotta drop cap
                marginRight: "10px",
                marginTop: "4px",
                fontFamily: "'Instrument Serif', Georgia, serif"
              }}>
                H
              </span>
              ave you ever lost a client you never knew you had? Have you ever poured years into building real knowledge — and watched it go completely silent the moment you stepped away from your desk? Have you ever wondered why the most valuable thing about you can't show up for you when you're not in the room? I have. And for a long time, I didn't even know I had a problem.
            </p>

            <p style={{ marginBottom: "36px" }}>
              We've been conditioned to think that our primary limit is time. So we try to squeeze more out of it. We buy note-taking widgets, transcript bots, and calendar automations. But here's the quiet truth: transcribing a conversation isn't the same as capturing its intelligence. A meeting note is a static document. It lives in a folder, isolated, waiting for someone to manually open it. It doesn't compound. It doesn't connect.
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
              The Night I Lost the Deal I Never Knew About
            </h2>

            <p style={{ marginBottom: "28px" }}>
              Last quarter, we had a major enterprise deal on the table. I spent three weeks with the client’s team, understanding their custom domain constraints, their integration bottlenecks, and their specific concerns about compliance. We spoke in details, discussed exact strategic positions, and built high-conviction trust.
            </p>

            <p style={{ marginBottom: "28px" }}>
              The following Monday, I took my first true day off in six months. That same afternoon, the client sent a follow-up inquiry with a critical question regarding our SLA framework. A colleague jumped on the call to cover for me. Armed with only a Google Doc of meeting summaries, they answered the question logically, but missed the entire context of our prior compliance negotiations. The client’s confidence wavered, the momentum stalled, and by the time I logged back in on Wednesday, the channel had gone cold.
            </p>

            <p style={{ marginBottom: "36px" }}>
              My years of experience and deep relationship-building were trapped inside my head. The moment I logged off, my value to the organization became inaccessible. I was the ultimate bottleneck.
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
              Notes Remember Meetings. PersonaOn Builds Your Work Memory.
            </h2>

            <p style={{ marginBottom: "28px" }}>
              This is where standard transcriptions fail. They focus on the action of *recording* instead of the quality of *remembering*.
            </p>

            <p style={{ marginBottom: "28px" }}>
              When you use **PersonaOn**, your meetings are transformed from files into a searchable, permanent work memory. It connects the dots between a compliance discussion last month and a custom domain bottleneck this week. It acts as an interactive assistant that knows precisely how you think, what you've promised, and the exact constraints of every account.
            </p>

            <p style={{ marginBottom: "36px" }}>
              If my colleague had been able to query my PersonaOn memory vault, they would have seen my exact stated positions and handled that SLA compliance question with the same nuance and authority that took me three weeks to establish. They wouldn't have been reading a dry transcript; they would have been drawing from my active work memory.
            </p>

            {/* Subsection 3 */}
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
              Compounding Your Presence
            </h2>

            <p style={{ marginBottom: "28px" }}>
              Your expertise is the product. The meetings are happening anyway. The challenge is letting that expertise work for you even when you're not in the room. By linking your Google + Outlook calendars to PersonaOn, you feed your vault with high-fidelity, real-world customer context. It compounds your value, making your unique insights reachable, diarized, and active 24/7.
            </p>

            <p style={{ marginBottom: "48px" }}>
              Stop letting your knowledge dissolve the second you hang up. Let your notes compile. Let your relationships grow. Build a work memory that lasts.
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
                background: "radial-gradient(circle at center, rgba(194, 65, 12, 0.15) 0%, transparent 60%)",
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
                  Never let context slip away again.
                </h3>
                <p style={{
                  color: "var(--text-light-muted)",
                  fontSize: "1.05rem",
                  maxWidth: "500px",
                  margin: "0 auto 32px auto",
                  lineHeight: "1.6"
                }}>
                  Connect your calendar in 60 seconds. Start building your searchable, permanent work memory today.
                </p>
                <button className="btn-black" style={{ 
                  background: "#C2410C", // terracotta theme button
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
                onMouseEnter={(e) => e.currentTarget.style.background = "#EA580C"}
                onMouseLeave={(e) => e.currentTarget.style.background = "#C2410C"}
                >
                  Start free with calendar
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
