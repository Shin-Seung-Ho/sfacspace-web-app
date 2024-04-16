import Image from 'next/image';
import { Card } from '@/components/ui/card';

interface NewsCardProps {
  src: string;
  day: string;
  title: string;
  content: string;
}

export default function NewsCard({ src, day, title, content }: NewsCardProps) {
  return (
    <Card className="flex flex-col gap-4 py-4">
      <div className="flex w-full items-center justify-center">
        <Image
          src={src}
          width={360}
          height={0}
          style={{ width: '90%', height: '100%' }}
          alt="news"
          className=" rounded-2xl shadow-xl"
        />
      </div>
      <div className="flex items-center gap-2 px-4">
        <p className="text-[#47BFEF]">보도자료</p>
        <p className=" text-BM12">{day}</p>
      </div>
      <div className="flex flex-col gap-3 px-4">
        <p className="line-clamp-1 text-BB20">{title}</p>
        <p className=" line-clamp-2 text-BM16 text-[#9D9D9D]">{content}</p>
      </div>
    </Card>
  );
}
