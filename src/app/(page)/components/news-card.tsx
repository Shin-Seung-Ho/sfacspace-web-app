'use client';

import { ArrowUpRight } from 'lucide-react';
import { Card, CardDescription, CardTitle } from '@/components/ui/card';

interface MainNewsCardProps {
  title?: string;
  content?: string;
}

export default function MainNewsCard({ title, content }: MainNewsCardProps) {
  return (
    <Card className="p-6">
      <ArrowUpRight color="#FFFFFF" className="rounded-full bg-black" />
      <CardTitle>{title}</CardTitle>
      <CardDescription className=" line-clamp-2">{content}</CardDescription>
    </Card>
  );
}
