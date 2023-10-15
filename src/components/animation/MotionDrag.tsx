"use client";

import { motion } from "framer-motion";
interface Props {
  children: React.ReactNode;
}

export const MotionDrag: React.FC<Props> = ({ children }) => (
  <motion.div
    drag
    dragConstraints={{
      top: -50,
      left: -50,
      right: 50,
      bottom: 50,
    }}
    dragElastic={0.5}
    className="cursor-move"
  >
    {children}
  </motion.div>
);
