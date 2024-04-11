'use client';

import { motion } from 'framer-motion';

interface MotionDivProps {
  whileInView: any;
  initial: any;
  transition?: any;
  className?: string;
  children: any;
}
export default function MotionDiv({
  whileInView,
  initial,
  transition,
  className,
  children,
}: MotionDivProps) {
  return (
    <motion.div
      whileInView={whileInView}
      viewport={{ once: true }}
      initial={initial}
      transition={transition}
      className={className}
    >
      {children}
    </motion.div>
  );
}
