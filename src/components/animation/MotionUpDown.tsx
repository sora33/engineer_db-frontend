"use client";
// 表示後に上下に揺れるアニメーションを繰り返す

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

interface Props {
  children: React.ReactNode;
  duration?: number;
  delay?: number;
  y?: string;
}

export const MotionUpDown: React.FC<Props> = ({
  children,
  duration = 5,
  delay = 0,
  y = "1rem",
}) => {
  const pathName = usePathname();
  return (
    <motion.div
      key={pathName}
      animate={{
        transform: ["translateY(0px)", `translateY(${y})`, "translateY(0px)"],
      }}
      transition={{
        delay,
        duration,
        times: [0, 0.6, 1],
        repeat: Infinity,
      }}
    >
      {children}
    </motion.div>
  );
};
