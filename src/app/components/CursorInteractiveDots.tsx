"use client";

import React, { useEffect, useRef } from "react";

export default function CursorInteractiveDots() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;

    // Track mouse movement smoothly
    const mouse = {
      x: -2000,
      y: -2000,
      targetX: -2000,
      targetY: -2000,
      active: false
    };

    class Particle {
      baseRadius: number;
      angle: number;
      z3d: number;
      size: number;
      baseAlpha: number;
      color: string;

      // Orbit and oscillation phases
      orbitSpeed: number;
      oscSpeed: number;
      anglePhase: number;

      // Current 3D coordinate offsets from center of sphere
      x3d: number;
      y3d: number;

      // Elastic warp offsets from mouse hover interaction
      warpX: number;
      warpY: number;

      constructor(index: number, total: number) {
        // 1. Golden Ratio Distribution for perfect concentric ring circles
        const goldenAngle = 2.39996; // 137.5 degrees in radians
        this.angle = index * goldenAngle;
        
        // Distribution of base radii creating a beautiful concentric disk with a central void
        // Spawns from 190px (clear central void for title text) up to 550px radius
        const t = index / total;
        this.baseRadius = 190 + Math.pow(t, 0.7) * 360;

        // Assign a depth layer (virtual Z-axis) for 3D stereoscopic depth rendering
        this.z3d = (Math.random() - 0.5) * 160;

        // Visual properties matching the screens: 1px to 3px max size
        this.size = Math.random() * 1.5 + 1.0;
        this.baseAlpha = Math.random() * 0.35 + 0.35; // subtle soft opacities

        // Elastic spring kinematics
        this.warpX = 0;
        this.warpY = 0;

        // Orbit and breathing movements
        this.orbitSpeed = (Math.random() * 0.0003 + 0.0001) * (Math.random() > 0.5 ? 1 : -1);
        this.oscSpeed = Math.random() * 0.0008 + 0.0004;
        this.anglePhase = Math.random() * Math.PI * 2;

        this.x3d = Math.cos(this.angle) * this.baseRadius;
        this.y3d = Math.sin(this.angle) * this.baseRadius;

        // 2. Google Brand Quadrant Color Wheel (matching the uploaded screenshots)
        // Calculate normalized angle in degrees (0 to 360)
        const normAngle = (this.angle % (Math.PI * 2) + Math.PI * 2) % (Math.PI * 2);
        const angleDeg = (normAngle * 180) / Math.PI;

        let selectedColor = "";
        if (angleDeg >= 115 && angleDeg < 235) {
          // Upper-Left Quadrant: Vibrant Google Blues
          const blues = ["#4285F4", "#2a75f3", "#1a73e8", "#5a9bf6"];
          selectedColor = blues[Math.floor(Math.random() * blues.length)];
        } else if (angleDeg >= 235 && angleDeg < 330) {
          // Top-Right / Upper-Right: Elegant Google Purples / Violets
          const purples = ["#8B5CF6", "#9f75f9", "#a78bfa", "#7c3aed"];
          selectedColor = purples[Math.floor(Math.random() * purples.length)];
        } else if (angleDeg >= 330 || angleDeg < 45) {
          // Right Quadrant: Google Magentas / Pinks
          const magentas = ["#EC4899", "#d946ef", "#e879f9", "#f43f5e"];
          selectedColor = magentas[Math.floor(Math.random() * magentas.length)];
        } else {
          // Bottom-Left Quadrant: Google Reds, Oranges, and Warm Yellows
          const warms = ["#EA4335", "#FBBC05", "#F97316", "#ee3e2e", "#f59e0b"];
          selectedColor = warms[Math.floor(Math.random() * warms.length)];
        }

        this.color = selectedColor;
      }

      update(centerX: number, centerY: number, mouseTiltX: number, mouseTiltY: number) {
        // 1. Slow, zero-gravity rotation/orbit
        this.angle += this.orbitSpeed;

        // 2. Gentle radial breath/breathing (radial wave breathing)
        const breath = Math.sin(Date.now() * this.oscSpeed + this.anglePhase) * 12;
        const currentRadius = this.baseRadius + breath;

        // Calculate basic 3D position
        this.x3d = Math.cos(this.angle) * currentRadius;
        this.y3d = Math.sin(this.angle) * currentRadius;

        // 3. 3D Stereoscopic Parallax displacement based on mouse coordinate displacement
        const zFactor = this.z3d / 80; // ranges roughly from -1.0 to 1.0 based on depth layer
        const parallaxX = mouseTiltX * zFactor;
        const parallaxY = mouseTiltY * zFactor;

        // Calculate absolute position on the screen *before* hover distortion
        const screenX = centerX + this.x3d + parallaxX;
        const screenY = centerY + this.y3d + parallaxY;

        // 4. Elastic Magnetic Warp Hover Indentation ("dot interactiveness")
        const dx = screenX - mouse.x;
        const dy = screenY - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy) || 1;
        const repulseRadius = 150; // radius of hover interaction influence

        if (mouse.active && dist < repulseRadius) {
          const force = (repulseRadius - dist) / repulseRadius;
          
          // Push particles outwards from mouse to deform the concentric sphere elastically
          const targetWarpX = (dx / dist) * force * 35;
          const targetWarpY = (dy / dist) * force * 35;

          // Spring physics: interpolate smoothly towards warp, giving a rubber-sheet rebound
          this.warpX = this.warpX * 0.84 + targetWarpX * 0.16;
          this.warpY = this.warpY * 0.84 + targetWarpY * 0.16;
        } else {
          // Decay elastic offset back to rest elastically
          this.warpX = this.warpX * 0.86;
          this.warpY = this.warpY * 0.86;
        }
      }

      draw(c: CanvasRenderingContext2D, centerX: number, centerY: number, mouseTiltX: number, mouseTiltY: number) {
        // Calculate 3D Parallax
        const zFactor = this.z3d / 80;
        const parallaxX = mouseTiltX * zFactor;
        const parallaxY = mouseTiltY * zFactor;

        // Absolute coordinates
        const finalX = centerX + this.x3d + parallaxX + this.warpX;
        const finalY = centerY + this.y3d + parallaxY + this.warpY;

        // Depth scale styling: foreground particles are larger & brighter, background are smaller & dimmer
        const depthScale = (this.z3d + 100) / 180; // ranges roughly 0.3 to 1.3
        const finalSize = Math.max(0.6, Math.min(3.2, this.size * depthScale));
        const finalAlpha = Math.max(0.12, Math.min(0.85, this.baseAlpha * depthScale));

        // Draw dot
        c.beginPath();
        c.arc(finalX, finalY, finalSize, 0, Math.PI * 2);
        c.fillStyle = this.color;
        c.globalAlpha = finalAlpha;
        c.fill();
        c.globalAlpha = 1.0; // reset
      }
    }

    const particles: Particle[] = [];
    const particleCount = 420; // dense, spectacular galaxy shell

    const setupCanvas = () => {
      const parent = canvas.parentElement;
      const dpr = window.devicePixelRatio || 1;
      width = parent?.clientWidth || window.innerWidth;
      height = parent?.clientHeight || 680;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.scale(dpr, dpr);
    };

    setupCanvas();

    // Populate particles with golden ratio spiral indexes
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle(i, particleCount));
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2.3; // matches the center of the hero text area

      // Smooth mouse interpolation for fluid, liquid parallax camera movement
      mouse.x += (mouse.targetX - mouse.x) * 0.08;
      mouse.y += (mouse.targetY - mouse.y) * 0.08;

      // Displacement values to drive 3D stereoscopic parallax shifts
      const mouseTiltX = mouse.active ? (mouse.x - centerX) * 0.06 : 0;
      const mouseTiltY = mouse.active ? (mouse.y - centerY) * 0.06 : 0;

      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.update(centerX, centerY, mouseTiltX, mouseTiltY);
        p.draw(ctx, centerX, centerY, mouseTiltX, mouseTiltY);
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    // Listeners
    const handleMouseMove = (e: MouseEvent) => {
      const bounds = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - bounds.left;
      mouse.targetY = e.clientY - bounds.top;

      if (!mouse.active) {
        mouse.x = mouse.targetX;
        mouse.y = mouse.targetY;
        mouse.active = true;
      }
    };

    const handleMouseLeave = () => {
      mouse.active = false;
      mouse.targetX = width / 2;
      mouse.targetY = height / 2.3; // ease camera tilt back to absolute center
    };

    const handleResize = () => {
      setupCanvas();
    };

    window.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("resize", handleResize);

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0, // placed directly behind text
        opacity: 0.95
      }}
    />
  );
}
