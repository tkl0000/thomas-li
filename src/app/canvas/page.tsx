"use client";
import { useEffect, useRef } from "react"

const Canvas = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null)
    const pixelSize = 5
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (ctx) {
            ctx.fillStyle = 'white'
            ctx.fillRect(0, 0, canvas.width, canvas.height);
        }

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            if (ctx) {
                ctx.fillStyle = 'white'
                ctx.fillRect(0, 0, canvas.width, canvas.height);
            }
        };

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        const drawPixel = (x: number, y: number, color: string) => {
            if (!ctx) return
            ctx.fillStyle = color;
            ctx.fillRect(x * pixelSize, y * pixelSize, pixelSize, pixelSize);
        };

        const fadePixels = () => {
            if (!ctx) return
            ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
        };

        const handleMouseMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            const x = Math.floor((e.clientX - rect.left) / pixelSize);
            const y = Math.floor((e.clientY - rect.top) / pixelSize);
            drawPixel(x, y, 'white');
        };

        const fadeOut = () => {
            fadePixels()
            requestAnimationFrame(fadeOut)
        }

        const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
        const setFirework = async (x: number, y: number) => {
            const rect = canvas.getBoundingClientRect();
            const startY = Math.floor(rect.bottom / pixelSize);
            const endY = y
            console.log(startY)
            // for (var _y = startY; _y >= endY; --_y) {
            //     drawPixel(x, _y, 'white')
            //     console.log(endY)
            //     await delay(25)
            // }
            const size = 100
            for (var rad = 0; rad < 2*Math.PI; rad += Math.PI/8) {
                dropPixel(x, endY, size * Math.cos(rad), size * Math.sin(rad))
            }
        }

        const dropPixel = async (x: number, y: number, velocityX: number, velocityY: number) => {
            var curX = x
            var curY = y
            const rect = canvas.getBoundingClientRect();
            while (0 < curX && curX < rect.right/pixelSize && 0 < curY && curY < rect.bottom/pixelSize) {
                drawPixel(curX, curY, 'white')
                curX += velocityX / 100
                curY += velocityY / 100
                velocityY += 0.01 * 70 // gravitational constant XD
                await delay(10)
            }
        }

        const onClick = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            const x = Math.floor((e.clientX - rect.left) / pixelSize);
            const y = Math.floor((e.clientY - rect.top) / pixelSize);
            setFirework(x, y)
            // dropPixel(x, y, 0, 0)
        }

        fadeOut()
        canvas.addEventListener('mousemove', handleMouseMove)
        canvas.addEventListener('click', onClick)

        return () => {
            window.removeEventListener('resize', resizeCanvas)
            canvas.removeEventListener('mousemove', handleMouseMove)
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