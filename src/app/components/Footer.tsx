import React from "react";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer
      className="section-light"
      style={{
        borderTop: "1px solid var(--border-light)",
        padding: "80px 0 40px 0",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "48px",
            marginBottom: "60px",
          }}
        >
          {/* Logo & Description Column */}
          <div style={{ gridColumn: "span 2", minWidth: "260px" }}>
            <a href="#" style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px", color: "var(--text-dark)" }}>
              <Logo width={220} />
            </a>
            <p style={{ lineHeight: "1.6", fontSize: "0.95rem", color: "var(--text-dark-muted)", marginBottom: "24px" }}>
              Capture meetings, extract decisions, and build your searchable work memory. Never lose the context of a conversation again.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h4 style={{ color: "var(--text-dark)", marginBottom: "20px", fontSize: "1rem", fontWeight: "600" }}>
              Product
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px", fontSize: "0.9rem" }}>
              {["Meeting Capture", "Memory Search", "Team Workspaces", "Integrations", "Pricing"].map((link) => (
                <li key={link}>
                  <a href="#" style={{ color: "var(--text-dark-muted)", transition: "var(--transition-smooth)" }} className="footer-link">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 style={{ color: "var(--text-dark)", marginBottom: "20px", fontSize: "1rem", fontWeight: "600" }}>
              Company
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px", fontSize: "0.9rem" }}>
              {["About Us", "Customers", "Careers", "Contact"].map((link) => (
                <li key={link}>
                  <a href="#" style={{ color: "var(--text-dark-muted)", transition: "var(--transition-smooth)" }} className="footer-link">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 style={{ color: "var(--text-dark)", marginBottom: "20px", fontSize: "1rem", fontWeight: "600" }}>
              Resources
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px", fontSize: "0.9rem" }}>
              {["Help Center", "API Reference", "Guides & Tutorials", "Blog"].map((link) => (
                <li key={link}>
                  <a href="#" style={{ color: "var(--text-dark-muted)", transition: "var(--transition-smooth)" }} className="footer-link">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div
          style={{
            borderTop: "1px solid var(--border-light)",
            paddingTop: "30px",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "20px",
            fontSize: "0.85rem",
            color: "var(--text-light-muted)",
          }}
        >
          <p>© {new Date().getFullYear()} PersonaOn Inc. All rights reserved.</p>
          <div style={{ display: "flex", gap: "24px" }}>
            <a href="#" className="footer-link" style={{ color: "inherit" }}>Privacy Policy</a>
            <a href="#" className="footer-link" style={{ color: "inherit" }}>Terms of Service</a>
            <a href="#" className="footer-link" style={{ color: "inherit" }}>Cookie Settings</a>
          </div>
        </div>
      </div>
      <style jsx global>{`
        .footer-link:hover {
          color: var(--text-dark) !important;
        }
        .footer-link {
          transition: var(--transition-smooth);
          display: inline-block;
        }
      `}</style>
    </footer>
  );
}
