"use client";

import React, { useRef, useEffect, useState, useMemo } from "react";

interface TrianglesProps {
  direction?: "diagonal" | "up" | "right" | "down" | "left";
  speed?: number;
  borderColor?: string;
  triangleSize?: number;
}

const ThirtyDegreesTextBg: React.FC<TrianglesProps> = ({
  direction = "right",
  speed = 1,
  borderColor = "#999",
  triangleSize = 50,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number | null>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  // Create SVG text pattern (memoized to prevent flickering)
  const triangleHeight = (triangleSize * Math.sqrt(3)) / 2;
  const spacing = triangleSize * 0.5; // Add 50% spacing
  const patternWidth = triangleSize + spacing;
  const patternHeight = triangleHeight + spacing;

  const svgPattern = useMemo(
    () => `
    <svg width="${patternWidth}" height="${patternHeight}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="textPattern" x="0" y="0" width="${patternWidth}" height="${patternHeight}" patternUnits="userSpaceOnUse">
          <text 
            x="${patternWidth / 2}" 
            y="${patternHeight / 2}" 
            text-anchor="middle" 
            dominant-baseline="middle" 
            font-family="Arial, sans-serif" 
            font-size="${triangleSize * 0.3}" 
            fill="${borderColor}"
          >
            30°
          </text>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#textPattern)" />
    </svg>
  `,
    [triangleSize, triangleHeight, borderColor, patternWidth, patternHeight]
  );

  useEffect(() => {
    const updateAnimation = () => {
      const effectiveSpeed = Math.max(speed, 0.1);
      setOffset((prev) => {
        let newX = prev.x;
        let newY = prev.y;

        switch (direction) {
          case "right":
            newX = (prev.x - effectiveSpeed + patternWidth) % patternWidth;
            break;
          case "left":
            newX = (prev.x + effectiveSpeed + patternWidth) % patternWidth;
            break;
          case "up":
            newY = (prev.y + effectiveSpeed + patternHeight) % patternHeight;
            break;
          case "down":
            newY = (prev.y - effectiveSpeed + patternHeight) % patternHeight;
            break;
          case "diagonal":
            newX = (prev.x - effectiveSpeed + patternWidth) % patternWidth;
            newY = (prev.y + effectiveSpeed + patternHeight) % patternHeight;
            break;
          default:
            break;
        }

        return { x: newX, y: newY };
      });

      requestRef.current = requestAnimationFrame(updateAnimation);
    };

    requestRef.current = requestAnimationFrame(updateAnimation);

    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [direction, speed, triangleSize]);

  return (
    <div
      ref={containerRef}
      className="w-full h-full relative overflow-hidden"
      style={{
        backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(
          svgPattern
        )}")`,
        backgroundPosition: `${offset.x}px ${offset.y}px`,
        backgroundRepeat: "repeat",
        willChange: "background-position",
      }}
    />
  );
};

export default ThirtyDegreesTextBg;
