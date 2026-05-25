"use client";

import React, { useState } from "react";

export default function PricingSection() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly");

  const plans = {
    free: {
      title: "FREE",
      price: "$0",
      desc: "Forever — no card needed",
      features: [
        "500 conversations / month",
        "Public profile page",
        "1 persona",
        "Basic analytics"
      ],
      cta: "Start free",
      isPopular: false,
      btnBg: "#f5f5f7",
      btnText: "var(--text-dark)"
    },
    pro: {
      title: "PRO",
      price: billingCycle === "monthly" ? "$14.99" : "$12.49",
      desc: billingCycle === "monthly" ? "14-day free trial" : "14-day free trial · Billed annually",
      features: [
        "5,000 conversations / month",
        "30 voice minutes / month",
        "Unlimited knowledge sources",
        "Widget embed + AI lead capture",
        "Share Studio (QR, social, email signature, LinkedIn)",
        "Public profile page (personaon.com/your-handle)",
        "Calendar booking handoff",
        "Insights & analytics",
        "Remove PersonaOn branding"
      ],
      cta: "Start 14-day trial",
      isPopular: true,
      btnBg: "#006E61", // Beautiful dark teal/cyan matching screenshot
      btnText: "#ffffff"
    },
    business: {
      title: "BUSINESS",
      price: "Custom",
      desc: "For teams + agencies",
      features: [
        "Everything in Pro",
        "Meeting bot (Recall.ai + AI summary)",
        "Custom domain",
        "Team seats + SSO",
        "CRM sync (HubSpot, Salesforce)",
        "Priority support + SLA"
      ],
      cta: "Contact us",
      isPopular: false,
      btnBg: "#f2efe9", // light cream background matching screenshot
      btnText: "var(--text-dark)"
    }
  };

  return (
    <section id="pricing" className="section-light section-padding" style={{ background: "var(--bg-light)", borderTop: "1px solid var(--border-light)", padding: "100px 0" }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "50px" }}>
          <h2 style={{ 
            fontSize: "clamp(2.5rem, 5vw, 3.8rem)", 
            fontWeight: 800, 
            letterSpacing: "-0.04em", 
            color: "var(--text-dark)",
            marginBottom: "16px"
          }}>
            Your AI persona, working 24/7.
          </h2>
          <p style={{ 
            color: "var(--text-dark-muted)", 
            fontSize: "1.15rem", 
            fontWeight: 400,
            marginBottom: "32px"
          }}>
            Try free for 14 days. Cancel anytime. No setup fees.
          </p>

          {/* Toggle buttons */}
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            background: "#f5f5f7",
            padding: "5px",
            borderRadius: "30px",
            border: "1px solid rgba(0,0,0,0.04)"
          }}>
            <button
              onClick={() => setBillingCycle("monthly")}
              style={{
                padding: "8px 20px",
                borderRadius: "20px",
                border: "none",
                background: billingCycle === "monthly" ? "var(--bg-dark)" : "transparent",
                color: billingCycle === "monthly" ? "#ffffff" : "var(--text-dark-muted)",
                cursor: "pointer",
                fontWeight: 600,
                fontSize: "0.88rem",
                transition: "all 0.2s ease"
              }}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle("annual")}
              style={{
                padding: "8px 20px",
                borderRadius: "20px",
                border: "none",
                background: billingCycle === "annual" ? "var(--bg-dark)" : "transparent",
                color: billingCycle === "annual" ? "#ffffff" : "var(--text-dark-muted)",
                cursor: "pointer",
                fontWeight: 600,
                fontSize: "0.88rem",
                transition: "all 0.2s ease"
              }}
            >
              Annual <span style={{ color: "#006E61", fontSize: "0.8rem", marginLeft: "4px" }}>save 17%</span>
            </button>
          </div>
        </div>

        {/* 3 Cards Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "32px",
          maxWidth: "1100px",
          margin: "0 auto",
          alignItems: "stretch"
        }}>
          {Object.entries(plans).map(([key, plan]) => (
            <div
              key={key}
              style={{
                background: "#ffffff",
                borderRadius: "24px",
                border: plan.isPopular ? "2px solid #006E61" : "1px solid var(--border-light)",
                padding: "40px 32px",
                position: "relative",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                boxShadow: plan.isPopular ? "0 20px 45px rgba(0, 110, 97, 0.06)" : "0 4px 20px rgba(0, 0, 0, 0.01)",
                transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)"
              }}
            >
              {plan.isPopular && (
                <span style={{
                  position: "absolute",
                  top: "-14px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  background: "#006E61",
                  color: "#ffffff",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  padding: "5px 16px",
                  borderRadius: "20px",
                  letterSpacing: "0.05em"
                }}>
                  Most popular
                </span>
              )}

              <div>
                <div style={{ fontSize: "0.85rem", fontWeight: 700, color: plan.isPopular ? "#006E61" : "var(--text-dark-muted)", letterSpacing: "0.1em", marginBottom: "16px" }}>
                  {plan.title}
                </div>
                
                <div style={{ display: "flex", alignItems: "baseline", gap: "4px", marginBottom: "8px" }}>
                  <span style={{ fontSize: "2.8rem", fontWeight: 800, color: "var(--text-dark)", letterSpacing: "-0.02em" }}>
                    {plan.price}
                  </span>
                  {plan.price !== "Custom" && plan.price !== "$0" && (
                    <span style={{ fontSize: "0.95rem", color: "var(--text-dark-muted)" }}>
                      /month
                    </span>
                  )}
                </div>

                <div style={{ fontSize: "0.9rem", color: "var(--text-dark-muted)", marginBottom: "32px" }}>
                  {plan.desc}
                </div>

                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 40px 0", display: "flex", flexDirection: "column", gap: "14px" }}>
                  {plan.features.map((feat, i) => (
                    <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "0.92rem", color: "var(--text-dark)", lineHeight: "1.4" }}>
                      <span style={{ color: "#006E61", fontWeight: "bold" }}>✓</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <button style={{
                  width: "100%",
                  padding: "16px 24px",
                  borderRadius: "30px",
                  border: "none",
                  background: plan.btnBg,
                  color: plan.btnText,
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  cursor: "pointer",
                  transition: "opacity 0.2s",
                  boxShadow: plan.isPopular ? "0 4px 15px rgba(0, 110, 97, 0.2)" : "none"
                }}>
                  {plan.cta}
                </button>
                {plan.isPopular && (
                  <div style={{ textAlign: "center", marginTop: "12px", fontSize: "0.78rem", color: "var(--text-dark-muted)" }}>
                    Or try 7 days, no card needed —
                  </div>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
