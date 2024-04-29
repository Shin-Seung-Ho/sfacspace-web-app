'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function SolutionBanner() {
  const path = usePathname();
  return (
    <div className="relative h-[300px] w-full mobile:min-h-screen">
      <div className=" absolute h-[300px] mobile:h-full mobile:w-full">
        <Image
          src="/solution/solution-banner.png"
          width={1400}
          height={0}
          style={{ width: '100%', height: '100%' }}
          alt="solution banner"
          className="w-full"
        />
      </div>
      <div className=" mx-auto flex max-h-screen max-w-7xl flex-col-reverse items-start text-white max-mobile:absolute max-mobile:bottom-0 max-mobile:gap-6 max-mobile:px-5 mobile:min-h-screen mobile:flex-row mobile:items-center mobile:justify-between">
        <div className="z-30 flex flex-row max-mobile:gap-6 mobile:flex-col">
          <div className="flex flex-row items-center gap-2">
            <Link href="/solution/vision">
              <p className="text-BM20 mobile:text-HB32">Vision</p>
            </Link>
            <div
              className={`h-2 w-2 rounded-full bg-[#47BFEF] ${path !== `/solution/vision` && 'hidden'}`}
            />
          </div>
          <div className="flex flex-row items-center gap-2">
            <Link href="/solution/nlp">
              <p className="text-BM20 mobile:text-HB32">NLP</p>
            </Link>
            <div
              className={`h-2 w-2 rounded-full bg-[#47BFEF] ${path !== `/solution/nlp` && 'hidden'}`}
            />
          </div>
        </div>
        <div className="z-30 flex flex-col text-left max-mobile:gap-3 mobile:text-right">
          <p className="text-HB32 font-bold mobile:text-HB80 mobile:font-extrabold">
            Computer Vision
          </p>
          <p className="text-BM14 mobile:text-BM20">
            인공지능을 통해 이미지와 비디오에서
            <br className="mobile:hidden" /> 오브젝트를 인식하고 변형하는 솔루션
          </p>
        </div>
      </div>
    </div>
  );
}
