"use client";

import React, { useState, useEffect } from "react";
import Logo from "./Logo";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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

          {/* Desktop Links (Hidden on mobile) */}
          <nav
            style={{
              alignItems: "center",
              gap: "32px",
            }}
            className="desktop-only"
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

          {/* CTA Links (Hidden on mobile) */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }} className="desktop-only">
            <a 
              href="#" 
              style={{ 
                padding: "8px 20px", 
                borderRadius: "12px", 
                border: "1px solid rgba(9, 9, 11, 0.08)", 
                background: "#ffffff", 
                color: "#09090b", 
                fontSize: "0.85rem", 
                fontWeight: 700, 
                textDecoration: "none",
                boxShadow: "0 2px 4px rgba(0,0,0,0.02)",
                transition: "all 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#f4f4f5";
                e.currentTarget.style.borderColor = "rgba(9, 9, 11, 0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#ffffff";
                e.currentTarget.style.borderColor = "rgba(9, 9, 11, 0.08)";
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
                <polyline points="10 17 15 12 10 7" />
                <line x1="15" y1="12" x2="3" y2="12" />
              </svg>
              Log In
            </a>
            <a 
              href="#" 
              style={{ 
                padding: "8px 20px", 
                borderRadius: "12px", 
                background: "#09090b", 
                color: "#ffffff", 
                fontSize: "0.85rem", 
                fontWeight: 700, 
                textDecoration: "none",
                boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                transition: "all 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                border: "1px solid transparent"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-1px)";
                e.currentTarget.style.boxShadow = "0 6px 16px rgba(0,0,0,0.12)";
                e.currentTarget.style.background = "#000000";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.08)";
                e.currentTarget.style.background = "#09090b";
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <line x1="19" y1="8" x2="19" y2="14" />
                <line x1="22" y1="11" x2="16" y2="11" />
              </svg>
              Sign Up
            </a>
          </div>

          {/* Mobile Hamburger Toggle Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            style={{
              display: "none",
              background: "transparent",
              border: "none",
              cursor: "pointer",
              padding: "6px",
              zIndex: 1002,
              outline: "none"
            }}
            className="mobile-burger-btn"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--text-dark)" strokeWidth="2.2" strokeLinecap="round">
              <line 
                x1="4" y1="6" x2="20" y2="6" 
                style={{
                  transition: "transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
                  transform: menuOpen ? "rotate(45deg) translate(5px, 5px)" : "none",
                  transformOrigin: "center"
                }} 
              />
              <line 
                x1="4" y1="12" x2="20" y2="12" 
                style={{
                  transition: "opacity 0.2s",
                  opacity: menuOpen ? 0 : 1
                }} 
              />
              <line 
                x1="4" y1="18" x2="20" y2="18" 
                style={{
                  transition: "transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
                  transform: menuOpen ? "rotate(-45deg) translate(5px, -5px)" : "none",
                  transformOrigin: "center"
                }} 
              />
            </svg>
          </button>
        </div>

        {/* Sliding Responsive Mobile Drawer (shadcn/ui style) */}
        {menuOpen && (
          <div
            className="animate-drawer-in"
            style={{
              position: "fixed",
              top: scrolled ? "52px" : "60px",
              left: 0,
              right: 0,
              background: "#fafafa",
              borderBottom: "1px solid var(--border-light)",
              boxShadow: "0 15px 35px -5px rgba(0,0,0,0.06)",
              padding: "28px 24px",
              display: "flex",
              flexDirection: "column",
              gap: "24px",
              zIndex: 999
            }}
          >
            <nav style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {["How it works", "Who it's for", "Pricing", "FAQ", "Blog"].map((item) => (
                <a
                  key={item}
                  href={`/#${item.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                  onClick={() => setMenuOpen(false)}
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: 600,
                    color: "var(--text-dark)",
                    padding: "6px 0",
                    transition: "color 0.2s"
                  }}
                >
                  {item}
                </a>
              ))}
            </nav>
            <hr style={{ border: 0, borderTop: "1px solid var(--border-light)" }} />
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <a 
                href="#" 
                onClick={() => setMenuOpen(false)} 
                style={{ 
                  display: "flex",
                  justifyContent: "center", 
                  alignItems: "center",
                  gap: "8px",
                  padding: "12px 20px", 
                  width: "100%",
                  borderRadius: "12px",
                  border: "1px solid rgba(9, 9, 11, 0.08)",
                  background: "#ffffff",
                  color: "#09090b",
                  fontSize: "0.95rem",
                  fontWeight: 700,
                  textDecoration: "none",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.02)"
                }}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                  <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
                  <polyline points="10 17 15 12 10 7" />
                  <line x1="15" y1="12" x2="3" y2="12" />
                </svg>
                Log In
              </a>
              <a 
                href="#" 
                onClick={() => setMenuOpen(false)} 
                style={{ 
                  display: "flex",
                  justifyContent: "center", 
                  alignItems: "center",
                  gap: "8px",
                  padding: "12px 20px", 
                  width: "100%",
                  borderRadius: "12px",
                  background: "#09090b",
                  color: "#ffffff",
                  fontSize: "0.95rem",
                  fontWeight: 700,
                  textDecoration: "none",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.08)"
                }}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <line x1="19" y1="8" x2="19" y2="14" />
                  <line x1="22" y1="11" x2="16" y2="11" />
                </svg>
                Sign Up
              </a>
            </div>
          </div>
        )}
      </header>
      <style jsx global>{`
        .nav-link {
          transition: color 0.2s cubic-bezier(0.16, 1, 0.3, 1) !important;
        }
        .nav-link:hover {
          color: var(--text-dark) !important;
        }

        @media (max-width: 768px) {
          .mobile-burger-btn {
            display: block !important;
          }
        }
      `}</style>
    </>
  );
}
