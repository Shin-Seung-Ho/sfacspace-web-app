import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import MotionDiv from '@/components/common/motion-div';
import { InfiniteMovingVoucherCards } from './voucher-moving-cards';

export default function VoucherBottom() {
  return (
    <section className=" w-full">
      <div className="relative flex justify-center">
        <video autoPlay loop muted className="w-full">
          <source src="/voucher/voucher-bottom-video.mp4" />
        </video>
        <div className="absolute inset-0 bg-black opacity-70" />
        <MotionDiv
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: 30, opacity: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute inset-0 mx-auto flex max-w-7xl flex-col items-center justify-center gap-8"
        >
          <div className="flex w-3/5 flex-col items-center text-white">
            <h2 className="whitespace-pre-line break-keep text-center text-HM48">
              스팩스페이스는 업계 기업들이 선택한 데이터 바우처 공식
              공급기업입니다
            </h2>
            <p className="whitespace-pre-line text-center text-BM20 text-[#C4C4C4]">
              우리는 최신 기술력을 바탕으로, 스팩스페이스 솔루션을 공식
              공급합니다.
            </p>
          </div>
          <InfiniteMovingVoucherCards />
          <p className=" text-[32px] font-bold text-white">
            스팩스페이스의 다양한 바우처를 만나보세요!
          </p>
          <div className="flex items-center gap-6 text-BM24 text-white">
            <Link href="/vouchers/industrial">
              <div className="flex cursor-pointer items-center gap-2">
                산업맞춤형 혁신바우처
                <ArrowUpRight
                  color="#000000"
                  strokeWidth={2.25}
                  className="rounded-full bg-white"
                />
              </div>
            </Link>
            <p>|</p>
            <Link href="/vouchers/ai">
              <div className="flex cursor-pointer items-center gap-2">
                AI 바우처
                <ArrowUpRight
                  color="#000000"
                  strokeWidth={2.25}
                  className="rounded-full bg-white"
                />
              </div>
            </Link>
            <p>|</p>
            <Link href="/vouchers/innovation">
              <div className="flex cursor-pointer items-center gap-2">
                혁신바우처
                <ArrowUpRight
                  color="#000000"
                  strokeWidth={2.25}
                  className="rounded-full bg-white"
                />
              </div>
            </Link>
            <p>|</p>
            <Link href="/vouchers/tourism">
              <div className="flex cursor-pointer items-center gap-2">
                관광기업 혁신바우처
                <ArrowUpRight
                  color="#000000"
                  strokeWidth={2.25}
                  className="rounded-full bg-white"
                />
              </div>
            </Link>
          </div>
        </MotionDiv>
      </div>
    </section>
  );
}
