import { useEffect, useRef } from "react";
import heroLoop from "../assets/hero-latent-loop.mp4.asset.json";

/**
 * Ambient background: animated latent-space particle field with soft
 * connective lines. Fixed behind all content, respects reduced motion.
 */
export function BackgroundFX() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    type P = { x: number; y: number; vx: number; vy: number; r: number };
    let points: P[] = [];

    const resize = () => {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const density = Math.min(90, Math.floor((width * height) / 18000));
      points = new Array(density).fill(0).map(() => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,
        r: Math.random() * 1.2 + 0.4,
      }));
    };

    resize();
    window.addEventListener("resize", resize);

    const mouse = { x: -9999, y: -9999 };
    const onMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    window.addEventListener("mousemove", onMove, { passive: true });

    let raf = 0;
    let t = 0;

    const draw = () => {
      t += 0.005;
      ctx.clearRect(0, 0, width, height);

      // Soft radial glow that slowly drifts
      const gx = width * (0.5 + Math.sin(t * 0.7) * 0.15);
      const gy = height * (0.35 + Math.cos(t * 0.5) * 0.1);
      const grad = ctx.createRadialGradient(gx, gy, 0, gx, gy, Math.max(width, height) * 0.7);
      grad.addColorStop(0, "rgba(110, 168, 255, 0.10)");
      grad.addColorStop(0.4, "rgba(34, 211, 238, 0.04)");
      grad.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);

      // Update + draw points
      for (const p of points) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // gentle mouse attraction
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const d2 = dx * dx + dy * dy;
        if (d2 < 20000) {
          p.vx += (dx / d2) * 4;
          p.vy += (dy / d2) * 4;
        }
        // clamp velocity
        const s = Math.hypot(p.vx, p.vy);
        if (s > 0.6) {
          p.vx = (p.vx / s) * 0.6;
          p.vy = (p.vy / s) * 0.6;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(180, 200, 230, 0.55)";
        ctx.fill();
      }

      // Connective lines
      const maxDist = 130;
      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          const a = points[i];
          const b = points[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.hypot(dx, dy);
          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * 0.18;
            ctx.strokeStyle = `rgba(110, 168, 255, ${alpha})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      if (!reduced) raf = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10"
      style={{
        background:
          "radial-gradient(ellipse at 50% 0%, rgba(110,168,255,0.06), transparent 60%), #050505",
      }}
    >
      <video
        src={heroLoop.url}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-x-0 top-0 h-[110vh] w-full object-cover opacity-60"
        style={{
          maskImage:
            "linear-gradient(to bottom, black 0%, black 55%, transparent 95%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 0%, black 55%, transparent 95%)",
          filter: "saturate(115%) contrast(105%)",
        }}
      />
      <div className="absolute inset-x-0 top-0 h-[110vh] bg-gradient-to-b from-background/40 via-background/10 to-background" />
      <canvas ref={canvasRef} className="h-full w-full" />
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse at 50% 20%, black 40%, transparent 80%)",
        }}
      />
      <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
}