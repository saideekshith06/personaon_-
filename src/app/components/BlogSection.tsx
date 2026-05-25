"use client";

import React from "react";
import Link from "next/link";

export default function BlogSection() {
  const posts = [
    {
      pill: "FOUNDERS",
      pillBg: "#EBF0FF",
      pillColor: "#1E50FF",
      title: "Why I Stopped Taking Meeting Notes and Started Building a Work Memory",
      excerpt: "Notes capture a single meeting; they don't capture the compounding relationship. When I stopped dumping transcriptions into Slack and built a searchable work memory with PersonaOn, our early product direction finally clicked.",
      author: "Sarah Jenkins",
      role: "Co-Founder & CEO, TechStart",
      image: "/sarah.png",
      readTime: "4 min read",
      date: "May 24, 2026",
      url: "/blog/why-i-stopped-taking-meeting-notes"
    },
    {
      pill: "SALES & SUCCESS",
      pillBg: "#ECFDF5",
      pillColor: "#10B981",
      title: "Remembering the Dog's Name: The Compounding ROI of Client Context",
      excerpt: "In enterprise sales, context is the moat. With 40+ active accounts, I can't remember every budget constraint or specific stakeholder concern from 6 months ago. Having an anticipation brief before every call feels like a superpower.",
      author: "Marcus Vance",
      role: "Enterprise Account Executive",
      image: "/marcus.png",
      readTime: "5 min read",
      date: "May 20, 2026",
      url: "/blog/remembering-the-dogs-name"
    },
    {
      pill: "STRATEGY",
      pillBg: "#FFF7ED",
      pillColor: "#C2410C", // terracotta orange accent
      title: "Your Expertise Is Worth Millions — So Why Does It Disappear When You Log Off?",
      excerpt: "Have you ever lost a client you never knew you had? Have you ever poured years into building real knowledge — and watched it go completely silent the moment you stepped away from your desk? Build a work memory.",
      author: "Lauren Sinclair",
      role: "Lead Product Strategy Analyst",
      image: "/zoe.png", // reusing avatar image for Lauren
      readTime: "4 min read",
      date: "May 15, 2026",
      url: "/blog/expertise-worth-millions"
    }
  ];

  return (
    <section id="blog" className="section-padding" style={{ background: "linear-gradient(to bottom, #ffffff, #fcfcfd)", borderTop: "1px solid rgba(0, 0, 0, 0.04)" }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "80px" }}>
          <div style={{ 
            fontSize: "0.8rem", 
            textTransform: "uppercase", 
            letterSpacing: "0.2em", 
            color: "var(--text-dark-muted)", 
            fontWeight: 600, 
            marginBottom: "16px" 
          }}>
            PERSPECTIVES
          </div>
          
          <h2 style={{ 
            fontSize: "clamp(2.5rem, 5vw, 4rem)", 
            fontWeight: 800, 
            letterSpacing: "-0.04em", 
            color: "var(--text-dark)",
            lineHeight: 1.1,
            marginBottom: "8px" 
          }}>
            Thoughts from the field.
          </h2>
          
          <h2 style={{ 
            fontSize: "clamp(2.5rem, 5vw, 4rem)", 
            fontWeight: 400, 
            fontStyle: "italic", 
            fontFamily: "'Instrument Serif', Georgia, serif", 
            color: "var(--text-light-muted)", 
            letterSpacing: "-0.02em", 
            marginBottom: "32px",
            lineHeight: 1.1 
          }}>
            Real voices, compounding value.
          </h2>
          
          <p style={{ 
            color: "var(--text-dark-muted)", 
            fontSize: "1.1rem", 
            maxWidth: "600px", 
            margin: "0 auto", 
            lineHeight: "1.6", 
            fontWeight: 400 
          }}>
            How different roles stop writing temporary meeting summaries and start building a searchable, permanent work memory.
          </p>
        </div>

        {/* Blog Post Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "32px",
          maxWidth: "1100px",
          margin: "0 auto 60px auto"
        }}>
          {posts.map((post) => (
            <Link
              key={post.title}
              href={post.url}
              style={{ display: "flex", textDecoration: "none", color: "inherit" }}
            >
              <article 
                className="card-light"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  background: "#ffffff",
                  border: "1px solid rgba(0, 0, 0, 0.05)",
                  borderRadius: "24px",
                  padding: "36px",
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.01)",
                  transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                  cursor: "pointer",
                  width: "100%"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow = "0 20px 40px rgba(0, 0, 0, 0.04)";
                  const img = e.currentTarget.querySelector(".author-img") as HTMLElement;
                  if (img) img.style.transform = "scale(1.05)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.01)";
                  const img = e.currentTarget.querySelector(".author-img") as HTMLElement;
                  if (img) img.style.transform = "scale(1)";
                }}
              >
                <div>
                {/* Pill */}
                <div style={{
                  display: "inline-block",
                  background: post.pillBg,
                  color: post.pillColor,
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  padding: "6px 12px",
                  borderRadius: "20px",
                  marginBottom: "24px"
                }}>
                  {post.pill}
                </div>

                {/* Title */}
                <h3 style={{
                  fontSize: "1.45rem",
                  fontWeight: 700,
                  lineHeight: "1.3",
                  color: "var(--text-dark)",
                  letterSpacing: "-0.02em",
                  marginBottom: "16px",
                  transition: "color 0.2s"
                }}>
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p style={{
                  fontSize: "0.95rem",
                  color: "var(--text-dark-muted)",
                  lineHeight: "1.6",
                  fontWeight: 400,
                  marginBottom: "32px"
                }}>
                  "{post.excerpt}"
                </p>
              </div>

              {/* Author & Footer */}
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: "14px",
                borderTop: "1px solid rgba(0, 0, 0, 0.05)",
                paddingTop: "24px",
                marginTop: "auto"
              }}>
                <div style={{ 
                  width: "48px", 
                  height: "48px", 
                  borderRadius: "50%", 
                  overflow: "hidden", 
                  flexShrink: 0,
                  background: "#f0f0f0",
                  border: "1px solid rgba(0,0,0,0.05)"
                }}>
                  <img 
                    src={post.image} 
                    alt={post.author} 
                    className="author-img"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)"
                    }}
                  />
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: "0.95rem", color: "var(--text-dark)" }}>{post.author}</div>
                  <div style={{ fontSize: "0.8rem", color: "var(--text-dark-muted)", marginTop: "2px" }}>{post.role}</div>
                </div>
                <div style={{ marginLeft: "auto", fontSize: "0.75rem", color: "var(--text-light-muted)", fontWeight: 500, textAlign: "right" }}>
                  <div>{post.readTime}</div>
                  <div style={{ marginTop: "2px", fontSize: "0.7rem" }}>{post.date}</div>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>

        <div style={{ textAlign: "center", marginTop: "40px" }}>
          <button 
            className="btn-outline" 
            onClick={() => window.location.href = "/blog/why-i-stopped-taking-meeting-notes"}
            style={{ 
              padding: "12px 28px", 
              borderRadius: "30px", 
              fontSize: "0.95rem",
              fontWeight: 600,
              gap: "8px",
              display: "inline-flex",
              alignItems: "center"
            }}
          >
            Read all perspectives
            <svg 
              className="btn-arrow"
              width="14" 
              height="14" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              style={{ transition: "transform 0.2s cubic-bezier(0.16, 1, 0.3, 1)" }}
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
}
