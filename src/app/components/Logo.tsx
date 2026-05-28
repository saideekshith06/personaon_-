import React from "react";

interface LogoProps {
  width?: number | string;
  dark?: boolean;
}

export default function Logo({ width = 180, dark = false }: LogoProps) {
  const widthStyle = typeof width === "number" ? `${width}px` : width;

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <img
        src="/personaon_logo.png"
        alt="PersonaOn Logo"
        style={{ 
          width: widthStyle, 
          height: "auto",
          objectFit: "contain",
          filter: dark ? "brightness(0) invert(1)" : "none"
        }} 
      />
    </div>
  );
}

