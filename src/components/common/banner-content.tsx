'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Badge } from '../ui/badge';
import { bannerBadge } from '@/app/config/constants';

interface BannerCardProps {
  src: string;
  title: string;
  description: string;
}

export default function BannerCard({
  src,
  title,
  description,
}: BannerCardProps) {
  const path = usePathname();
  return (
    <section className=" mx-auto my-10 max-w-7xl">
      <div className="relative flex justify-center">
        <Image
          src={src}
          width={1260}
          height={0}
          style={{ width: '100%', height: '100%' }}
          objectFit="cover"
          alt="company-banner"
          className=" rounded-[40px]"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-5">
          <div
            className={`flex flex-col gap-5 ${path.includes(`press`) ? 'text-black' : 'text-white'}`}
          >
            <h2 className=" whitespace-pre-line text-center text-HB60">
              {title}
            </h2>
            <h6 className=" text-BM20">{description}</h6>
          </div>
          <div className="flex gap-5">
            {bannerBadge.map((e, idx) => (
              // eslint-disable-next-line react/no-array-index-key
              <Link key={idx} href={e.link}>
                <Badge className=" rounded-full bg-white bg-opacity-20 px-5 py-3 text-BM20 text-white backdrop:blur-lg">
                  {e.label}
                </Badge>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
