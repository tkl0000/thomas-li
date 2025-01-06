"use client";
import React, { useState, useRef } from "react";

// interface ProjectCarouselProps {
//     name: string,
//     link: string,
// }

const ProjectCarousel = () => {
    const projectNames = ["Hello", "Bro", "Type", "Meep", "Type", "Sheep", "Type", "Beep", "Okay", "Wtf"]
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const carouselRef = useRef<HTMLDivElement | null>(null);

    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!carouselRef.current) return;

        setIsDragging(true);
        setStartX(e.pageX - carouselRef.current.offsetLeft);
        setScrollLeft(carouselRef.current.scrollLeft);
    };

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!isDragging || !carouselRef.current) return;

        e.preventDefault();
        const x = e.pageX - carouselRef.current.offsetLeft;
        const walk = (x - startX) * 1.5; // Adjust sensitivity
        carouselRef.current.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUpOrLeave = () => {
        setIsDragging(false);
    };

    const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
        if (!carouselRef.current) return;

        setIsDragging(true);
        setStartX(e.touches[0].pageX - carouselRef.current.offsetLeft);
        setScrollLeft(carouselRef.current.scrollLeft);
    };

    const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
        if (!isDragging || !carouselRef.current) return;

        const x = e.touches[0].pageX - carouselRef.current.offsetLeft;
        const walk = (x - startX) * 1.5; // Adjust sensitivity
        carouselRef.current.scrollLeft = scrollLeft - walk;
    };

    return (
        // <div
        // className="flex gap-4 overflow-x-scroll scrollbar-hide scroll-smooth cursor-grab active:cursor-grabbing"
        // ref={carouselRef}
        // onMouseDown={handleMouseDown}
        // onMouseMove={handleMouseMove}
        // onMouseUp={handleMouseUpOrLeave}
        // onMouseLeave={handleMouseUpOrLeave}
        // onTouchStart={handleTouchStart}
        // onTouchMove={handleTouchMove}
        // onTouchEnd={handleMouseUpOrLeave}
        // >
        // {projectNames.map((item, index) => (
        //     <div key={index} className="flex-shrink-0 w-48 h-32 bg-gray-200 flex items-center justify-center text-lg font-bold rounded-lg shadow-md">
        //     {item}
        //     </div>
        // ))}
        // </div>
        <div className="flex flex-row">

        </div>
    );
}

export default ProjectCarousel