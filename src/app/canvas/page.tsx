"use client";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react"

interface SliderProps {
    title: string,
    value: number,
    setValue: Dispatch<SetStateAction<number>>,
    lower: number,
    upper: number,
}

const Slider: React.FC<SliderProps> = ({ title, value, setValue, lower, upper }) => {
    return (
        <div className="flex flex-col gap-2 p-3 rounded-lg bg-white text-black w-full">
            <div className="flex flex-row justify-end">
                {title}
            </div>
            <div className="flex flex-row">
                <div className="mr-4">
                    {value}
                </div>
                <input
                    type="range"
                    min={lower}
                    max={upper}
                    value={value}
                    onChange={(e) => {
                        const newValue = e.target.value as unknown as number
                        setValue(e.target.value as unknown as number)
                        console.log(newValue)
                    }}
                    className="w-20">
                </input>
            </div>
        </div>
    );
}

const Canvas = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null)
    const [pixelSize, setPixelSize] = useState<number>(10);
    const [burstSize, setBurstSize] = useState<number>(100);
    const burstSizeRef = useRef(burstSize)
    const pixelSizeRef = useRef(pixelSize)

    useEffect(() => {
        burstSizeRef.current = burstSize;
        pixelSizeRef.current = pixelSize
    }, [burstSize, pixelSize]);

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
        for (var rad = 0; rad < 2 * Math.PI; rad += Math.PI / 12) {
            dropPixel(x, endY, burstSizeRef.current * Math.cos(rad), burstSizeRef.current * Math.sin(rad))
        }
    }

    const drawPixel = (x: number, y: number, color: string) => {
        const canvas = canvasRef.current
        if (!canvas) return
        const ctx = canvas.getContext('2d')
        if (!ctx) return
        ctx.fillStyle = color;
        const curPixelSize = pixelSizeRef.current
        ctx.fillRect(x * curPixelSize, y * curPixelSize, curPixelSize, curPixelSize);
    };

    const dropPixel = async (x: number, y: number, velocityX: number, velocityY: number) => {
        var curX = x
        var curY = y
        const canvas = canvasRef.current
        if (!canvas) return
        const rect = canvas.getBoundingClientRect();
        const curPixelSize = pixelSizeRef.current
        while (0 < curX && curX < rect.right / curPixelSize && 0 < curY && curY < rect.bottom / curPixelSize) {
            drawPixel(Math.floor(curX), Math.floor(curY), 'white')
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
        const curPixelSize = pixelSizeRef.current
        const x = Math.floor((e.clientX - rect.left) / curPixelSize);
        const y = Math.floor((e.clientY - rect.top) / curPixelSize);
        console.log(burstSize)
        setFirework(x, y)
        // dropPixel(x, y, 0, 0)
    }

    const handleMouseMove = (e: MouseEvent) => {
        const canvas = canvasRef.current
        if (!canvas) return
        const rect = canvas.getBoundingClientRect();
        const curPixelSize = pixelSizeRef.current
        const x = Math.floor((e.clientX - rect.left) / curPixelSize);
        const y = Math.floor((e.clientY - rect.top) / curPixelSize);
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
            <div className="fixed bottom-5 right-5 z-10 flex flex-col gap-5">
                <Slider title="Pixel Size" value={pixelSize} setValue={setPixelSize} lower={1} upper={40} />
                <Slider title="Burst Size" value={burstSize} setValue={setBurstSize} lower={0} upper={200} />
            </div>
        </div>
    )
}

export default Canvas