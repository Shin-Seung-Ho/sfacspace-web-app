'use client';

// import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
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
  const path = usePathname();
  return (
    <section className="mobile:h-[800px] max-mobile:my-8 max-mobile:mx-5 relative mx-auto my-10 h-[730px] max-w-[1360px]">
      <div className=" flex justify-center py-10">
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 h-full w-full rounded-[40px] object-cover"
        >
          <source src={src} />
        </video>
        <MotionDiv
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: 30, opacity: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute inset-0 flex flex-col items-center justify-center gap-8"
        >
          <div className="flex flex-col gap-5 text-white">
            <h2 className=" mobile:text-HB60 whitespace-pre-line text-center text-HM28">
              {title}
            </h2>
            <h6 className="mobile:text-BM20 max-mobile:whitespace-pre-line max-mobile:break-keep max-mobile:text-center text-BM12">
              {description}
            </h6>
          </div>
          <div className="mobile:gap-5 flex gap-2">
            {bannerBadge.map((e, idx) => (
              // eslint-disable-next-line react/no-array-index-key
              <Link key={idx} href={e.link}>
                <Badge
                  className={`mobile:px-5 mobile:py-3 rounded-full bg-white bg-opacity-20 px-3 py-2 text-[16px] text-white backdrop:blur-lg ${path === `/company` && e.label === '기업스토리' && 'bg-white bg-opacity-70 text-black hover:bg-white hover:bg-opacity-50'} ${path === `/company/history` && e.label === '연혁' && 'hover:bg-opacity-보도자료 bg-white bg-opacity-70 text-black hover:bg-white'} ${path === `/company/press` && e.label === '보도자료' && 'bg-white bg-opacity-70 text-black hover:bg-white hover:bg-opacity-50'}`}
                >
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
