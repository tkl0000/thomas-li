"use client";
import React, { useState, useRef } from "react";

const DraggableText = ({ children }: { children: React.ReactNode }) => {
    const [position, setPosition] = useState(0);
    const isDragging = useRef(false);
    const startX = useRef(0);

    const handleMouseDown = (event: React.MouseEvent) => {
        isDragging.current = true;
        startX.current = event.clientX;
    };

    const handleMouseMove = (event: React.MouseEvent) => {
        if (!isDragging.current) return;

        const deltaX = event.clientX - startX.current;
        startX.current = event.clientX;
        setPosition((prev) => prev + deltaX);
    };

    const handleMouseUp = () => {
        isDragging.current = false;
    };

    return (
        <div
            className="flex relative w-full overflow-hidden cursor-grab"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseUp}
            onMouseUp={handleMouseUp}
            style={{
                maskImage: "linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%)",
                WebkitMaskImage:
                    "linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%)",
            }}
        >
            <div
                className="py-8 flex flex-row space-x-16 whitespace-nowrap"
                style={{
                    transform: `translateX(${position}px)`,
                }}
                onMouseDown={handleMouseDown}
            >
                {children}
            </div>
        </div>
    );
};

export default DraggableText;