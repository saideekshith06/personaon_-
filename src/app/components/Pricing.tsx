"use client";

import React, { useState } from "react";

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  const tiers = [
    {
      name: "Starter",
      description: "Ideal for solo builders and freelancers validating the tool.",
      priceMonthly: 19,
      priceAnnual: 15,
      features: [
        "15 Meeting Captures / month",
        "Unlimited Search Queries",
        "30-day Memory Retention",
        "Web Dashboard Access",
        "Community Support",
      ],
      cta: "Start Free Trial",
      popular: false,
      btnClass: "btn-outline",
    },
    {
      name: "Professional",
      description: "Perfect for scaling teams and account managers.",
      priceMonthly: 49,
      priceAnnual: 39,
      features: [
        "Unlimited Meeting Captures",
        "Unlimited Search Queries",
        "Infinite Memory Retention",
        "Slack & Notion Integrations",
        "Automated Follow-up Drafting",
        "Priority Support",
      ],
      cta: "Go Professional",
      popular: true,
      btnClass: "btn-black",
    },
    {
      name: "Enterprise",
      description: "For agencies and large organizations requiring compliance.",
      priceMonthly: 149,
      priceAnnual: 119,
      features: [
        "Everything in Professional",
        "Custom CRM Syncing (Salesforce)",
        "Team Workspaces & Access Controls",
        "Dedicated Account Manager",
        "SOC-2 Compliance",
        "Custom Data Retention Policies",
      ],
      cta: "Contact Sales",
      popular: false,
      btnClass: "btn-outline",
    },
  ];

  return (
    <section id="pricing" className="section-light section-padding" style={{ position: "relative" }}>
      <div className="container">
        {/* Title */}
        <div style={{ textAlign: "center", marginBottom: "50px" }}>
          <h2 style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)", marginBottom: "16px", fontWeight: 800, letterSpacing: "-0.04em" }}>
            Invest in your <br/>
            <span style={{ color: "var(--text-dark-muted)" }}>Memory Moat</span>
          </h2>
          <p style={{ color: "var(--text-dark-muted)", maxWidth: "600px", margin: "0 auto", fontSize: "1.05rem", lineHeight: "1.6" }}>
            Start capturing your context for free. Upgrade as your team scales and you build a deeper work memory.
          </p>

          {/* Monthly / Annual Toggle Switch */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "16px",
              background: "rgba(0, 0, 0, 0.04)",
              border: "1px solid rgba(0, 0, 0, 0.08)",
              padding: "6px",
              borderRadius: "30px",
              marginTop: "36px",
            }}
          >
            <button
              onClick={() => setIsAnnual(false)}
              style={{
                background: !isAnnual ? "#000" : "transparent",
                border: "none",
                borderRadius: "20px",
                padding: "8px 20px",
                fontSize: "0.85rem",
                fontWeight: 600,
                color: !isAnnual ? "#ffffff" : "var(--text-dark-muted)",
                cursor: "pointer",
                transition: "var(--transition-smooth)",
              }}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              style={{
                background: isAnnual ? "#000" : "transparent",
                border: "none",
                borderRadius: "20px",
                padding: "8px 20px",
                fontSize: "0.85rem",
                fontWeight: 600,
                color: isAnnual ? "#ffffff" : "var(--text-dark-muted)",
                cursor: "pointer",
                transition: "var(--transition-smooth)",
                display: "flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              Annual
              <span
                style={{
                  fontSize: "0.7rem",
                  background: isAnnual ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.1)",
                  color: isAnnual ? "#fff" : "var(--text-dark)",
                  padding: "2px 6px",
                  borderRadius: "10px",
                  fontWeight: 700,
                }}
              >
                SAVE 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))",
            gap: "30px",
            alignItems: "stretch",
          }}
        >
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className="card-light"
              style={{
                padding: "40px",
                display: "flex",
                flexDirection: "column",
                position: "relative",
                border: tier.popular ? "2px solid #000" : "1px solid var(--border-light)",
                boxShadow: tier.popular ? "0 10px 40px rgba(0,0,0,0.08)" : "0 4px 20px rgba(0,0,0,0.03)",
              }}
            >
              {/* Popular Highlight Badge */}
              {tier.popular && (
                <span
                  style={{
                    position: "absolute",
                    top: "-15px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    background: "#000",
                    color: "#ffffff",
                    padding: "6px 16px",
                    borderRadius: "20px",
                    fontSize: "0.8rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                  }}
                >
                  Most Popular
                </span>
              )}

              {/* Tier Meta */}
              <div style={{ marginBottom: "28px" }}>
                <h3 style={{ fontSize: "1.5rem", color: "var(--text-dark)", marginBottom: "8px", fontWeight: 700 }}>
                  {tier.name}
                </h3>
                <p style={{ color: "var(--text-dark-muted)", fontSize: "0.9rem", lineHeight: "1.5", minHeight: "45px" }}>
                  {tier.description}
                </p>
              </div>

              {/* Price display */}
              <div style={{ display: "flex", alignItems: "baseline", gap: "6px", marginBottom: "28px" }}>
                <span style={{ fontSize: "3rem", fontWeight: 800, color: "var(--text-dark)" }}>
                  ${isAnnual ? tier.priceAnnual : tier.priceMonthly}
                </span>
                <span style={{ color: "var(--text-dark-muted)", fontSize: "0.95rem" }}>/ month</span>
              </div>

              {/* Feature Checklist */}
              <ul
                style={{
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: "14px",
                  marginBottom: "36px",
                  flexGrow: 1,
                }}
              >
                {tier.features.map((feature, idx) => (
                  <li
                    key={idx}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "10px",
                      fontSize: "0.95rem",
                      color: "var(--text-dark)",
                      lineHeight: "1.4",
                      fontWeight: 500
                    }}
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#000"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{ flexShrink: 0, marginTop: "2px" }}
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <div>
                <button
                  className={tier.btnClass}
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {tier.cta}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
