import { useEffect, useRef } from 'react';

/** Interactive particle constellation behind the hero (HiDPI, pointer repulsion). */
export default function HeroConstellationCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let raf;
    let width = 0;
    let height = 0;
    let particles = [];
    const pointer = { x: null, y: null, radius: 140 };

    const init = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const rect = parent.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.min(Math.floor((width * height) / 14000), 65);
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: Math.random() * 1.6 + 1,
      }));
    };

    const setPointer = (cx, cy) => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = cx - rect.left;
      pointer.y = cy - rect.top;
    };
    const onMouse = (e) => setPointer(e.clientX, e.clientY);
    const onTouch = (e) => e.touches[0] && setPointer(e.touches[0].clientX, e.touches[0].clientY);
    const onLeave = () => {
      pointer.x = null;
      pointer.y = null;
    };

    const line = (x1, y1, x2, y2, color, w) => {
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.strokeStyle = color;
      ctx.lineWidth = w;
      ctx.stroke();
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      const hasPointer = pointer.x !== null && pointer.y !== null;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        let pd = Infinity;
        if (hasPointer) {
          const dx = p.x - pointer.x;
          const dy = p.y - pointer.y;
          pd = Math.hypot(dx, dy);
          if (pd < pointer.radius && pd > 0) {
            const force = (pointer.radius - pd) / pointer.radius;
            p.x += (dx / pd) * force * 0.8;
            p.y += (dy / pd) * force * 0.8;
          }
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(56, 189, 248, 0.55)';
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const d = Math.hypot(p.x - q.x, p.y - q.y);
          if (d < 130) line(p.x, p.y, q.x, q.y, `rgba(129, 140, 248, ${(1 - d / 130) * 0.22})`, 0.8);
        }

        if (hasPointer && pd < 150) {
          line(p.x, p.y, pointer.x, pointer.y, `rgba(56, 189, 248, ${(1 - pd / 150) * 0.35})`, 0.9);
        }
      }
      raf = requestAnimationFrame(draw);
    };

    init();
    draw();
    window.addEventListener('resize', init);
    window.addEventListener('mousemove', onMouse);
    window.addEventListener('touchmove', onTouch, { passive: true });
    window.addEventListener('mouseleave', onLeave);
    window.addEventListener('touchend', onLeave);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', init);
      window.removeEventListener('mousemove', onMouse);
      window.removeEventListener('touchmove', onTouch);
      window.removeEventListener('mouseleave', onLeave);
      window.removeEventListener('touchend', onLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none opacity-80"
      aria-hidden="true"
    />
  );
}
