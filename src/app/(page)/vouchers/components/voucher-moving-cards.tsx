/* eslint-disable react/no-array-index-key */

'use client';

import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { voucherBusiness } from '@/app/config/constants';

export function InfiniteMovingVoucherCards({
  direction = 'left',
  speed = 'slow',
  pauseOnHover = true,
  className,
}: {
  direction?: 'left' | 'right';
  speed?: 'fast' | 'normal' | 'slow';
  pauseOnHover?: boolean;
  className?: string;
}) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);

  const [start, setStart] = useState(false);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === 'left') {
        containerRef.current.style.setProperty(
          '--animation-direction',
          'forwards',
        );
      } else {
        containerRef.current.style.setProperty(
          '--animation-direction',
          'reverse',
        );
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === 'fast') {
        containerRef.current.style.setProperty('--animation-duration', '20s');
      } else if (speed === 'normal') {
        containerRef.current.style.setProperty('--animation-duration', '40s');
      } else {
        containerRef.current.style.setProperty('--animation-duration', '120s');
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        'scroller max-mobile:max-w-[415px] mobile:w-auto relative z-20 w-full overflow-hidden',
        className,
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          ' flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4',
          start && 'animate-scroll ',
          pauseOnHover && 'hover:[animation-play-state:paused]',
        )}
      >
        {voucherBusiness.map((item, index) => (
          <li
            className="mobile:px-8 mobile:py-6 mobile:w-[350px] relative w-[280px] max-w-full flex-shrink-0 rounded-2xl border border-b-0 border-slate-700 px-4 py-2 md:w-[450px]"
            style={{
              background:
                'linear-gradient(180deg, var(--slate-800), var(--slate-900)',
            }}
            key={index}
          >
            <blockquote>
              <div
                aria-hidden="true"
                className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)] rounded-3xl bg-white bg-opacity-50"
              />
              <span className=" relative z-20 text-sm font-normal leading-[1.6] text-gray-100">
                <img
                  src={item.voucherlogo}
                  alt={item.name}
                  className=" max-mobile:h-20"
                />
              </span>
              <div className="relative z-20 flex flex-row items-center">
                <span className="flex flex-col gap-3">
                  <span className=" mobile:text-BM24 text-BB16 leading-[1.6] text-white">
                    {item.name}
                  </span>
                  <span className=" mobile:text-BR16 text-BR12 leading-[1.6] text-[#C4C4C4]">
                    {item.description}
                  </span>
                </span>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
}
