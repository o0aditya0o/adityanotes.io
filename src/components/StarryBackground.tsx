'use client';

import { useEffect, useRef } from 'react';

interface Star {
    x: number;
    y: number;
    radius: number;
    alpha: number;
    speed: number;
}

interface Comet {
    x: number;
    y: number;
    length: number;
    speed: number;
    opacity: number;
}

interface Nebula {
    x: number;
    y: number;
    radius: number;
    color: string;
    opacity: number;
}

export default function StarryBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let stars: Star[] = [];
        let comets: Comet[] = [];
        let nebulae: Nebula[] = [];

        const initElements = () => {
            stars = [];
            nebulae = [];
            const width = window.innerWidth;
            const height = window.innerHeight;

            // 1. Milky Way (Dense band of faint stars)
            // Represented by a high density diagonal strip
            const milkyWayCount = Math.floor((width * height) / 800);
            for (let i = 0; i < milkyWayCount; i++) {
                const x = Math.random() * width;
                const slope = 0.5; // Diagonal slope
                const y = (x * slope) + (Math.random() * 400 - 200); // Band width scatter

                // Wrap Y to fit screen
                const finalY = y % height;
                if (finalY < 0) continue;

                stars.push({
                    x: x,
                    y: finalY,
                    radius: Math.random() * 0.8,
                    alpha: Math.random() * 0.4, // Fainter
                    speed: Math.random() * 0.02 + 0.005
                });
            }

            // 2. Normal Background Stars
            const starCount = Math.floor((width * height) / 3000);
            for (let i = 0; i < starCount; i++) {
                stars.push({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    radius: Math.random() * 1.5,
                    alpha: Math.random(),
                    speed: Math.random() * 0.05 + 0.01
                });
            }

            // 3. Nebulae (Large, soft colored clouds)
            // Colors: Deep Purple, Cosmic Teal, Magenta
            const nebulaColors = [
                'rgba(76, 29, 149, 0.15)', // Violet
                'rgba(45, 212, 191, 0.1)', // Teal
                'rgba(219, 39, 119, 0.1)'  // Pink
            ];

            const nebulaCount = 5;
            for (let i = 0; i < nebulaCount; i++) {
                nebulae.push({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    radius: Math.random() * 300 + 200,
                    color: nebulaColors[Math.floor(Math.random() * nebulaColors.length)],
                    opacity: Math.random() * 0.5 + 0.2
                });
            }
        };

        const createComet = () => {
            comets.push({
                x: Math.random() * window.innerWidth,
                y: 0,
                length: Math.random() * 80 + 100,
                speed: Math.random() * 5 + 4,
                opacity: 1
            });
        };

        const draw = () => {
            if (!ctx || !canvas) return;

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw Nebulae (Background Layer)
            nebulae.forEach(nebula => {
                const gradient = ctx.createRadialGradient(nebula.x, nebula.y, 0, nebula.x, nebula.y, nebula.radius);
                gradient.addColorStop(0, nebula.color);
                gradient.addColorStop(1, 'rgba(0,0,0,0)');

                ctx.fillStyle = gradient;
                ctx.globalCompositeOperation = 'screen'; // Blend mode for glowing effect
                ctx.fillRect(0, 0, canvas.width, canvas.height);
                ctx.globalCompositeOperation = 'source-over'; // Reset blend mode
            });

            // Draw Stars
            ctx.fillStyle = '#FFFFFF';
            stars.forEach(star => {
                ctx.globalAlpha = star.alpha;
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
                ctx.fill();

                // Update Position
                star.y -= star.speed;
                if (star.y < 0) {
                    star.y = canvas.height;
                    star.x = Math.random() * canvas.width; // Reset positions to keep distribution random
                }

                // Twinkle
                star.alpha += (Math.random() - 0.5) * 0.05;
                if (star.alpha <= 0) star.alpha = 0.1;
                if (star.alpha >= 1) star.alpha = 1;
            });

            // Draw Comets
            comets.forEach((comet, index) => {
                const gradient = ctx.createLinearGradient(comet.x, comet.y, comet.x + comet.length, comet.y - comet.length);
                gradient.addColorStop(0, `rgba(255, 255, 255, ${comet.opacity})`);
                gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

                ctx.strokeStyle = gradient;
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.moveTo(comet.x, comet.y);
                ctx.lineTo(comet.x + comet.length, comet.y - comet.length);
                ctx.stroke();

                comet.x -= comet.speed;
                comet.y += comet.speed;
                comet.opacity -= 0.01;

                if (comet.opacity <= 0) comets.splice(index, 1);
            });

            if (Math.random() < 0.005) createComet();

            animationFrameId = requestAnimationFrame(draw);
        };

        const handleResize = () => {
            if (canvas) {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
                initElements();
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        draw();

        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: -1,
                pointerEvents: 'none',
                background: 'linear-gradient(to bottom, #050a14, #000000)' // Darker deep space
            }}
        />
    );
}
