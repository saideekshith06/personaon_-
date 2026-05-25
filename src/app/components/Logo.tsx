import React from "react";

export default function Logo({ width = 180, dark = false }) {
  // If dark mode is true, we could apply a CSS filter to invert the text part of the logo if needed, 
  // but for now we'll just render the image directly.
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <img 
        src="/logo.png" 
        alt="PersonaOn Logo" 
        style={{ 
          width: `${width}px`, 
          height: "auto",
          objectFit: "contain",
          // Optional: If you need it to look white on dark backgrounds, 
          // you might need a separate logo-white.png or use CSS filters.
          filter: dark ? "brightness(0) invert(1)" : "none"
        }} 
      />
    </div>
  );
}
