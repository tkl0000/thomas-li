"use client";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react"

interface SliderProps {
    title: string,
    value: number,
    setValue: Dispatch<SetStateAction<number>>
}

const Slider: React.FC<SliderProps> = ({ title, value, setValue }) => {
    return (
        <div className="flex flex-row gap-5 p-3 rounded-lg bg-white text-black w-fit fixed right-5 bottom-5 z-10">
            <p className="">
                {/* {title}: {value} */}
                {value}
            </p>
            <input
                type="range"
                min="0"
                max="200"
                value={value}
                onChange={(e) => {
                    const newValue = e.target.value as unknown as number
                    setValue(e.target.value as unknown as number)
                    console.log(newValue)
                }}
                className="w-20">
            </input>
        </div>
    );
}

const Canvas = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null)
    const [pixelSize, setPixelSize] = useState<number>(10);
    const [burstSize, setBurstSize] = useState<number>(100);
    const burstSizeRef = useRef(burstSize)

    useEffect(() => {
        burstSizeRef.current = burstSize;
    }, [burstSize]);

    const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
    const setFirework = async (x: number, y: number) => {
        const canvas = canvasRef.current
        if (!canvas) return
        const rect = canvas.getBoundingClientRect();
        const startY = Math.floor(rect.bottom / pixelSize);
        const endY = y
        // for (var _y = startY; _y >= endY; --_y) {
        //     drawPixel(x, _y, 'white')
        //     console.log(endY)
        //     await delay(25)
        // }
        console.log(burstSizeRef.current)
        for (var rad = 0; rad < 2 * Math.PI; rad += Math.PI / 8) {
            dropPixel(x, endY, burstSizeRef.current * Math.cos(rad), burstSizeRef.current * Math.sin(rad))
        }
    }

    const drawPixel = (x: number, y: number, color: string) => {
        const canvas = canvasRef.current
        if (!canvas) return
        const ctx = canvas.getContext('2d')
        if (!ctx) return
        ctx.fillStyle = color;
        ctx.fillRect(x * pixelSize, y * pixelSize, pixelSize, pixelSize);
    };

    const dropPixel = async (x: number, y: number, velocityX: number, velocityY: number) => {
        var curX = x
        var curY = y
        const canvas = canvasRef.current
        if (!canvas) return
        const rect = canvas.getBoundingClientRect();
        while (0 < curX && curX < rect.right / pixelSize && 0 < curY && curY < rect.bottom / pixelSize) {
            drawPixel(curX, curY, 'white')
            curX += velocityX / 100
            curY += velocityY / 100
            velocityY += 0.01 * 70 // gravitational constant XD
            await delay(10)
        }
    }

    const onClick = (e: MouseEvent) => {
        const canvas = canvasRef.current
        if (!canvas) return
        const rect = canvas.getBoundingClientRect();
        const x = Math.floor((e.clientX - rect.left) / pixelSize);
        const y = Math.floor((e.clientY - rect.top) / pixelSize);
        console.log(burstSize)
        setFirework(x, y)
        // dropPixel(x, y, 0, 0)
    }

    const handleMouseMove = (e: MouseEvent) => {
        const canvas = canvasRef.current
        if (!canvas) return
        const rect = canvas.getBoundingClientRect();
        const x = Math.floor((e.clientX - rect.left) / pixelSize);
        const y = Math.floor((e.clientY - rect.top) / pixelSize);
        drawPixel(x, y, 'white');
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (ctx) {
            ctx.fillStyle = 'white'
            ctx.fillRect(0, 0, canvas.width, canvas.height);
        }

        const resizeCanvas = () => {
            if (!canvas) return
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            if (ctx) {
                ctx.fillStyle = 'white'
                ctx.fillRect(0, 0, canvas.width, canvas.height);
            }
        };

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        const fadePixels = () => {
            if (!ctx) return
            ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
        };

        const fadeOut = () => {
            fadePixels()
            requestAnimationFrame(fadeOut)
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
        <div>
            <canvas
                ref={canvasRef}
                style={{ display: 'block', position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh' }}
            />
            <Slider title="Burst Size" value={burstSize} setValue={setBurstSize} />
        </div>
    )
}

export default Canvas