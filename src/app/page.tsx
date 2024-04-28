import { ArrowUpRight, ChevronsDown, Mouse } from 'lucide-react';
import Image from 'next/image';
import { pressData, voucherlogo1, voucherlogo2 } from './config/constants';
import MotionDiv from '@/components/common/motion-div';
import SectionTitle from './(page)/components/section-title';
import { Button } from '@/components/ui/button';
import { SparklesCore } from '@/components/ui/sparkles';
import ParentComponent from './(page)/components/container-slider';
import VoucherMeritBG from './(page)/components/voucher-merit-bg';
import NeonRing from './(page)/components/ring/ring';
import SolutionCard from './(page)/components/solution-card';
import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards';
import VoucherCards from './(page)/components/voucherpage-cards';
import MainNewsCard from './(page)/components/news-card';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black">
      <section className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="relative h-full w-full"
          particleColor="#FFFFFF"
        />
        <MotionDiv
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: -100, opacity: 0 }}
          transition={{ duration: 1, delay: 0 }}
          className=" absolute -translate-y-1/2"
        >
          <NeonRing />
        </MotionDiv>
        <MotionDiv
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: 100, opacity: 0 }}
          transition={{ duration: 1, delay: 0 }}
          className=" absolute z-10"
        >
          <h1 className=" text-center text-HB48 text-white">
            {' '}
            기업 향상을 위한 <br /> 독자적인 솔루션 <br /> 오직{' '}
            <span className="text-[#47BFEF]">SFACSPACE </span>에서
          </h1>
        </MotionDiv>
        <div className="absolute bottom-0 flex animate-bounce flex-col items-center pb-16">
          <Mouse color="#b4b4b4" className=" h-10 w-10" />
          <ChevronsDown color="#b4b4b4" />
        </div>
      </section>

      <section className="flex w-full flex-col bg-white py-40">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-8">
          <MotionDiv
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: 30, opacity: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
            className="flex flex-col items-center justify-center"
          >
            <div className="relative flex items-center">
              <div className="absolute -left-16 h-28 w-28 rounded-full bg-[#73B8F7]" />
              <p className=" relative text-HB60"> Innovating Tomorrow</p>
            </div>
          </MotionDiv>
          <p className="text-BR24">
            최신 기술, 바우처 사업으로 더 나은 미래를 꿈꿉니다.
          </p>
          <ParentComponent />
        </div>
      </section>

      <section className="relative w-full overflow-hidden rounded-md bg-black">
        <div className="relative flex h-[700px] items-center justify-center">
          <Image
            src="/history/history-bg.png"
            width={1000}
            height={0}
            style={{ width: '100%', height: '100%' }}
            objectFit="cover"
            alt="spacebg"
          />
          <div className=" absolute mx-auto flex w-full max-w-7xl flex-col justify-between max-mobile:px-5 mobile:flex-row">
            <MotionDiv
              whileInView={{ y: 0, opacity: 1 }}
              initial={{ y: 30, opacity: 0 }}
              transition={{ duration: 1, delay: 0.1 }}
              className="flex flex-col items-start mobile:items-center"
            >
              <SectionTitle
                title={`계속되는 도전,
              혁신을 향한
              노력의 흔적`}
                textWhite
                descripstion="꿈꾸던 것을 현실로, 바래왔던것을 이루게 합니다."
              />
            </MotionDiv>
            <MotionDiv
              whileInView={{ y: 0, opacity: 1 }}
              initial={{ y: 30, opacity: 0 }}
              transition={{ duration: 1, delay: 0.1 }}
              className="w-full mobile:w-1/2"
            >
              <SolutionCard />
            </MotionDiv>
          </div>
        </div>
      </section>

      <section className="min-h-screen w-full bg-white py-28">
        <div className=" mx-auto flex max-w-7xl flex-col">
          <MotionDiv
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: 30, opacity: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
          >
            <div className="flex flex-col">
              <p className="text-BM12 text-[#47BFEF] mobile:text-BM24">
                Voucher
              </p>
              <h3
                className={` whitespace-pre-line break-keep text-BB20 font-semibold text-[#131313] mobile:text-HB48 mobile:font-bold`}
              >
                6,000만원 규모
                <br /> AI 가공 솔루션 지원 사업을
                <br /> 스팩스페이스에서 무료로 이용해보세요!
              </h3>
            </div>
          </MotionDiv>
          <VoucherCards />
        </div>
        {/* 호버 할때 배경변경되는 섹션 */}
        <VoucherMeritBG />
        <div className="dark:bg-grid-white/[0.05] relative flex flex-col overflow-hidden rounded-md bg-white py-4 antialiased dark:bg-black">
          <InfiniteMovingCards
            items={voucherlogo1}
            direction="left"
            speed="normal"
          />
        </div>
        <div className="dark:bg-grid-white/[0.05] relative flex flex-col overflow-hidden rounded-md bg-white py-4 antialiased dark:bg-black">
          <InfiniteMovingCards
            items={voucherlogo2}
            direction="right"
            speed="normal"
          />
        </div>
      </section>

      <section className="w-full bg-white">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-28 py-20 mobile:flex-row">
          <MotionDiv
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: 30, opacity: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
            className="flex flex-col gap-12"
          >
            <div className="flex flex-col gap-2">
              <p className="text-BM12 text-[#47BFEF] mobile:font-preMedium mobile:text-BM24">
                NEWSROOM
              </p>
              <h3 className="whitespace-pre-line break-keep text-HB28 font-bold text-[#131313] mobile:font-preSemiBold mobile:text-HB60">
                {`Sfacspace's technology is
                constantly evolving.`}
              </h3>
              <h6 className="whitespace-pre-line text-BR16 mobile:text-BM24">
                스팩스페이스의 최신 소식을 만나보세요.
              </h6>
            </div>
            <div className="flex gap-3">
              <Button className="rounded-full bg-[#EDEDED] py-4 text-BB20 text-[#131313] hover:bg-gray-500">
                뉴스룸 바로가기
                <ArrowUpRight
                  color="#ffffff"
                  className="rounded-full bg-black"
                />
              </Button>
            </div>
          </MotionDiv>
          <div className="scrollbar-hide flex h-[180px] flex-row gap-4 overflow-y-auto mobile:h-[960px] mobile:w-[420px] mobile:flex-col">
            {pressData.map((e) => (
              <MainNewsCard
                title={e.title}
                day={e.day}
                content={e.content}
                bgimg={e.src}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
