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
    const mouse = { x: -1000, y: -1000, active: false };

    // Define Swarm Particle class
    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      baseSpeed: number;
      color: string;
      hue: number;

      constructor() {
        // Random initial placement across canvas
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.size = 1.6;
        this.baseSpeed = Math.random() * 0.3 + 0.25; // 4x slower base speed for calm wavy drift
        this.hue = 210;
        this.color = "";
      }

      update() {
        const cx = width / 2;
        const cy = height / 2;

        // 1. Double-frequency sine wave field (creates a smooth, silky liquid/wavy flow)
        const waveX = Math.sin(this.y * 0.007 + Date.now() * 0.0002) * 0.04;
        const waveY = Math.cos(this.x * 0.007 + Date.now() * 0.0002) * 0.04;
        
        this.vx += waveX;
        this.vy += waveY;

        // 2. Mouse gravity/attraction (very gentle, steering smoothly toward mouse)
        if (mouse.active) {
          const dxMouse = mouse.x - this.x;
          const dyMouse = mouse.y - this.y;
          const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse) || 1;

          if (distMouse < 280) {
            const force = (280 - distMouse) / 280;
            // Gentle fluid attraction
            this.vx += (dxMouse / distMouse) * force * 0.05;
            this.vy += (dyMouse / distMouse) * force * 0.05;
          }
        }

        // 3. Friction/Drag (bounds acceleration, keeps it quiet and calm)
        this.vx *= 0.95;
        this.vy *= 0.95;

        // 4. Update Position
        this.x += this.vx * this.baseSpeed;
        this.y += this.vy * this.baseSpeed;

        // 5. Screen boundary wrapping (smooth transition off-screen)
        if (this.x < -20) this.x = width + 20;
        if (this.x > width + 20) this.x = -20;
        if (this.y < -20) this.y = height + 20;
        if (this.y > height + 20) this.y = -20;

        // 6. Dynamic Hue Spectrum calculation based on position relative to center
        const angleFromCenter = Math.atan2(this.y - cy, this.x - cx);
        let hueDeg = 210 + ((angleFromCenter + Math.PI) / (Math.PI * 2)) * 140;
        this.hue = hueDeg;
        this.color = `hsla(${this.hue}, 80%, 60%, 0.45)`; // slightly softer color
      }

      draw(c: CanvasRenderingContext2D) {
        const speed = Math.sqrt(this.vx * this.vx + this.vy * this.vy) || 0.1;
        const moveAngle = Math.atan2(this.vy, this.vx);
        
        // Dash length based on velocity (delicate wave threads)
        const length = Math.max(4, Math.min(8, speed * 7));

        c.beginPath();
        c.moveTo(this.x, this.y);
        c.lineTo(this.x - Math.cos(moveAngle) * length, this.y - Math.sin(moveAngle) * length);
        
        c.strokeStyle = this.color;
        c.lineWidth = 1.6;
        c.lineCap = "round";
        c.stroke();
      }
    }

    const particleCount = 130; // perfect density for a subtle feel
    const particles: Particle[] = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Animation Loop
    function animate() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);

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
