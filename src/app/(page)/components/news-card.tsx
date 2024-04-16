'use client';

import Image from 'next/image';
import { Card, CardDescription, CardTitle } from '@/components/ui/card';

interface MainNewsCardProps {
  img: string;
  title: string;
  content: string;
}

export default function MainNewsCard({
  img,
  title,
  content,
}: MainNewsCardProps) {
  return (
    <Card>
      <Image src={img} width={200} height={200} alt="newsImg" />
      <CardTitle>{title}</CardTitle>
      <CardDescription className=" line-clamp-2">{content}</CardDescription>
    </Card>
  );
}
