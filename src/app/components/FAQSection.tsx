"use client";

import React, { useState } from "react";

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0); // open first by default

  const faqs = [
    {
      q: "What makes PersonaOn different from standard meeting summarizers?",
      a: "Commodity bots simply transcribe voice and send a generic bulleted summary post-call. PersonaOn is operational memory. It connects multiple calls over quarters, recognizing recurring stakeholders, linking commitments, carrying forward action items automatically, and anticipating project blockers before you walk into the room."
    },
    {
      q: "Does my conversation history or notes train any shared AI models?",
      a: "Absolutely not. Your privacy is our core infrastructure rule. All indexed memory records, calendars, and transcripts are strictly sandboxed at the workspace boundary. No external foundation models are trained on your strategic operational data."
    },
    {
      q: "Can I selectively choose what gets captured and indexed?",
      a: "Yes. You have granular control over calendar synchronization. You can whitelist specific client labels, ignore internal standups, pause active capture during sensitive blocks, and wipe any memory vault logs completely at any moment."
    },
    {
      q: "How does the relationship intelligence layer work across multiple months?",
      a: "Rather than treating each meeting as a silo, PersonaOn maps contacts to persistent customer profile dossiers. When Sarah Jenkins mentions a Lever ATS compliance roadblock in week 1, the system flags it during commercial scoping in week 4, ensuring you never miss a carry-forward agreement."
    },
    {
      q: "Is there support for enterprise SSO, custom domains, and CRM integrations?",
      a: "Yes. Our Business plan supports custom domain routing, SSO authentication, direct CRM sync pipelines (HubSpot, Salesforce, etc.), and custom bot integrations with priority SLAs."
    }
  ];

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="section-gray section-padding" style={{ background: "var(--bg-gray)", borderTop: "1px solid var(--border-light)", padding: "100px 0" }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <div style={{ 
            fontSize: "0.8rem", 
            textTransform: "uppercase", 
            letterSpacing: "0.2em", 
            color: "var(--text-dark-muted)", 
            fontWeight: 600, 
            marginBottom: "16px" 
          }}>
            COMMON QUESTIONS
          </div>
          <h2 style={{ 
            fontSize: "clamp(2.2rem, 4.5vw, 3.5rem)", 
            fontWeight: 800, 
            letterSpacing: "-0.04em", 
            color: "var(--text-dark)",
            lineHeight: 1.1,
            marginBottom: "20px"
          }}>
            Frequently asked details.
          </h2>
          <p style={{ 
            color: "var(--text-dark-muted)", 
            fontSize: "1.15rem", 
            maxWidth: "600px", 
            margin: "0 auto", 
            lineHeight: "1.6",
            fontWeight: 400 
          }}>
            Everything you need to understand about security, operational memory, and setup mechanics.
          </p>
        </div>

        {/* Accordions */}
        <div style={{ maxWidth: "800px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "16px" }}>
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div 
                key={idx}
                style={{
                  background: "#ffffff",
                  border: "1px solid rgba(0, 0, 0, 0.05)",
                  borderRadius: "16px",
                  overflow: "hidden",
                  boxShadow: isOpen ? "0 10px 20px rgba(0,0,0,0.015)" : "none",
                  transition: "var(--transition-smooth)"
                }}
              >
                {/* Header Button */}
                <button
                  onClick={() => toggle(idx)}
                  style={{
                    width: "100%",
                    padding: "24px 32px",
                    background: "none",
                    border: "none",
                    textAlign: "left",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    cursor: "pointer",
                    outline: "none"
                  }}
                >
                  <span style={{ fontSize: "1.05rem", fontWeight: 700, color: "var(--text-dark)", paddingRight: "20px" }}>
                    {faq.q}
                  </span>
                  
                  {/* Plus/Minus Indicator */}
                  <span style={{ 
                    fontSize: "1.4rem", 
                    color: "var(--text-dark-muted)", 
                    fontWeight: 300,
                    transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                    transition: "transform 0.3s ease",
                    display: "inline-block"
                  }}>
                    +
                  </span>
                </button>

                {/* Answer Content */}
                <div style={{
                  maxHeight: isOpen ? "200px" : "0px",
                  overflow: "hidden",
                  transition: "max-height 0.35s cubic-bezier(0.16, 1, 0.3, 1), padding 0.3s ease",
                  padding: isOpen ? "0 32px 32px 32px" : "0 32px"
                }}>
                  <p style={{ fontSize: "0.98rem", color: "var(--text-dark-muted)", lineHeight: "1.6", fontWeight: 400 }}>
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
