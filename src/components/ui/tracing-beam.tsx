'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useTransform, useScroll, useSpring } from 'framer-motion';
import { cn } from '@/lib/utils';

export function TracingBeam({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const contentRef = useRef<HTMLDivElement>(null);
  const [svgHeight, setSvgHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setSvgHeight(contentRef.current.offsetHeight);
    }
  }, []);
  const y1 = useSpring(
    useTransform(scrollYProgress, [0, 0.8], [0, svgHeight]),
    {
      stiffness: 1000,
      damping: 90,
    },
  );
  const y2 = useSpring(
    useTransform(scrollYProgress, [0, 1], [50, svgHeight - 200]),
    {
      stiffness: 1000,
      damping: 90,
    },
  );

  return (
    <motion.div
      ref={ref}
      className={cn('relative mx-auto h-full w-full max-w-4xl', className)}
    >
      <div className="absolute -left-4 top-3 md:-left-20">
        <motion.div
          transition={{
            duration: 0.2,
            delay: 0.5,
          }}
          animate={{
            boxShadow:
              scrollYProgress.get() > 0
                ? 'none'
                : 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
          }}
          className="border-netural-200 mx-auto flex h-4 w-4 items-center justify-center rounded-full border bg-[#68B9F5] shadow-sm"
        >
          {/* 원모양 */}
          <motion.div
            transition={{
              duration: 0.2,
              delay: 0.5,
            }}
            animate={{
              backgroundColor: scrollYProgress.get() > 0 ? 'white' : '#68B9F5',
              borderColor: scrollYProgress.get() > 0 ? 'white' : '#68B9F5',
            }}
            className="h-2 w-2 rounded-full border border-neutral-300 bg-[#68B9F5]"
          />
        </motion.div>
        {/* 선 범위 */}
        <svg
          viewBox={`10 0 20 ${svgHeight}`}
          width="40"
          height={svgHeight} // Set the SVG height
          className=" mx-4 block"
          aria-hidden="true"
        >
          {/* 선 굴곡 */}
          {/* 보이는 선 */}
          <motion.path
            d={`M 1 0V -36 l 18 24 V ${svgHeight * 0.25} l 18 24V ${svgHeight * 0.27} l -18 24V ${svgHeight * 0.7} l 18 24V ${svgHeight * 0.72} l -18 24V ${svgHeight}`}
            fill="none"
            stroke="#9091A0"
            strokeOpacity="0.16"
            transition={{
              duration: 1,
            }}
            className=" relative"
          />
          {/* 애니메이션 선 */}
          <motion.path
            d={`M 1 0V -36 l 18 24 V ${svgHeight * 0.25} l 18 24V ${svgHeight * 0.27} l -18 24V ${svgHeight * 0.7} l 18 24V ${svgHeight * 0.72} l -18 24V ${svgHeight}`}
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="1.25"
            className="motion-reduce:hidden"
            transition={{
              duration: 10,
            }}
          />
          {/* 선 색 */}
          <defs>
            <motion.linearGradient
              id="gradient"
              gradientUnits="userSpaceOnUse"
              x1="0"
              x2="0"
              y1={y1} // set y1 for gradient
              y2={y2} // set y2 for gradient
            >
              <stop stopColor="#18CCFC" stopOpacity="0" />
              <stop stopColor="#18CCFC" />
              <stop offset="0.325" stopColor="#68B9F5" />
              <stop offset="1" stopColor="#68B9F5" stopOpacity="0" />
            </motion.linearGradient>
          </defs>
        </svg>
      </div>
      <div ref={contentRef}>{children}</div>
    </motion.div>
  );
}
