/* eslint-disable no-unused-vars */
/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-static-element-interactions */

'use client';

import { useState } from 'react';

interface StyleUnderLineTextProps {
  onContainerSlide?: (index: number) => void;
}

export default function StyleUnderLineText({
  onContainerSlide,
}: StyleUnderLineTextProps) {
  const service = ['JANGJEON', '집찍고', 'SNIPERFACTORY'];
  const [selectedText, setSelectedText] = useState('JANGJEON');

  const handleClick = (text: any, index: number) => {
    setSelectedText(text);
    if (onContainerSlide) {
      onContainerSlide(index);
    }
  };

  return (
    <div className="relative flex justify-center gap-5 py-12 font-bold mobile:gap-20">
      {service.map((text, idx) => (
        <div key={idx} className="relative cursor-pointer">
          <div
            className={`relative z-50 text-BB16 mobile:text-HB28 mobile:font-bold ${selectedText === text ? '' : ' text-[#929292]'}`}
            onClick={() => handleClick(text, idx)}
          >
            {text}
          </div>
          {selectedText === text && (
            <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-[#ACD6FD]" />
          )}
        </div>
      ))}
    </div>
  );
}
