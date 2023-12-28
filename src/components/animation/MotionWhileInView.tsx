"use client";
// スクロールアニメーションで下から上に表示

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

interface Props {
  duration?: number;
  delay?: number;
  variant?: "opacity" | "scale" | "translate";
  translateY?: string;
  isAnimate?: boolean;
  children: React.ReactNode;
}

export const MotionWhileInView: React.FC<Props> = ({
  children,
  delay = 0,
  duration = 1,
  translateY = "16",
  variant = "opacity",
  isAnimate,
}) => {
  const pathName = usePathname();

  const animationVariants = {
    opacity: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
    },
    scale: {
      initial: { opacity: 0, scale: 0 },
      animate: { opacity: 1, scale: 1 },
    },
    translate: {
      initial: { opacity: 0, y: translateY },
      animate: { opacity: 1, y: 0, x: 0 },
    },
  };
  const selectedVariant = animationVariants[variant];

  return (
    <motion.div
      key={pathName}
      variants={selectedVariant}
      initial="initial"
      animate={isAnimate ? "animate" : ""}
      whileInView="animate"
      viewport={{ once: true }}
      transition={{
        delay,
        duration,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
};
