"use client";

import React, { useEffect, useState } from "react";

export default function Preloader() {
  const [isMounted, setIsMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Flag component as mounted to safely allow client-only operations
    setIsMounted(true);

    const hasLoaded = sessionStorage.getItem("personaon_preloaded");
    if (hasLoaded === "true") {
      setIsLoading(false);
      return;
    }

    // Lock background scroll while loading is active
    document.body.style.overflow = "hidden";

    // Phase 1: Trigger the elegant scale/fade out exit transitions at 1.4 seconds
    const exitTimer = setTimeout(() => {
      setIsExiting(true);
    }, 1400);

    // Phase 2: Unmount component, restore scroll, and set loaded flag at 1.8 seconds
    const finishTimer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = "";
      sessionStorage.setItem("personaon_preloaded", "true");
    }, 1800);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(finishTimer);
      document.body.style.overflow = "";
    };
  }, []);

  // Return null during Server Side Rendering or if loading is fully complete
  if (!isMounted || !isLoading) return null;

  return (
    <div
      className={`preloader-overlay ${isExiting ? "preloader-exit" : ""}`}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "radial-gradient(circle at center, #ffffff 0%, #f3f3f7 25%, #f3f3f7 100%)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 999999,
        transition: "opacity 0.45s cubic-bezier(0.16, 1, 0.3, 1), transform 0.45s cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Pulsing brand logo (Enlarged to 160px) */}
        <div
          className="preloader-logo"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            animation: "preloader-pulse 2s ease-in-out infinite",
            marginBottom: "32px",
          }}
        >
          <img
            src="/personaon_icon.png"
            alt="PersonaOn Brand Mark"
            style={{
              width: "160px",
              height: "160px",
              objectFit: "contain",
              filter: "drop-shadow(0 12px 24px rgba(0, 0, 0, 0.12))",
            }}
          />
        </div>

        {/* Apple-style horizontal progress bar */}
        <div
          className="preloader-progress-track"
          style={{
            width: "180px",
            height: "4px",
            backgroundColor: "#e5e5e7",
            borderRadius: "999px",
            overflow: "hidden",
            position: "relative",
            marginBottom: "36px",
          }}
        >
          <div
            className="preloader-progress-bar"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              height: "100%",
              backgroundColor: "#000000",
              borderRadius: "999px",
              width: "0%",
              animation: "apple-progress 1.4s cubic-bezier(0.16, 1, 0.3, 1) forwards",
            }}
          />
        </div>

        {/* Brand description text */}
        <div
          className="preloader-text-wrapper"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "6px",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontSize: "1.4rem",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              color: "#000000",
              margin: 0,
              fontFamily: "var(--font-heading)",
            }}
          >
            PersonaOn
          </h2>
          <p
            style={{
              fontSize: "0.85rem",
              fontWeight: 500,
              color: "#666666",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              margin: 0,
              fontFamily: "var(--font-sans)",
            }}
          >
            AI Simulated Focus Groups
          </p>
        </div>
      </div>
    </div>
  );
}
