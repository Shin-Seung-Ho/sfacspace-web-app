'use client';

// import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '../ui/badge';
import { bannerBadge } from '@/app/config/constants';
import MotionDiv from './motion-div';

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
    <section className=" mx-auto min-h-screen max-w-[1360px]">
      <div className="relative flex justify-center py-10">
        <video autoPlay loop muted className="rounded-[40px]">
          <source src={src} />
        </video>
        <MotionDiv
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: 30, opacity: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute inset-0 flex flex-col items-center justify-center gap-8"
        >
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
                <Badge className=" rounded-full bg-white bg-opacity-20 px-5 py-3 text-[16px] text-white backdrop:blur-lg">
                  {e.label}
                </Badge>
              </Link>
            ))}
          </div>
        </MotionDiv>
        {/* <div className="absolute inset-0 flex flex-col items-center justify-center gap-8" /> */}
      </div>
    </section>
  );
}
