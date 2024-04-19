'use client';

import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import MotionDiv from '@/components/common/motion-div';

export default function SolutionCard() {
  // 현재 선택된 카드를 추적하는 state와 선택된 카드를 변경하는 함수
  const [selectedCard, setSelectedCard] = useState('Vision');

  return (
    <div className="flex h-full items-center justify-end gap-5">
      <div className="flex flex-col gap-4 text-white">
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
            className="relative z-50 text-BB20 font-bold"
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
          className="h-full w-3/4"
        >
          <Card className="h-full p-10">
            <CardTitle className=" text-HB48">ComPuter Vision</CardTitle>
            <CardContent className=" w-3/4 whitespace-pre-line break-keep py-5 text-BR20">
              인공지능을 통해 이미지와 비디오에서 오브젝트를 인식하고 변형하는
              솔루션
            </CardContent>
            <Button className="mt-10">
              자세히 보러가기 <ArrowRight className="h-4 w-4" />
            </Button>
          </Card>
        </MotionDiv>
      )}
      {selectedCard === 'NLP' && (
        <MotionDiv
          whileInView={{ x: 0, opacity: 1 }}
          initial={{ x: 30, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="h-full w-3/4"
        >
          <Card className="h-full p-10">
            <CardTitle className="text-HB48">NLP</CardTitle>
            <CardContent className=" w-4/5 whitespace-pre-line break-keep py-5 text-BR20">
              내용 요약, 번역, 감성 분석, 텍스트 분류 등에서 자주 활용되는
              자연어 분석 및 처리
            </CardContent>
            <Button className="mt-10">
              자세히 보러가기 <ArrowRight className="h-4 w-4" />
            </Button>
          </Card>
        </MotionDiv>
      )}
    </div>
  );
}
