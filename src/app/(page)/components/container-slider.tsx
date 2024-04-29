'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import StyleUnderLineText from './style-underline-text';
import { Button } from '@/components/ui/button';

export default function ParentComponent() {
  const [containerIndex, setContainerIndex] = useState(0);

  const getTranslateX = () => {
    // 반응형일 때 translateX 값 계산
    if (typeof window !== 'undefined' && window.innerWidth < 415) {
      return `translateX(-${containerIndex * (window.innerWidth - 70)}px)`;
    }
    return `translateX(-${containerIndex * 1250}px)`;
  };

  const handleContainerSlide = (index: number) => {
    setContainerIndex(index);
  };

  return (
    <section className="flex w-full flex-col bg-white py-0 max-mobile:w-[415px] mobile:py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8">
        {/* 다른 내용 */}
        <div className="mx-auto w-[415px] mobile:w-[1360px] mobile:min-w-[1360px]">
          <div className="max-mobile:max-w-screen flex h-auto flex-col justify-center space-y-16 text-center">
            <div
              className="flex"
              style={{
                transform: getTranslateX(),
                transition: 'transform 0.5s ease-in-out',
              }}
            >
              <ul className="flex space-x-3 max-mobile:px-5 mobile:space-x-20">
                <li className="relative w-[320px] overflow-hidden overflow-x-hidden rounded-2xl mobile:w-[1200px]">
                  <div className=" relative flex h-[150px] bg-[#F7F7F7] mobile:h-[380px]">
                    <Image
                      src="/main-jangjeon.png"
                      width={800}
                      height={0}
                      alt="mainjangjeon"
                      className="w-1/2 max-mobile:h-4/5 mobile:w-2/3"
                    />
                    <div className="flex flex-col justify-center gap-2 mobile:gap-12">
                      <p className="text-left text-BB12 mobile:text-HB28">
                        서학개미 필수 앱!
                        <br />
                        국내 최초 실시간 해외뉴스 서비스
                      </p>
                      <Button className="flex items-center gap-3 rounded-full bg-white hover:bg-gray-300 mobile:py-8">
                        <Image
                          src="/main-jangjeon-logo.svg"
                          width={210}
                          height={0}
                          alt="jangjeon-logo"
                        />
                        <ArrowRight color="#000000" />
                      </Button>
                    </div>
                  </div>
                </li>
                <li className="relative w-[320px] overflow-hidden rounded-2xl mobile:w-[1200px]">
                  <div className=" relative flex h-[150px] bg-[#F7F7F7] mobile:h-[380px]">
                    <div className=" flex w-2/3 justify-center gap-2 mobile:gap-20">
                      <Image
                        src="/main-jjiggo1.svg"
                        width={280}
                        height={0}
                        alt="main-jjiggo1"
                      />
                      <Image
                        src="/main-jjiggo2.svg"
                        width={280}
                        height={0}
                        alt="main-jjiggo2"
                      />
                    </div>
                    <div className="flex flex-col justify-center gap-2 mobile:gap-12">
                      <p className="text-left text-BB12 mobile:text-HB28">
                        프롭테크의 시대,
                        <br />
                        공인중개사의 필수 매물 사진첩
                      </p>
                      <Button className="flex items-center gap-3 rounded-full bg-white py-8 hover:bg-gray-300">
                        <Image
                          src="/main-jjiggo-logo.svg"
                          width={130}
                          height={0}
                          alt="jangjeon-logo"
                        />
                        <ArrowRight color="#000000" />
                      </Button>
                    </div>
                  </div>
                </li>
                <li className="relative w-[320px] overflow-hidden rounded-2xl mobile:w-[1200px]">
                  <div className=" relative flex h-[150px] bg-[#F7F7F7] mobile:h-[380px]">
                    <div className="flex w-2/3 justify-center">
                      <Image
                        src="/main-sniperfactory.svg"
                        width={580}
                        height={0}
                        alt="mainjangjeon"
                      />
                    </div>
                    <div className="flex flex-col justify-center gap-2 mobile:gap-12">
                      <p className="text-left text-BB12 mobile:text-HB28">
                        Snipe your dream
                        <br /> 너의 스펙이 되어줄게
                      </p>
                      <Button className="flex items-center gap-3 rounded-full bg-white py-8 hover:bg-gray-300">
                        <Image
                          src="/main-sniperfactory-logo.svg"
                          width={210}
                          height={0}
                          alt="jangjeon-logo"
                        />
                        <ArrowRight color="#000000" />
                      </Button>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <StyleUnderLineText onContainerSlide={handleContainerSlide} />
        </div>
      </div>
    </section>
  );
}
