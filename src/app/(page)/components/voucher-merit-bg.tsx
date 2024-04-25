/* eslint-disable react/no-array-index-key */

'use client';

import { useState } from 'react';
import { voucherMerit } from '@/app/config/constants';
import VoucherMeritCard from './voucher-merit-card';
import { cn } from '@/lib/utils';

export default function VoucherMeritBG() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleMouseEnter = (idx: any) => {
    setHoveredCard(idx);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  return (
    <div
      className={cn(
        'relative mx-auto flex w-full max-w-[1820px] items-center rounded-3xl bg-black bg-opacity-50 duration-500',
        hoveredCard === 0
          ? 'bg-meritimg1 bg-cover opacity-100'
          : hoveredCard === 1
            ? 'bg-meritimg2 bg-cover opacity-100'
            : hoveredCard === 2
              ? 'bg-meritimg3 bg-cover opacity-100'
              : 'bg-meritimg1 bg-cover opacity-100',
      )}
    >
      <div className=" absolute top-0 px-40 py-20 text-[32px] font-bold text-white">
        VOUCHER Merit
      </div>
      {voucherMerit.map((e, idx) => (
        <div
          key={idx}
          onMouseEnter={() => handleMouseEnter(idx)}
          onMouseLeave={handleMouseLeave}
          className="relative flex w-1/3 justify-center"
        >
          <VoucherMeritCard
            number={e.number}
            merit={e.merit}
            description={e.description}
          />
          {idx !== voucherMerit.length - 1 && (
            <div
              className="absolute h-full w-px bg-gray-600 bg-opacity-40"
              style={{ right: 0, top: '50%', transform: 'translateY(-50%)' }}
            />
          )}
        </div>
      ))}
    </div>
  );
}
