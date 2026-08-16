"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";

interface Tilt3DCardProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  maxRotation?: number;
  scaleOnHover?: number;
  onClick?: () => void;
}

export default function Tilt3DCard({
  children,
  className = "",
  style = {},
  maxRotation = 12,
  scaleOnHover = 1.03,
  onClick,
}: Tilt3DCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50, opacity: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // Calculate rotation (-maxRotation to +maxRotation)
    const rotX = ((mouseY - height / 2) / (height / 2)) * -maxRotation;
    const rotY = ((mouseX - width / 2) / (width / 2)) * maxRotation;

    setRotateX(rotX);
    setRotateY(rotY);

    // Glare position percentage
    const glareX = (mouseX / width) * 100;
    const glareY = (mouseY / height) * 100;
    setGlarePos({ x: glareX, y: glareY, opacity: 0.2 });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
    setGlarePos((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div style={{ perspective: 1000, width: "100%", height: "100%" }}>
      <motion.div
        ref={cardRef}
        className={className}
        onClick={onClick}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        animate={{
          rotateX,
          rotateY,
          scale: isHovered ? scaleOnHover : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 25,
          mass: 0.5,
        }}
        style={{
          transformStyle: "preserve-3d",
          position: "relative",
          cursor: onClick ? "pointer" : "default",
          ...style,
        }}
      >
        {/* Children content with 3D depth */}
        <div style={{ transform: "translateZ(20px)", transformStyle: "preserve-3d", height: "100%" }}>
          {children}
        </div>

        {/* Dynamic 3D Glare Highlight */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "inherit",
            pointerEvents: "none",
            background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(255, 255, 255, ${glarePos.opacity}) 0%, transparent 80%)`,
            transition: "opacity 0.25s ease",
            zIndex: 10,
          }}
        />
      </motion.div>
    </div>
  );
}
