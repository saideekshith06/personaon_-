"use client";

import React, { useState, useEffect } from "react";
import Logo from "./Logo";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Banner */}
      <div 
        style={{
          background: "#111111",
          color: "#ffffff",
          textAlign: "center",
          padding: "10px 20px",
          fontSize: "0.85rem",
          fontWeight: 400
        }}
      >
        <span style={{ color: "#a0a0a0" }}>PersonaOn is now free.</span>{" "}
        <a href="#" style={{ color: "#ffffff", fontWeight: 600, textDecoration: "none" }}>
          Create yours &rsaquo;
        </a>
      </div>

      <header
        style={{
          position: "sticky",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
          background: scrolled
            ? "rgba(250, 250, 250, 0.9)"
            : "#fafafa", // slight off-white matching the screenshot
          backdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled
            ? "1px solid var(--border-light)"
            : "1px solid transparent",
          padding: scrolled ? "16px 0" : "20px 0",
        }}
      >
        <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          {/* Logo */}
          <a href="/" style={{ display: "flex", alignItems: "center", gap: "10px", color: "var(--text-dark)" }}>
            <Logo width={140} />
          </a>

          {/* Desktop Links */}
          <nav
            style={{
              display: "flex",
              alignItems: "center",
              gap: "32px",
            }}
          >
            {["How it works", "Who it's for", "Pricing", "FAQ", "Blog"].map((item) => {
              const anchor = `/#${item.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
              return (
                <a
                  key={item}
                  href={anchor}
                  style={{
                    fontSize: "0.9rem",
                    fontWeight: 500,
                    color: "var(--text-dark-muted)",
                    transition: "var(--transition-smooth)",
                  }}
                  className="nav-link"
                >
                  {item}
                </a>
              );
            })}
          </nav>

          {/* CTA Links */}
          <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
            <a href="#" style={{ fontSize: "0.9rem", fontWeight: 500, color: "var(--text-dark-muted)", transition: "color 0.2s" }} className="nav-link">Sign in</a>
            <a href="#" style={{ fontSize: "0.9rem", fontWeight: 500, color: "var(--text-dark)", transition: "opacity 0.2s" }} className="nav-link">Start free</a>
          </div>
        </div>
      </header>
      <style jsx global>{`
        .nav-link {
          transition: color 0.2s cubic-bezier(0.16, 1, 0.3, 1) !important;
        }
        .nav-link:hover {
          color: var(--text-dark) !important;
        }
      `}</style>
    </>
  );
}
