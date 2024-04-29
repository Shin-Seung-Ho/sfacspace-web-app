'use client';

import { ArrowUpRight, Calendar } from 'lucide-react';
import Image from 'next/image';
import { Card, CardDescription, CardTitle } from '@/components/ui/card';

interface MainNewsCardProps {
  title?: string;
  content?: string;
  day?: string;
  bgimg: string;
}

export default function MainNewsCard({
  title,
  content,
  day,
  bgimg,
}: MainNewsCardProps) {
  return (
    <Card className="max-mobile:w-[380px] mobile:p-6 max-mobile:ml-3 relative flex flex-col gap-10 rounded-[20px] p-3">
      <Image
        src={bgimg}
        width={500}
        height={0}
        alt="bgimg"
        className=" absolute inset-0 h-full rounded-[20px] bg-cover"
      />
      <div className="absolute inset-0 rounded-[20px] bg-white bg-opacity-60 backdrop-blur-sm" />
      <div className="max-mobile:w-[300px] z-30 flex flex-row justify-between">
        <div className="text-BR14 flex items-center gap-1 text-[#C4C4C4]">
          <Calendar className="h-4 w-4" />
          <p>{day}</p>
        </div>
        <ArrowUpRight color="#FFFFFF" className="rounded-full bg-black" />
      </div>
      <div className="z-30 flex flex-col gap-1">
        <p className="text-BR16 text-[#73B8F7]">News</p>
        <CardTitle className="mobile:text-BB24 text-BB14 max-mobile:font-bold line-clamp-1">
          {title}
        </CardTitle>
        <CardDescription className=" mobile:text-BR16 line-clamp-2 text-BR12 text-[#929292]">
          {content}
        </CardDescription>
      </div>
    </Card>
  );
}
