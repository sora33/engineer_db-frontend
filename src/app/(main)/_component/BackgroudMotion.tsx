"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const generateRandomValue = (min: number, max: number) => {
  return Math.random() * (max - min) + min;
};

const generateRandomColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgba(${r},${g},${b},0.05)`;
};

type props = {
  index: number;
};
export const BackgroudMotion: React.FC<props> = ({ index }) => {
  const [size, setSize] = useState<number>(0);

  useEffect(() => {
    const newSize = generateRandomValue(1, (window.innerWidth * 0.3) / 16);
    setSize(newSize);
  }, []);
  const randomX = generateRandomValue(0, 100);
  const randomY = generateRandomValue(0, 100);
  const randomDuration = generateRandomValue(1, 10);
  const randomColor = generateRandomColor();

  return (
    <motion.div
      className="fixed -z-10 rounded-full"
      style={{
        backgroundColor: randomColor,
        top: `${randomY}%`,
        left: `${randomX}%`,
        width: `${size}rem`,
        height: `${size}rem`,
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: randomDuration,
        delay: index * 0.2,
        yoyo: Infinity,
      }}
    />
  );
};
