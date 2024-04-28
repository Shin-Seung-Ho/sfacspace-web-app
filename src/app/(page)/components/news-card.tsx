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
    <Card className="relative flex flex-col gap-10 rounded-[20px] p-6">
      <Image
        src={bgimg}
        width={500}
        height={0}
        alt="bgimg"
        className=" absolute inset-0 h-full rounded-[20px] bg-cover"
      />
      <div className=" absolute inset-0 rounded-[20px] bg-white bg-opacity-60 backdrop-blur-sm" />
      <div className="z-30 flex flex-row justify-between">
        <div className="flex items-center gap-1 text-BR14 text-[#C4C4C4]">
          <Calendar className="h-4 w-4" />
          <p>{day}</p>
        </div>
        <ArrowUpRight color="#FFFFFF" className="rounded-full bg-black" />
      </div>
      <div className="z-30 flex flex-col gap-1">
        <p className="text-BR16 text-[#73B8F7]">News</p>
        <CardTitle className="pb-2">{title}</CardTitle>
        <CardDescription className=" line-clamp-2">{content}</CardDescription>
      </div>
    </Card>
  );
}
