'use client';

import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import MotionDiv from '@/components/common/motion-div';

export default function SolutionCard() {
  // 현재 선택된 카드를 추적하는 state와 선택된 카드를 변경하는 함수
  const [selectedCard, setSelectedCard] = useState('Vision');

  return (
    <div className="flex h-full flex-col items-start justify-end gap-5 mobile:flex-row mobile:items-center">
      <div className="flex flex-col items-center gap-4 text-white max-mobile:py-12">
        {/* Vision을 클릭했을 때 */}
        <div className="relative cursor-pointer">
          <p
            role="presentation"
            className="relative z-50 text-BB20 font-normal"
            onClick={() => setSelectedCard('Vision')}
          >
            Vision
          </p>
          {selectedCard === 'Vision' && (
            <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-[#47BFEF]" />
          )}
        </div>
        {/* NLP를 클릭했을 때 */}
        <div className="relative cursor-pointer">
          <p
            role="presentation"
            className="relative z-50 text-BB20 font-normal"
            onClick={() => setSelectedCard('NLP')}
          >
            NLP
          </p>
          {selectedCard === 'NLP' && (
            <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-[#47BFEF]" />
          )}
        </div>
      </div>
      {/* 선택된 카드에 따라 렌더링 */}
      {selectedCard === 'Vision' && (
        <MotionDiv
          whileInView={{ x: 0, opacity: 1 }}
          initial={{ x: 30, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="h-full w-full mobile:w-3/4"
        >
          <Card className="h-full border-[#666666] bg-white bg-opacity-10 p-10 text-white backdrop-blur-sm">
            <CardTitle className=" text-HB28 max-mobile:font-bold mobile:text-HB48">
              Computer Vision
            </CardTitle>
            <CardContent className="w-3/4 whitespace-pre-line break-keep py-5 text-BR16 mobile:text-BR20">
              인공지능을 통해 이미지와 비디오에서 오브젝트를 인식하고 변형하는
              솔루션
            </CardContent>
            <Link href="/solution/vision">
              <Button className=" mt-10 rounded-full bg-[#73B8F7] py-6 text-black max-mobile:text-BM16">
                자세히 보러가기 <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </Card>
        </MotionDiv>
      )}
      {selectedCard === 'NLP' && (
        <MotionDiv
          whileInView={{ x: 0, opacity: 1 }}
          initial={{ x: 30, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="h-full w-full mobile:w-3/4"
        >
          <Card className="h-full border-[#666666] bg-white bg-opacity-10 p-10 text-white backdrop-blur-sm">
            <CardTitle className="text-HB28 max-mobile:font-bold mobile:text-HB48">
              NLP
            </CardTitle>
            <CardContent className=" w-4/5 whitespace-pre-line break-keep py-5 text-BR16 mobile:text-BR20">
              내용 요약, 번역, 감성 분석, 텍스트 분류 등에서 자주 활용되는
              자연어 분석 및 처리
            </CardContent>
            <Link href="/solution/nlp">
              <Button className="mt-10 rounded-full bg-[#73B8F7] py-6 text-black">
                자세히 보러가기 <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </Card>
        </MotionDiv>
      )}
    </div>
  );
}
