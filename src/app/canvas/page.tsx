"use client";
import { useEffect, useRef } from "react"

const Canvas = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null)
    useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.fillStyle = 'white'
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    return () => {
        window.removeEventListener('resize', resizeCanvas);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{ display: 'block', position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh' }}
        />
    )
}

export default Canvas