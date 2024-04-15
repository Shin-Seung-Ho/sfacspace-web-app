'use client';

import Image from 'next/image';
import { Card, CardDescription, CardTitle } from '@/components/ui/card';

interface NewsCardProps {
  img: string;
  title: string;
  content: string;
}

export default function NewsCard({ img, title, content }: NewsCardProps) {
  return (
    <Card>
      <Image src={img} width={200} height={200} alt="newsImg" />
      <CardTitle>{title}</CardTitle>
      <CardDescription className=" line-clamp-2">{content}</CardDescription>
    </Card>
  );
}
