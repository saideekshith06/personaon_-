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
    
    // Viewport dimensions
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = 700);

    // Mouse coordinates relative to canvas
    const mouse = { x: width / 2, y: height / 2, active: false };

    // Define Swarm Particle class
    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      baseSpeed: number;
      angle: number;
      color: string;
      hue: number;

      constructor() {
        // Random initial placement in a circle around the center
        const angle = Math.random() * Math.PI * 2;
        const radius = Math.random() * 200 + 100;
        this.x = width / 2 + Math.cos(angle) * radius;
        this.y = height / 2 + Math.sin(angle) * radius;
        
        this.vx = (Math.random() - 0.5) * 2;
        this.vy = (Math.random() - 0.5) * 2;
        this.size = 1.8;
        this.baseSpeed = Math.random() * 1.5 + 1.0;
        this.angle = 0;
        this.hue = 220; // start blue
        this.color = "";
      }

      update() {
        const cx = width / 2;
        const cy = height / 2;

        // 1. Orbital circular force around the center (creates the natural spiral/vortex)
        const dxCenter = this.x - cx;
        const dyCenter = this.y - cy;
        const distCenter = Math.sqrt(dxCenter * dxCenter + dyCenter * dyCenter) || 1;
        
        // Perpendicular orbital vector
        const orbitX = -dyCenter / distCenter;
        const orbitY = dxCenter / distCenter;

        // Weak pull back toward center if they drift too far
        const pullX = -dxCenter / distCenter;
        const pullY = -dyCenter / distCenter;

        this.vx += orbitX * 0.05 + pullX * 0.02;
        this.vy += orbitY * 0.05 + pullY * 0.02;

        // 2. Mouse gravity/attraction (stronger when active)
        const targetX = mouse.active ? mouse.x : cx;
        const targetY = mouse.active ? mouse.y : cy;
        
        const dxMouse = targetX - this.x;
        const dyMouse = targetY - this.y;
        const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse) || 1;

        if (distMouse < 320) {
          const force = (320 - distMouse) / 320;
          
          if (distMouse > 50) {
            // Strong attraction flow toward cursor
            this.vx += (dxMouse / distMouse) * force * 0.35;
            this.vy += (dyMouse / distMouse) * force * 0.35;
          } else {
            // Orbital swarm buffer when very close (prevents stacking in a single dot)
            this.vx += (-dyMouse / distMouse) * force * 0.8;
            this.vy += (dxMouse / distMouse) * force * 0.8;
            // Gentle repelling force if too close
            this.vx -= (dxMouse / distMouse) * 0.2;
            this.vy -= (dyMouse / distMouse) * 0.2;
          }
        }

        // 3. Friction/Drag (bounds acceleration)
        this.vx *= 0.94;
        this.vy *= 0.94;

        // 4. Update Position
        this.x += this.vx * this.baseSpeed;
        this.y += this.vy * this.baseSpeed;

        // Screen boundary wrapping (gentle respawn if drift off-screen)
        if (this.x < -50 || this.x > width + 50 || this.y < -50 || this.y > height + 50) {
          const spawnAngle = Math.random() * Math.PI * 2;
          this.x = cx + Math.cos(spawnAngle) * 300;
          this.y = cy + Math.sin(spawnAngle) * 300;
          this.vx = 0;
          this.vy = 0;
        }

        // 5. Dynamic Hue Spectrum calculation based on angle from center
        const angleFromCenter = Math.atan2(this.y - cy, this.x - cx);
        // Blue (210) to Purple (280) to Orange/Red (350)
        let hueDeg = 210 + ((angleFromCenter + Math.PI) / (Math.PI * 2)) * 140;
        this.hue = hueDeg;
        this.color = `hsla(${this.hue}, 85%, 60%, 0.55)`;
      }

      draw(c: CanvasRenderingContext2D) {
        const speed = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
        const moveAngle = Math.atan2(this.vy, this.vx);
        
        // Dash length based on velocity (mimicking Google's vector flow lines)
        const length = Math.max(3, Math.min(10, speed * 2.5));

        c.beginPath();
        // Start of dash
        c.moveTo(this.x, this.y);
        // End of dash (points opposite to velocity vector)
        c.lineTo(this.x - Math.cos(moveAngle) * length, this.y - Math.sin(moveAngle) * length);
        
        c.strokeStyle = this.color;
        c.lineWidth = 1.8;
        c.lineCap = "round";
        c.stroke();
      }
    }

    const particleCount = 140; // clean density count
    const particles: Particle[] = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Animation Loop
    function animate() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);

      // Draw subtle orbital guide circles (very faded, premium detail)
      const cx = width / 2;
      const cy = height / 2;
      ctx.beginPath();
      ctx.arc(cx, cy, 180, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(0, 98, 209, 0.015)";
      ctx.lineWidth = 1;
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(cx, cy, 280, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(0, 98, 209, 0.008)";
      ctx.lineWidth = 1;
      ctx.stroke();

      // Update & Draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.update();
        p.draw(ctx);
      }

      animationFrameId = requestAnimationFrame(animate);
    }

    // Mouse movement listeners relative to bounds
    const handleMouseMove = (e: MouseEvent) => {
      const bounds = canvas.getBoundingClientRect();
      mouse.x = e.clientX - bounds.left;
      mouse.y = e.clientY - bounds.top;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      const parent = canvas.parentElement;
      height = canvas.height = parent?.clientHeight || 700;
    };

    window.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("resize", handleResize);

    // Initial setup
    const parent = canvas.parentElement;
    if (parent) {
      width = canvas.width = parent.clientWidth || window.innerWidth;
      height = canvas.height = parent.clientHeight || 700;
    }
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
        zIndex: 1, // overlays gradient cleanly
        opacity: 0.95
      }}
    />
  );
}
