import { useEffect, useRef } from 'react';
import { type FigureType } from '../data/figures';

interface ParticleBackgroundProps {
  type: FigureType;
  color: string;
  density?: number;
  speed?: number;
}

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  life: number;
  maxLife: number;
  shape: 'circle' | 'star' | 'diamond' | 'petal';
  rotation: number;
  rotationSpeed: number;
}

export default function ParticleBackground({ type, color, density = 60, speed = 0.3 }: ParticleBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const animationIdRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Determine shape based on figure type
    const getShape = (): Particle['shape'] => {
      switch (type) {
        case 'poet': return Math.random() > 0.5 ? 'petal' : 'circle';
        case 'strategist': return Math.random() > 0.6 ? 'star' : 'circle';
        case 'philosopher': return Math.random() > 0.4 ? 'diamond' : 'circle';
        case 'emperor': return Math.random() > 0.3 ? 'star' : 'diamond';
        case 'scholar': return Math.random() > 0.5 ? 'petal' : 'circle';
        case 'general': return Math.random() > 0.5 ? 'star' : 'diamond';
      }
    };

    // Initialize particles
    const count = Math.min(density, 120);
    particlesRef.current = Array.from({ length: count }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: 1 + Math.random() * 3,
      speedX: (Math.random() - 0.5) * speed,
      speedY: (Math.random() - 0.5) * speed - 0.1,
      opacity: 0.1 + Math.random() * 0.3,
      life: 0,
      maxLife: 300 + Math.random() * 700,
      shape: getShape(),
      rotation: Math.random() * Math.PI * 2,
      rotationSpeed: (Math.random() - 0.5) * 0.02,
    }));

    // Mouse tracking
    const handleMouse = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', handleMouse);

    // Animation loop
    const animate = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const particles = particlesRef.current;
      const mouse = mouseRef.current;

      // Parse hex color to RGB
      const r = parseInt(color.slice(1, 3), 16);
      const g = parseInt(color.slice(3, 5), 16);
      const b = parseInt(color.slice(5, 7), 16);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.life++;
        p.rotation += p.rotationSpeed;

        // Mouse interaction - gentle repulsion/attraction
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 150 && dist > 0) {
          const force = (150 - dist) / 150 * 0.02;
          p.speedX += (dx / dist) * force;
          p.speedY += (dy / dist) * force;
        }

        // Apply speed
        p.x += p.speedX;
        p.y += p.speedY;

        // Gentle drift back toward center
        p.speedX += (Math.random() - 0.5) * 0.01;
        p.speedY += (Math.random() - 0.5) * 0.01;

        // Damping
        p.speedX *= 0.99;
        p.speedY *= 0.99;

        // Wrapping with soft edge
        if (p.x < -20) p.x = canvas.width + 20;
        if (p.x > canvas.width + 20) p.x = -20;
        if (p.y < -20) p.y = canvas.height + 20;
        if (p.y > canvas.height + 20) p.y = -20;

        // Life-based opacity
        const lifeRatio = p.life / p.maxLife;
        const currentOpacity = lifeRatio < 0.2
          ? p.opacity * (lifeRatio / 0.2)
          : lifeRatio > 0.8
            ? p.opacity * (1 - (lifeRatio - 0.8) / 0.2)
            : p.opacity;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        ctx.globalAlpha = currentOpacity;

        // Draw based on shape
        ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
        ctx.strokeStyle = `rgb(${r}, ${g}, ${b})`;

        const s = p.size;
        switch (p.shape) {
          case 'circle':
            ctx.beginPath();
            ctx.arc(0, 0, s, 0, Math.PI * 2);
            ctx.fill();
            break;
          case 'star':
            ctx.beginPath();
            for (let j = 0; j < 5; j++) {
              const angle = (j * 4 * Math.PI) / 5 - Math.PI / 2;
              const method = j === 0 ? 'moveTo' : 'lineTo';
              ctx[method](Math.cos(angle) * s * 1.5, Math.sin(angle) * s * 1.5);
            }
            ctx.closePath();
            ctx.fill();
            break;
          case 'diamond':
            ctx.beginPath();
            ctx.moveTo(0, -s * 1.5);
            ctx.lineTo(s * 1.2, 0);
            ctx.lineTo(0, s * 1.5);
            ctx.lineTo(-s * 1.2, 0);
            ctx.closePath();
            ctx.fill();
            break;
          case 'petal':
            ctx.beginPath();
            ctx.ellipse(0, -s * 0.8, s * 0.4, s * 0.8, 0, 0, Math.PI * 2);
            ctx.ellipse(0, s * 0.8, s * 0.4, s * 0.8, 0, 0, Math.PI * 2);
            ctx.fill();
            break;
        }

        ctx.restore();

        // Draw connections between nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx2 = p.x - p2.x;
          const dy2 = p.y - p2.y;
          const dist2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);
          if (dist2 < 80) {
            const alpha = (1 - dist2 / 80) * 0.08;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgb(${r}, ${g}, ${b})`;
            ctx.globalAlpha = alpha;
            ctx.stroke();
          }
        }
      }

      // Recycle dead particles
      for (let i = 0; i < particles.length; i++) {
        if (particles[i].life >= particles[i].maxLife) {
          particles[i] = {
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: 1 + Math.random() * 3,
            speedX: (Math.random() - 0.5) * speed,
            speedY: (Math.random() - 0.5) * speed - 0.1,
            opacity: 0.1 + Math.random() * 0.3,
            life: 0,
            maxLife: 300 + Math.random() * 700,
            shape: getShape(),
            rotation: Math.random() * Math.PI * 2,
            rotationSpeed: (Math.random() - 0.5) * 0.02,
          };
        }
      }

      animationIdRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationIdRef.current);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouse);
    };
  }, [type, color, density, speed]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.8 }}
    />
  );
}
