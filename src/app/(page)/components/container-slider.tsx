'use client';

import React, { useState } from 'react';
import StyleUnderLineText from './style-underline-text';

export default function ParentComponent() {
  const [containerIndex, setContainerIndex] = useState(0);

  const handleContainerSlide = (index: number) => {
    setContainerIndex(index);
  };

  const handleTextClick = (text: string) => {
    const index = ['JANGJEON', '집찍고', 'SNIPERFACTORY'].indexOf(text);
    if (index !== -1) {
      setContainerIndex(index);
    }
  };

  return (
    <section className="flex w-full flex-col bg-white py-40">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8">
        {/* 다른 내용 */}
        <div className="mx-auto w-[1360px] min-w-[1360px] pl-80 pr-80">
          <div className="mx-auto flex h-auto flex-col justify-center space-y-16 text-center">
            <div>
              <div className="flex w-full translate-x-60">
                <ul className=" flex space-x-20" />
                <div
                  onClick={() => handleTextClick('JANGJEON')}
                  role="presentation"
                >
                  JANGJEON 컨테이너
                </div>
                <div
                  onClick={() => handleTextClick('집찍고')}
                  role="presentation"
                >
                  집찍고 컨테이너
                </div>
                <div
                  onClick={() => handleTextClick('SNIPERFACTORY')}
                  role="presentation"
                >
                  SNIPERFACTORY 컨테이너
                </div>
              </div>
            </div>
            <div
              className="flex"
              style={{ transform: `translateX(-${containerIndex * 100}%)` }}
            >
              <div className=" container relative bg-red-500 ease-in">
                컨테이너 1
              </div>
              <div className="container relative bg-blue-500">컨테이너 2</div>
              <div className="container relative bg-yellow-500">컨테이너 3</div>
            </div>
            <StyleUnderLineText onContainerSlide={handleContainerSlide} />
          </div>
        </div>
      </div>
    </section>
  );
}
