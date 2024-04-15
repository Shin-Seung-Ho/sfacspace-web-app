'use client';

// import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '../ui/badge';
import { bannerBadge } from '@/app/config/constants';

interface BannerVideoCardProps {
  src: string;
  title: string;
  description: string;
}

export default function BannerVideoCard({
  src,
  title,
  description,
}: BannerVideoCardProps) {
  return (
    <section className=" mx-auto min-h-screen max-w-[1600px]">
      <div className="relative flex justify-center">
        <video autoPlay loop muted className="rounded-[40px]">
          <source src={src} />
        </video>
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-5">
          <div className="flex flex-col gap-5 text-white">
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
