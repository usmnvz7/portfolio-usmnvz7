import React, { useEffect, useRef } from 'react';
import { useApp } from '../../context/AppContext';

interface Particle {
  x: number;
  y: number;
  z: number;
  baseX: number;
  baseY: number;
  size: number;
  speedX: number;
  speedY: number;
}

export const PremiumBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { theme } = useApp();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const particleCount = 120; 

  
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const z = Math.random() * 1.5 + 0.5; 
        
        particles.push({
          x,
          y,
          z,
          baseX: x,
          baseY: y,
          size: (Math.random() * 1.5 + 1) * (z > 1.2 ? 1.5 : 0.8), 
          speedX: (Math.random() * 0.4 - 0.2) * z,
          speedY: (Math.random() * 0.4 - 0.2) * z,
        });
      }
    };

    const drawScene = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      
      const isDark = theme === 'dark';
      const particleColor = isDark ? 'rgba(16, 185, 129, ' : 'rgba(99, 102, 241, '; 
      const lineColor = isDark ? 'rgba(16, 185, 129, ' : 'rgba(99, 102, 241, ';

     
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        
        p.baseX += p.speedX;
        p.baseY += p.speedY;

       
        if (p.baseX < 0) p.baseX = canvas.width;
        if (p.baseX > canvas.width) p.baseX = 0;
        if (p.baseY < 0) p.baseY = canvas.height;
        if (p.baseY > canvas.height) p.baseY = 0;

       
        const offsetX = (mouse.x - canvas.width / 2) * 0.03 * p.z;
        const offsetY = (mouse.y - canvas.height / 2) * 0.03 * p.z;

        p.x = p.baseX + offsetX;
        p.y = p.baseY + offsetY;

        
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `${particleColor}${p.z / 2})`;
        ctx.fill();

        
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

         
          if (distance < 110) {
           
            const alpha = (1 - distance / 110) * 0.15 * Math.min(p.z, p2.z);
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `${lineColor}${alpha})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(drawScene);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);
    
    resizeCanvas();
    drawScene();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1, 
        pointerEvents: 'none', 
        backgroundColor: theme === 'dark' ? '#0b111e' : '#f8fafc',
        transition: 'background-color 0.5s ease'
      }}
    />
  );
};

export default PremiumBackground;